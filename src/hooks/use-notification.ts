"use client";

import { useMutation } from "@tanstack/react-query";
import {
  notifyAdmin,
  NotificationPayload,
} from "@/lib/api/notification-service";
import { toast } from "sonner";

export const useNotifyAdmin = () => {
  return useMutation({
    mutationFn: (payload: NotificationPayload) => notifyAdmin(payload),
    onSuccess: (data) => {
      toast.success(data?.message || "Successfully subscribed!");
    },
    onError: (error: unknown) => {
      const errorMessage =
        (error as { response?: { data?: { message?: string } } })?.response
          ?.data?.message || "Failed to subscribe. Please try again.";
      toast.error(errorMessage);
    },
  });
};
