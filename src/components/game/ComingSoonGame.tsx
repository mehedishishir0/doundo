"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

import { useNotifyAdmin } from "@/hooks/use-notification";

const ComingSoonGame = () => {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  const { mutate: notifyAdmin, isPending: isSubmitting } = useNotifyAdmin();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }

    notifyAdmin(
      {
        name: "Subscribed for Walnize",
        email: email,
      },
      {
        onSuccess: () => {
          setEmail("");
          setOpen(false);
        },
      }
    );
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Product Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-primary/30 to-secondary/30 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-100 ">
              <Image
                src="/images/WalnizeProductCard.jpeg"
                alt="Walnize Game"
                fill
                priority
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase rounded-full">
                Coming Soon
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground tracking-tight leading-tight">
                Walnize
              </h1>
              <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                In Walnize, confidence builds quietly. Each correct decision
                sharpens your sense of the board. Moments that once caused
                hesitation begin to feel familiar. Uncertainty gradually turns
                into control, and every timely choice strengthens that feeling.
                Walnize rewards the calm satisfaction of getting it right.
              </p>
            </div>

            <div>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="h-14 px-12 rounded-full text-lg font-bold transition-all hover:-translate-y-1"
                  >
                    Subscribe
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">Stay Updated</DialogTitle>
                    <DialogDescription className="text-gray-500 mt-2">
                      Get notified as soon as Walnize is released. Enter your
                      email below to join the waitlist.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubscribe} className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 rounded-lg"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 rounded-lg font-bold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Subscribing..." : "Notify Me"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 text-gray-400">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-primary-foreground font-semibold text-2xl">
                  2026
                </span>
                <span className="text-xs uppercase tracking-widest font-medium">
                  Release Year
                </span>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-primary-foreground font-semibold text-2xl">
                  Limited
                </span>
                <span className="text-xs uppercase tracking-widest font-medium">
                  Early Access
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonGame;
