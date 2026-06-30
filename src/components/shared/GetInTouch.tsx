"use client";

import { useContact } from "@/hooks/use-contact";
import type React from "react";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[+]?[\d\s\-()]+$/, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  privacyAgreed: z.literal(true, {
    message: "You must agree to the privacy policy",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const GetInTouch = () => {
  const { mutate, isPending } = useContact();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    phone: "",
    privacyAgreed: false as unknown as true,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as keyof ContactFormData] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    mutate({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phone,
      message: formData.message,
    });
  };

  return (
    <section className="my-10 md:my-16 lg:my-20 container mx-auto">
      <div className=" px-6 bg-secondary rounded-2xl  py-6 md:py-23.75 md:px-37.5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto">
          {/* Form */}
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-[48px] font-bold text-primary-foreground mb-2 text-start">
              Get in touch
            </h2>
            <p className="text-primary-foreground text-start mb-5 lg:mb-10 max-w-2xl">
              Our friendly team would love to hear from you.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`bg-white text-gray-900 placeholder-gray-500 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 ${
                      errors.firstName ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-xs mt-1 px-4">
                      {errors.firstName}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`bg-white text-gray-900 placeholder-gray-500 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 ${
                      errors.lastName ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-xs mt-1 px-4">
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-white text-gray-900 placeholder-gray-500 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 ${
                    errors.email ? "ring-2 ring-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1 px-4">
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`bg-white text-gray-900 placeholder-gray-500 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 ${
                    errors.phone ? "ring-2 ring-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs mt-1 px-4">
                    {errors.phone}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <textarea
                  name="message"
                  placeholder="Tell us a message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-white text-gray-900 placeholder-gray-500 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 resize-none ${
                    errors.message ? "ring-2 ring-red-500" : ""
                  }`}
                />
                {errors.message && (
                  <span className="text-red-500 text-xs mt-1 px-4">
                    {errors.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    
                    id="privacy"
                    checked={formData.privacyAgreed as boolean}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        privacyAgreed: e.target.checked as unknown as true,
                      }));
                      if (errors.privacyAgreed) {
                        setErrors((prev) => ({
                          ...prev,
                          privacyAgreed: undefined,
                        }));
                      }
                    }}
                    className="w-4 h-4 outline-none "
                  />
                  <label htmlFor="privacy" className="text-[#343A40] text-sm">
                    I agree to the{" "}
                    <Link
                      href="/privacy-policy"
                      className="underline cursor-pointer"
                    >
                      privacy policy
                    </Link>
                  </label>
                </div>
                {errors.privacyAgreed && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.privacyAgreed}
                  </span>
                )}
              </div>

              <Button
                type="submit"
                disabled={isPending}
                className="w-full text-white py-3 rounded-full font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden h-96 lg:h-auto">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d963.6179371730356!2d-79.27375832139533!3d43.83166698826154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d6bbc2dca6db%3A0xdcb08ca7548aaf0c!2s7011%20McCowan%20Rd%2C%20Markham%2C%20ON%20L3S%203L7%2C%20Canada!5e0!3m2!1sen!2sbd!4v1767039079283!5m2!1sen!2sbd"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
