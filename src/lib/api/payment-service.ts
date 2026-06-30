import axiosInstance from "./axios-instance";
import {
  CreatePaymentRequest,
  CreatePaymentResponse,
} from "../types/ecommerce";

export const paymentService = {
  /**
   * Create a payment session for checkout.
   * POST /payments/stripe/create
   */
  createPayment: async (
    payload: CreatePaymentRequest
  ): Promise<CreatePaymentResponse> => {
    const response = await axiosInstance.post<CreatePaymentResponse>(
      "/payments/stripe/create",
      payload
    );
    return response.data;
  },
};
