"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
// import ProductNavbar from "@/components/shared/ProductNavbar"
// import ProductHero from "@/components/shared/ProductHero"
// import ProductDetails from "@/components/shared/ProductDetails"
// import MediaSection from "@/components/shared/MediaSection"
// import ProductFooter from "@/components/shared/ProductFooter"
import { Product } from "@/lib/types/ecommerce";
import { productService } from "@/lib/api/product-service";
import MerchandiseSingleCard, {
  MerchandiseSingleCardSkeleton,
} from "@/components/merchandise/merchandiseSingleProduct/MerchandiseSingleCard";
import ProductDetails, {
  ProductDetailsSkeleton,
} from "@/components/shared/ProductDetails";
// import { Skeleton } from "@/components/ui/skeleton";

const ProductPageSkeleton = () => {
  return (
    <div className=" bg-[#FBFBFB]">
      <main className="relative z-10 pt-20 lg:pt-24 pb-20 container mx-auto px-6 lg:px-0 max-w-[1000px]">
        <MerchandiseSingleCardSkeleton />
        <ProductDetailsSkeleton />
      </main>
    </div>
  );
};

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;
      try {
        const response = await productService.getProductById(productId);
        if (response.success) {
          setProduct(response.data);
        } else {
          setError("Failed to fetch product");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("An error occurred while fetching the product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <ProductPageSkeleton />;
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-[#FBFBFB] flex items-center justify-center">
        <p className="text-red-500 text-lg">{error || "Product not found"}</p>
      </div>
    );
  }

  return (
    <div className="  selection:text-[#2E8F8A]">
      {/* Patterned Background Overlay (Subtle) */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: 'url("/images/pattern-bg.png")',
          backgroundSize: "400px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* <ProductNavbar /> */}

      <main className="relative z-10 pb-20 container mx-auto px-6 lg:px-0 max-w-[1000px] ">
        <MerchandiseSingleCard product={product} />
        <ProductDetails product={product} />
        {/* <MediaSection videoLink={product.videoLink} /> */}
      </main>

      {/* <ProductFooter /> */}
    </div>
  );
}
