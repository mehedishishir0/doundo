// /* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "./axios-instance";
import { CartResponse } from "../types/ecommerce";

export const cartService = {
  /**
   * Fetch current user's cart.
   */
  getCart: async (userId: string): Promise<CartResponse> => {
    const response = await axiosInstance.get<CartResponse>(
      `/cart/user/${userId}`
    );
    return response.data;
  },

  /**
   * Add items to the cart.
   */
  addToCart: async (
    userId: string,
    productItems: {
      productId: string;
      quantity: number;
      color?: string;
      size?: string;
    }[]
  ): Promise<CartResponse> => {
    const response = await axiosInstance.post<CartResponse>("/cart", {
      userId: userId,
      productIds: productItems,
    });
    return response.data;
  },

  /**
   * Update cart items - replaces the entire productIds array.
   * @param userId - The user's ID
   * @param productIds - Array of { productId, quantity, color, size } objects
   */
  updateCart: async (
    userId: string,
    productIds: {
      productId: string;
      quantity: number;
      color?: string;
      size?: string;
    }[]
  ): Promise<CartResponse> => {
    const response = await axiosInstance.put<CartResponse>(
      `/cart/user/${userId}`,
      { productIds }
    );
    return response.data;
  },

  /**
   * Remove a specific product from the cart.
   */
  removeFromCart: async (
    cartId: string,
    productId: string
  ): Promise<CartResponse> => {
    const response = await axiosInstance.delete<CartResponse>(
      `/cart/${cartId}/product/${productId}`
    );
    return response.data;
  },

  /**
   * Clear all items from the user's cart.
   */
  clearCart: async (): Promise<CartResponse> => {
    const response = await axiosInstance.delete<CartResponse>("/cart/clear");
    return response.data;
  },
};

export async function sendContactForm(data: {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}) {
  try {
    const res = await axiosInstance.post("/contact-us", data);
    return res.data;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
}
