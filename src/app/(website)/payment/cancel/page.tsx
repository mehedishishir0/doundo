import { X, ShoppingCart, HelpCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PaymentCancelled() {
  return (
    <div className="min-h-screen bg-linear-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Cancel Icon */}
        <div className={`flex justify-center mb-8 transition-all duration-700`}>
          <div className="relative">
            <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <X className="w-12 h-12 text-white" strokeWidth={3} />
            </div>
            <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Main Card */}
        <div
          className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-700 delay-200`}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Payment Cancelled
            </h1>
            <p className="text-gray-600">Your order has not been processed</p>
          </div>

          {/* Cart Summary */}
          {/* <div
            className={`space-y-4 mb-8 transition-all duration-700 delay-400 ${
              showDetails ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-600">Items in cart</span>
              <span className="font-semibold text-gray-900">
                {cartDetails.itemsCount} items
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-600">Cart total</span>
              <span className="font-semibold text-gray-900 text-lg">
                {cartDetails.cartTotal}
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-600">Status</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                Saved
              </span>
            </div>
          </div> */}

          {/* Info Box */}
          {/* <div className="bg-blue-50 rounded-lg p-4 mb-6 flex items-start space-x-3">
            <ShoppingCart className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-blue-900">
              <p className="font-medium mb-1">Your cart is safe</p>
              <p className="text-blue-700">
                All items remain in your cart and will be there when you're
                ready to checkout.
              </p>
            </div>
          </div> */}

          {/* Action Buttons */}
          <div className="space-y-3 flex flex-col gap-2">
            <Link href="/cart">
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <ArrowLeft className="w-5 h-5" />
                <span>Return to Cart</span>
              </Button>
            </Link>
            <Link href="/">
              <Button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Continue Shopping</span>
              </Button>
            </Link>
          </div>

          {/* Help Section */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              <HelpCircle className="w-5 h-5" />
              <span className="text-sm font-medium">
                Need help? Contact Support
              </span>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-6">
          <Link href="/">
            <p className="text-sm text-gray-500">
              Having payment issues? We&apos;re here to help.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
