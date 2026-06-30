import axiosInstance from "./axios-instance";

export type NotificationPayload = {
  name: string;
  email: string;
};

export async function notifyAdmin(payload: NotificationPayload) {
  const res = await axiosInstance.post("/email/notify-admin", payload);
  return res.data;
}
