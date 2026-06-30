"use client";
import React, { useEffect, useState } from "react";

import { Button } from "../ui/button";

import { Product } from "@/lib/types/ecommerce";
import { productService } from "@/lib/api/product-service";
import { MoveRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useCart } from "@/provider/cart-provider";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import ProductCard from "../shared/product-card";

const MerchandiseProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState(false);
  const [addingToCartId, setAddingToCartId] = useState<string | null>(null);

  const { addToCart } = useCart();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productService.getmarchandice();
        if (response.success) {
          setProducts(response.data);
        } else {
          setError("Failed to fetch products");
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("An error occurred while fetching products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (
    e: React.MouseEvent,
    product: Product,
    redirect: boolean = false
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (!session?.user?.id) {
      toast.error("Please sign in to add to cart.");
      return;
    }

    setAddingToCartId(product._id);
    try {
      await addToCart(
        [
          {
            productId: product._id,
            quantity: 1,
          },
        ],
        session.user.id
      );
      toast.success(`${product.productName} added to cart!`);
      if (redirect) {
        router.push("/cart");
      }
    } catch (error) {
      toast.error("Failed to add to cart. Please try again.");
      console.error("Add to cart error:", error);
    } finally {
      setAddingToCartId(null);
    }
  };

  if (loading) {
    return (
      <section className="my-10 md:my-16">
        <div className="container mx-auto py-12">
          <h2 className="text-lg md:text-2xl xl:text-[48px] text-[#0C0D0E] leading-[150%] font-semibold mb-8 text-center invisible">
            ALL Merchandise Product
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(3)].map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="my-10 md:my-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            ALL Merchandise Product
          </h2>
          <p className="text-center text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            ALL Merchandise Product
          </h2>
          <p className="text-center text-gray-500">
            No products available at the moment.
          </p>
        </div>
      </section>
    );
  }
  return (
    <section className="my-10 md:my-16">
      <div className="container mx-auto">
        <h2 className="text-lg md:text-2xl xl:text-[48px] text-primary-foreground leading-[150%] font-semibold mb-8 text-center">
          ALL Merchandise Product
        </h2>

        {products?.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">You have no data</p>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-5">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                handleAddToCart={handleAddToCart}
                addingToCartId={addingToCartId}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export const ProductCardSkeleton = () => {
  return (
    <div className="group relative border-2 border-gray-100 rounded-lg overflow-hidden flex flex-col justify-center bg-white p-4">
      <Skeleton className="w-full aspect-square rounded-lg mb-4" />
      <div className="space-y-4">
        <Skeleton className="h-6 w-3/4 mx-auto" />
        <div className="flex justify-between items-center gap-2">
          <Skeleton className="h-10 w-20" />
          <Skeleton className="h-10 flex-1" />
        </div>
      </div>
    </div>
  );
};

export default MerchandiseProduct;
