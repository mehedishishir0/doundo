import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { cartService } from "@/lib/api/cart-service";
import { Cart, CartItem } from "@/lib/types/ecommerce";
import { toast } from "sonner";
import { AxiosError } from "axios";
import {
  addGuestCartItems,
  clearGuestCart,
  getGuestCart,
  removeGuestCartItem,
  updateGuestCartItem,
} from "@/lib/utils/guest-cart";

// Query keys
export const cartKeys = {
  all: ["cart"] as const,
  user: (userId: string) => [...cartKeys.all, userId] as const,
};

/**
 * Hook to fetch the current user's cart using TanStack Query.
 */
export const useCartQuery = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const queryKey = cartKeys.user(userId || "guest");

  return useQuery({
    queryKey,
    queryFn: async () => {
      if (!userId) return getGuestCart();
      const response = await cartService.getCart(userId);
      return response.success ? response.data : null;
    },
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
};

/**
 * Hook to add items to cart.
 */
export const useAddToCart = () => {
  const queryClient = useQueryClient();
  const { data: session } = useSession();

  return useMutation({
    mutationFn: async (
      items: {
        productId: string;
        quantity: number;
        color?: string;
        size?: string;
      }[]
    ) => {
      if (!session?.user?.id) {
        return {
          success: true,
          message: "Item added to cart",
          data: addGuestCartItems(items),
        };
      }

      return cartService.addToCart(session.user.id, items);
    },
    onSuccess: (response) => {
      if (response.success) {
        queryClient.setQueryData(
          cartKeys.user(session?.user?.id || "guest"),
          response.data
        );
        toast.success("Item added to cart");
      }
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(
        error.response?.data?.message || "Failed to add item to cart"
      );
    },
  });
};

/**
 * Hook to update cart quantity.
 */
export const useUpdateCartQuantity = () => {
  const queryClient = useQueryClient();
  const { data: session } = useSession();

  return useMutation({
    mutationFn: async ({
      productId,
      quantity,
      color,
      size,
    }: {
      productId: string;
      quantity: number;
      color?: string;
      size?: string;
    }) => {
      if (!session?.user?.id) {
        return {
          success: true,
          message: "Cart updated",
          data: updateGuestCartItem(productId, quantity, color, size),
        };
      }

      // Get current cart from cache
      const currentCart = queryClient.getQueryData<Cart>(
        cartKeys.user(session.user.id)
      );
      if (!currentCart) throw new Error("Cart not found");

      // Build updated productIds array
      const updatedProductIds = currentCart.productIds.map((item: CartItem) =>
        item.productId._id === productId &&
        item.color === color &&
        item.size === size
          ? {
              productId: item.productId._id,
              quantity,
              color: item.color,
              size: item.size,
            }
          : {
              productId: item.productId._id,
              quantity: item.quantity,
              color: item.color,
              size: item.size,
            }
      );

      return cartService.updateCart(session.user.id, updatedProductIds);
    },
    onSuccess: (response) => {
      if (response.success) {
        queryClient.setQueryData(
          cartKeys.user(session?.user?.id || "guest"),
          response.data
        );
      }
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.error("Failed to update cart quantity:", error);
      // Refetch to ensure UI is in sync
      queryClient.invalidateQueries({
        queryKey: cartKeys.user(session?.user?.id || "guest"),
      });
    },
  });
};

/**
 * Hook to remove item from cart.
 */
export const useRemoveFromCart = () => {
  const queryClient = useQueryClient();
  const { data: session } = useSession();

  return useMutation({
    mutationFn: async ({
      cartId,
      productId,
      color,
      size,
    }: {
      cartId: string;
      productId: string;
      color?: string;
      size?: string;
    }) => {
      if (!session?.user?.id) {
        return {
          success: true,
          message: "Item removed from cart",
          data: removeGuestCartItem(productId, color, size),
        };
      }

      return cartService.removeFromCart(cartId, productId);
    },
    onSuccess: (response) => {
      if (response.success) {
        queryClient.setQueryData(
          cartKeys.user(session?.user?.id || "guest"),
          response.data
        );
        toast.success(response.message || "Item removed from cart");
      }
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error.response?.data?.message || "Failed to remove item");
    },
  });
};

/**
 * Hook to clear the entire cart.
 */
export const useClearCart = () => {
  const queryClient = useQueryClient();
  const { data: session } = useSession();

  return useMutation({
    mutationFn: async () => {
      if (!session?.user?.id) {
        return {
          success: true,
          message: "Cart cleared",
          data: clearGuestCart(),
        };
      }

      return cartService.updateCart(session.user.id, []);
    },
    onSuccess: (response) => {
      if (response.success) {
        queryClient.setQueryData(
          cartKeys.user(session?.user?.id || "guest"),
          response.data
        );
        toast.success("Cart cleared");
      }
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error.response?.data?.message || "Failed to clear cart");
    },
  });
};
