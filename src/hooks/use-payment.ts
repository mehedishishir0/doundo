import { useMutation } from "@tanstack/react-query";
import { paymentService } from "@/lib/api/payment-service";
import { CreatePaymentRequest } from "@/lib/types/ecommerce";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const usePayment = () => {
  return useMutation({
    mutationFn: (payload: CreatePaymentRequest) =>
      paymentService.createPayment(payload),
    onSuccess: (response) => {
      if (response.success && response.data.checkoutUrl) {
        // Redirect to Stripe checkout
        window.location.href = response.data.checkoutUrl;
      } else {
        toast.error(response.message || "Failed to initiate payment session");
      }
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.error("Payment error:", error);
      toast.error(
        error.response?.data?.message ||
          "Something went wrong during checkout. Please try again."
      );
    },
  });
};
