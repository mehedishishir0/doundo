"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { Cart } from "../lib/types/ecommerce";
import { cartService } from "../lib/api/cart-service";
import { useSession } from "next-auth/react";
import { toast } from "sonner";


interface CartContextType {
  cart: Cart | null;
  loading: boolean;
  refreshCart: () => Promise<void>;
  addToCart: (
    items: {
      productId: string;
      quantity: number;
      color?: string;
      size?: string;
    }[],
    userId: string
  ) => Promise<void>;
  updateQuantity: (
    productId: string,
    quantity: number,
    color?: string,
    size?: string
  ) => Promise<void>;
  removeFromCart: (
    productId: string,
    color?: string,
    size?: string
  ) => Promise<void>;
  clearCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  console.log(session?.user.id);

  const refreshCart = useCallback(async () => {
    if (!session?.user?.id) {
      setCart(null);
      return;
    }
    setLoading(true);
    try {
      const response = await cartService.getCart(session.user.id);
      if (response.success) {
        setCart(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    } finally {
      setLoading(false);
    }
  }, [session?.user?.id]);

  useEffect(() => {
    refreshCart();
  }, [refreshCart]);

  const addToCart = useCallback(
    async (
      items: {
        productId: string;
        quantity: number;
        color?: string;
        size?: string;
      }[],
      userId: string
    ) => {
      try {
        const response = await cartService.addToCart(userId, items);
        if (response.success) {
          setCart(response.data);
        }
      } catch (error) {
        console.error("Failed to add to cart:", error);
        throw error;
      }
    },
    []
  );

  const updateQuantity = useCallback(
    async (
      productId: string,
      quantity: number,
      color?: string,
      size?: string
    ) => {
      if (!session?.user?.id || !cart) return;

      try {
        // Build updated productIds array
        const updatedProductIds = cart.productIds.map((item) =>
          item.productId._id === productId &&
          item.color === color &&
          item.size === size
            ? {
                productId: item.productId._id,
                quantity,
                color: item.color,
                size: item.size,
              }
            : {
                productId: item.productId._id,
                quantity: item.quantity,
                color: item.color,
                size: item.size,
              }
        );

        const response = await cartService.updateCart(
          session.user.id,
          updatedProductIds
        );
        if (response.success) {
          setCart(response.data);
        }
      } catch (error) {
        console.error("Failed to update cart quantity:", error);
        throw error;
      }
    },
    [session?.user?.id, cart]
  );

  const removeFromCart = useCallback(
    async (productId: string, color?: string, size?: string) => {
      if (!session?.user?.id || !cart) return;

      try {
        // Note: The specific DELETE endpoint as currently implemented in the backend
        // removes all variations of the productId.
        const response = await cartService.removeFromCart(cart._id, productId);
        if (response.success) {
          setCart(response.data);
          toast.success(response.message || 'Item has remove form cart')
        }
      } catch (error) {
        console.error("Failed to remove from cart:", error);
        throw error;
      }
    },
    [session?.user?.id, cart]
  );

  const clearCart = useCallback(async () => {
    if (!session?.user?.id) return;
    try {
      const response = await cartService.updateCart(session.user.id, []);
      if (response.success) {
        setCart(response.data);
      }
    } catch (error) {
      console.error("Failed to clear cart:", error);
      throw error;
    }
  }, [session?.user?.id]);

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        refreshCart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
