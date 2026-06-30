"use client";
import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PaymentSuccess() {
  const [isVisible, setIsVisible] = useState(false);
  const [, setShowDetails] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    // Ensure random values are set after mount to prevent hydration mismatch
    const timer = setTimeout(() => {
      setOrderNumber(
        "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase()
      );
      setDate(
        new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    }, 0);

    const vTimer = setTimeout(() => setIsVisible(true), 100);
    const dTimer = setTimeout(() => setShowDetails(true), 600);

    return () => {
      clearTimeout(timer);
      clearTimeout(vTimer);
      clearTimeout(dTimer);
    };
  }, []);

  const orderDetails = {
    orderNumber,
    date,
    email: "customer@example.com",
    total: "$127.50",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Success Icon */}
        <div
          className={`flex justify-center mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <div className="relative">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <Check className="w-12 h-12 text-white" strokeWidth={3} />
            </div>
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Main Card */}
        <div
          className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Payment Successful!
            </h1>
            <p className="text-gray-600">Thank you for your purchase</p>
          </div>

          {/* Order Details */}
          {/* <div
            className={`space-y-4 mb-8 transition-all duration-700 delay-400 ${
              showDetails ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-600">Order number</span>
              <span className="font-semibold text-gray-900">
                {orderDetails.orderNumber}
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-600">Date</span>
              <span className="font-semibold text-gray-900">
                {orderDetails.date}
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-600">Total</span>
              <span className="font-semibold text-gray-900 text-lg">
                {orderDetails.total}
              </span>
            </div>
          </div> */}

          {/* Info Box */}
          {/* <div className="bg-blue-50 rounded-lg p-4 mb-6 flex items-start space-x-3">
            <Mail className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-blue-900">
              <p className="font-medium mb-1">Confirmation sent</p>
              <p className="text-blue-700">
                We&apos;ve sent a receipt to{" "}
                <span className="font-medium">{orderDetails.email}</span>
              </p>
            </div>
          </div> */}

          {/* Action Buttons */}
          {/* <div className="space-y-3">
            <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2">
              <Package className="w-5 h-5" />
              <span>Track Your Order</span>
            </button>

            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download Receipt</span>
            </button>
          </div> */}

          {/* Footer Link */}
          <Link href="/">
            <Button className="w-full mt-6">Continue Shopping →</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
