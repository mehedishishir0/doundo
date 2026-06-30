"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import z from "zod";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Download } from "@/lib/api/download";

interface NewsletterFormProps {
  className?: string;
}

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
});

type FormValues = z.infer<typeof formSchema>;

export default function NewsletterForm({
  className = "",
}: NewsletterFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Subscriber",
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: FormValues) => Download(data.name, data.email),
    onSuccess: (data) => {
      toast.success(data.message || "Successfully added your request");
      reset();
    },
    onError: (err: Error) => {
      toast.error(err.message || "Failed to submit request");
    },
  });

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-3 ${className}`}
      noValidate
      aria-label="Newsletter subscription form"
    >
      {/* Hidden name field since you're using "Subscriber" as default */}
      <input type="hidden" {...register("name")} />

      <div className="flex gap-2">
        <div className="grow">
          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="w-full rounded-full px-4 py-3 bg-white border-white/20 text-primary-foreground placeholder-gray-500 focus:ring-2 focus:ring-white/30"
            aria-label="Email address"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            disabled={mutation.isPending}
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-1 text-sm text-red-300"
              role="alert"
            >
              {errors.email.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="rounded-full px-6 whitespace-nowrap text-white transition-colors disabled:opacity-50"
          disabled={mutation.isPending}
          aria-label="Subscribe to newsletter"
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            "Subscribe"
          )}
        </Button>
      </div>

      {mutation.isSuccess && (
        <p className="text-sm text-green-300" role="alert">
          Successfully subscribed to newsletter!
        </p>
      )}

      {mutation.error && (
        <p className="text-sm text-red-300" role="alert">
          {mutation.error.message || "Failed to subscribe. Please try again."}
        </p>
      )}
    </form>
  );
}
