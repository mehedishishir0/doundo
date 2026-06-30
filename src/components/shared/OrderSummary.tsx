"use client";

import React from "react";
import { ShieldCheck, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  onCheckout?: () => void;
  isCheckoutLoading?: boolean;
  isDisabled?: boolean;
}

const OrderSummary = React.memo(function OrderSummary({
  subtotal,
  shipping,
  tax,
  onCheckout,
  isCheckoutLoading,
  isDisabled,
}: OrderSummaryProps) {
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white border border-[#EFEFEF] rounded-2xl p-6 lg:p-10 shadow-[0px_8px_24px_rgba(0,0,0,0.03)] h-fit sticky top-24">
      <h2 className="text-lg md:text-xl font-bold text-[#111111] mb-8">Order Summary</h2>

      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center text-sm font-medium">
          <span className="text-[#333333]">Subtotal</span>
          <span className="text-[#111111]">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-sm font-medium">
          <span className="text-gray-500">Shipping</span>
          <span className="text-gray-500">+ ${shipping.toFixed(2)}</span>
        </div> 
         <div className="flex justify-between items-center text-sm font-medium">
          <span className="text-gray-500">Tax(13%)</span>
          <span className="text-gray-500">+ ${tax.toFixed(2)}</span>
        </div>
      </div>

      <div className="pt-6 border-t border-[#EFEFEF] mb-8">
        <div className="flex justify-between items-center">
          <span className="text-lg md:text-xl font-bold text-[#111111]">Total</span>
          <span className="text-xl font-bold text-[#FF7F50]">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      <Button
        onClick={onCheckout}
        disabled={isDisabled || isCheckoutLoading}
        className="w-full md:h-12 bg-primary hover:bg-[#111111] text-white rounded-full font-bold text-sm tracking-wide shadow-[0px_4px_16px_rgba(0,0,0,0.1)] mb-6"
      >
        {isCheckoutLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          "Proceed to Checkout"
        )}
      </Button>

      <div className="flex items-center justify-center gap-2 text-[13px] text-[#8B8B8B]">
        <ShieldCheck className="w-4 h-4 text-[#2E8F8A]" />
        <span>Secure checkout powered by Stripe</span>
      </div>
    </div>
  );
});

export default OrderSummary;
