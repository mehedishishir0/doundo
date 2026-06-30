"use client";

import React from "react";

export default function CartSkeleton() {
  return (
    <div className="bg-[#FBFBFB] min-h-screen">
      <main className="container mx-auto px-6 py-8">
        {/* Back Link Placeholder */}
        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-8" />

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Cart Items List Placeholder */}
          <div className="w-full lg:flex-1 space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 border border-[#EFEFEF] rounded-lg bg-white"
              >
                {/* Trash Icon Skeleton */}
                <div className="w-10 h-10 bg-gray-100 rounded-full animate-pulse shrink-0" />

                {/* Image Skeleton */}
                <div className="w-20 h-20 bg-gray-200 rounded-md animate-pulse shrink-0" />

                <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    {/* Title Skeleton */}
                    <div className="h-5 w-48 bg-gray-200 rounded animate-pulse" />
                    {/* Description Skeleton */}
                    <div className="h-3 w-64 bg-gray-100 rounded animate-pulse" />
                    <div className="h-3 w-40 bg-gray-100 rounded animate-pulse" />
                  </div>

                  <div className="flex flex-col items-end gap-3 shrink-0">
                    {/* Price Skeleton */}
                    <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
                    {/* Stepper Skeleton */}
                    <div className="h-8 w-24 bg-gray-100 rounded-md animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Sidebar Placeholder */}
          <div className="w-full lg:w-[380px]">
            <div className="bg-white border border-[#EFEFEF] rounded-2xl p-6 lg:p-10 shadow-[0px_8px_24px_rgba(0,0,0,0.03)] space-y-8">
              <div className="h-7 w-40 bg-gray-200 rounded animate-pulse" />

              <div className="space-y-4">
                <div className="flex justify-between">
                  <div className="h-4 w-20 bg-gray-100 rounded animate-pulse" />
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>

              <div className="pt-6 border-t border-[#EFEFEF] space-y-4">
                <div className="flex justify-between">
                  <div className="h-6 w-16 bg-gray-100 rounded animate-pulse" />
                  <div className="h-7 w-24 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>

              <div className="h-12 w-full bg-gray-200 rounded-full animate-pulse" />

              <div className="flex justify-center gap-2">
                <div className="h-4 w-4 bg-gray-100 rounded-full animate-pulse" />
                <div className="h-4 w-48 bg-gray-100 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
