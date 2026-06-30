import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { Product } from "@/lib/types/ecommerce";
import DownloadForm from "./DownloadForm";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const isCard = product.productType === "card";

  return (
    <section className="my-12 border-t pt-4 border-[#EFEFEF] overflow-hidden ">
      <div className="">
        <div
          className={`grid grid-cols-1 ${
            isCard ? "lg:grid-cols-12" : "lg:grid-cols-1"
          } lg:gap-8 mx-auto`}
        >
          {/* LEFT CONTENT */}
          <div className={isCard ? "lg:col-span-7" : "lg:col-span-1"}>
            <h2 className="text-2xl font-bold text-primary-foreground mb-6">
              {product.productName}
            </h2>

            <div className="prose prose-primary max-w-none text-primary-foreground/90 break-words overflow-hidden">
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          {isCard && (
            <div className="lg:col-span-5">
              <DownloadForm gameName={product.productName} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export const ProductDetailsSkeleton = () => {
  return (
    <section className="my-12 border-t border-[#EFEFEF]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <Skeleton className="h-8 w-1/2 mb-6" />
            <div className="space-y-4 mb-12">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
          <div className="lg:col-span-5">
            <Skeleton className="h-[400px] w-full rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
