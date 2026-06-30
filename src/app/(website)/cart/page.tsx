"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProductNavbar from "@/components/shared/ProductNavbar";
import ProductFooter from "@/components/shared/ProductFooter";
import CartItem from "@/components/shared/CartItem";
import OrderSummary from "@/components/shared/OrderSummary";
import { usePayment } from "@/hooks/use-payment";
import {
  useCartQuery,
  useUpdateCartQuantity,
  useRemoveFromCart,
} from "@/hooks/use-cart-query";
import { useCartLogic, getCartItemKey } from "@/hooks/use-cart-logic";
import CartSkeleton from "@/components/shared/CartSkeleton";

export default function CartPage() {
  // Fetch cart data
  const { data: cart, isLoading } = useCartQuery();

  // Mutations
  const { mutate: updateQuantity } = useUpdateCartQuantity();
  const { mutate: removeFromCart } = useRemoveFromCart();

  // Cart UI logic
  const {
    items,
    localQuantities,
    subtotal,
    handleQuantityChange,
    handleRemove,
  } = useCartLogic({
    cart: cart || null,
    onUpdateQuantity: updateQuantity,
    onRemoveFromCart: removeFromCart,
  });

  // Payment
  const { mutate: createPayment, isPending: isCheckoutLoading } = usePayment();

  // Constants for shipping and tax
  const SHIPPING_ESTIMATE = 5;
  const TAX_RATE = 0.13;

  const tax = subtotal * TAX_RATE;
  const totalAmount = subtotal + SHIPPING_ESTIMATE + tax;

  const handleCheckout = () => {
    if (!cart) return;

    createPayment({
      userId: cart.userId,
      totalAmount: totalAmount,
      itemIds: [cart._id],
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FBFBFB]">
        <ProductNavbar />
        <CartSkeleton />
        <ProductFooter />
      </div>
    );
  }

  return (
    <div className=" bg-[#FBFBFB]">
      {/* <ProductNavbar /> */}

      <main className="container mx-auto px-6 py-8">
        {/* Back Link */}
        <Link
          href="/game"
          className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-8 hover:underline decoration-2 underline-offset-4 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Continue Shopping
        </Link>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Cart Items List */}
          <div className="w-full lg:flex-1">
            {items.length > 0 ? (
              <div className="flex flex-col item-between">
                {items.map((item) => {
                  const key = getCartItemKey(
                    item?.productId?._id,
                    item.color,
                    item.size
                  );
                  return (
                    <CartItem
                      key={key}
                      id={item?.productId?._id}
                      title={item?.productId?.productName}
                      description={item?.productId?.description}
                      price={item?.productId?.price}
                      color={item.color}
                      size={item.size}
                      imageUrl={
                        item?.productId?.imgs?.[0] ||
                        item?.productId?.img ||
                        "/no-image.jpg"
                      }
                      quantity={localQuantities[key] ?? item.quantity}
                      onQuantityChange={(id, qty) =>
                        handleQuantityChange(id, qty, item.color, item.size)
                      }
                      onRemove={() =>
                        handleRemove(
                          item?.productId?._id,
                          item.color,
                          item.size
                        )
                      }
                    />
                  );
                })}
              </div>
            ) : (
              <div className="bg-white border border-[#EFEFEF] rounded-2xl p-12 text-center flex flex-col items-center gap-4">
                <div className="text-4xl">🛒</div>
                <h3 className="text-xl font-bold text-[#111111]">
                  Your cart is empty
                </h3>
                <p className="text-[#8B8B8B]">
                  Looks like you haven&apos;t added anything to your cart yet.
                </p>
                <Link href="/game/">
                  <span className="inline-block bg-black text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-[#111111] transition-colors">
                    Start Shopping
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-[380px]">
            <OrderSummary
              subtotal={subtotal}
              shipping={SHIPPING_ESTIMATE}
              tax={tax}
              onCheckout={handleCheckout}
              isCheckoutLoading={isCheckoutLoading}
              isDisabled={items.length === 0}
            />
          </div>
        </div>
      </main>

      {/* <ProductFooter /> */}
    </div>
  );
}
