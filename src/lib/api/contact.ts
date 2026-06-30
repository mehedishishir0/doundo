import axiosInstance from "./axios-instance";


export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export async function sendContactForm(data: ContactFormData) {
  const res = await axiosInstance.post("/contact-us", data);
  return res.data;
}
