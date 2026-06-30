// lib/api/download.ts
import axiosInstance from "./axios-instance";

export async function Download(name: string, email: string) {
  try {
    const res = await axiosInstance.post(`/email/notify-admin`, {
      name,
      email,
    });
    return res.data;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw err;
  }
}
