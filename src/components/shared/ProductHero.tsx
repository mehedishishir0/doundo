"use client";

import React, { useState, useCallback, useMemo } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Product } from "@/lib/types/ecommerce";
import { useCart } from "@/provider/cart-provider";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

interface ProductHeroProps {
  product: Product;
}

export default function ProductHero({ product }: ProductHeroProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const { addToCart } = useCart();
  const { data: session } = useSession();

  // Memoized values
  const isMerchandise = useMemo(
    () => product.productType === "marchandice",
    [product.productType]
  );

  const hasSizes = useMemo(
    () => product.size && product.size.length > 0,
    [product.size]
  );

  const hasColors = useMemo(
    () => product.color && product.color.length > 0,
    [product.color]
  );

  const displayImage = useMemo(
    () => selectedImage || product.imgs?.[0] || product.img || "/no-image.jpg",
    [selectedImage, product.imgs, product.img]
  );

  const thumbnails = useMemo(
    () =>
      product.imgs && product.imgs.length > 0
        ? product.imgs
        : [product.img || "/no-image.jpg"],
    [product.imgs, product.img]
  );

  // Optimized handlers with useCallback
  const handleQuantityChange = useCallback((delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  }, []);

  const handleImageSelect = useCallback((img: string) => {
    setSelectedImage(img);
  }, []);

  const handleSizeSelect = useCallback((size: string) => {
    setSelectedSize(size);
  }, []);

  const handleColorSelect = useCallback((color: string) => {
    setSelectedColor(color);
  }, []);

  const validateSelection = useCallback((): boolean => {
    if (!isMerchandise) return true;

    if (hasSizes && !selectedSize) {
      toast.error("Please select a size.");
      return false;
    }

    if (hasColors && !selectedColor) {
      toast.error("Please select a color.");
      return false;
    }

    return true;
  }, [isMerchandise, hasSizes, hasColors, selectedSize, selectedColor]);

  const handleAddToCart = useCallback(async () => {
    // Validate authentication
    if (!session?.user?.id) {
      toast.error("Please sign in to add to Pre Order.");
      return;
    }

    // Validate selections
    if (!validateSelection()) return;

    setIsAdding(true);

    try {
      await addToCart(
        [
          {
            productId: product._id,
            quantity,
            ...(selectedColor && { color: selectedColor }),
            ...(selectedSize && { size: selectedSize }),
          },
        ],
        session.user.id
      );
      toast.success(`${product.productName} added to cart for Pre Order!`);
    } catch (error) {
      toast.error("Failed to add to cart. Please try again.");
      console.error("Add to cart error:", error);
    } finally {
      setIsAdding(false);
    }
  }, [
    session,
    validateSelection,
    addToCart,
    product._id,
    product.productName,
    quantity,
    selectedColor,
    selectedSize,
  ]);

  return (
    <section
      className="my-6 md:my-12 lg:my-20 md:px-6 lg:px-8"
      aria-labelledby="product-title"
    >
      <div className="">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Images */}
          <div className="w-full">
            <div className="flex flex-col-reverse md:flex-row gap-3 ">
              {/* Thumbnail Gallery */}
              <nav
                className="flex flex-row md:flex-col gap-2 overflow-x-auto items-center justify-start md:overflow-y-auto md:overflow-x-hidden no-scrollbar md:w-32"
                aria-label="Product image thumbnails"
              >
                {thumbnails.map((img, index) => (
                  <button
                    key={`${img}-${index}`}
                    onClick={() => handleImageSelect(img)}
                    className={`relative w-24 h-24 shrink-0 border-2 rounded-md overflow-hidden transition-all focus:outline-none focus:ring-primary focus:ring-offset-2 ${
                      selectedImage === img || (!selectedImage && index === 0)
                        ? "border-primary shadow-md scale-105"
                        : "border-gray-200 hover:border-primary/50"
                    }`}
                    aria-label={`View image ${index + 1} of ${
                      product.productName
                    }`}
                    aria-pressed={
                      selectedImage === img || (!selectedImage && index === 0)
                    }
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </nav>

              {/* Main Product Image */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white shadow-[0px_20px_40px_rgba(0,0,0,0.08)]">
                <Image
                  src={displayImage}
                  alt={product.productName}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <article className="w-full flex flex-col">
            {/* Badge */}
            <div className="mb-3">
              <span className="inline-block bg-secondary rounded-full text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                New!
              </span>
            </div>

            {/* Product Info */}
            <header className="mb-4">
              <h1
                id="product-title"
                className="text-3xl md:text-4xl lg:text-[40px] font-bold text-primary-foreground mb-3 leading-tight break-words"
              >
                {product.productName}
              </h1>
              <p
                className="text-2xl md:text-3xl font-bold text-primary-foreground"
                aria-label={`Price: ${product.price} dollars`}
              >
                ${product.price}
              </p>
            </header>

            {/* Features */}
            {product.feature && (
              <section className="mb-6">
                <h2 className="text-lg md:text-xl font-semibold text-primary-foreground/90 mb-2">
                  Features:
                </h2>
                <p className="text-sm md:text-base text-primary-foreground/80 leading-relaxed whitespace-pre-line break-words">
                  {product.feature}
                </p>
              </section>
            )}

            {/* Product Options */}
            <div className="space-y-5 mt-auto">
              {/* Quantity Selector */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="quantity"
                  className="text-xs font-semibold uppercase tracking-wider text-[#8B8B8B]"
                >
                  Quantity
                </label>
                <div
                  className="flex items-center"
                  role="group"
                  aria-labelledby="quantity"
                >
                  <div className="flex items-center border border-[#b4b4b4] rounded-md overflow-hidden bg-[#FBFBFB]">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      disabled={isAdding || quantity <= 1}
                      className="px-3 py-2 hover:bg-[#EFEFEF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4 text-primary-foreground" />
                    </button>
                    <span
                      id="quantity"
                      className="w-12 text-center text-sm font-medium text-primary-foreground"
                      aria-live="polite"
                    >
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      disabled={isAdding}
                      className="px-3 py-2 hover:bg-[#EFEFEF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4 text-primary-foreground" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Size and Color Selection for Merchandise */}
              {isMerchandise && (
                <div className="space-y-5">
                  {/* Size Selection */}
                  {hasSizes && (
                    <fieldset className="flex flex-col gap-2">
                      <legend className="text-xs font-semibold uppercase tracking-wider text-[#8B8B8B]">
                        Size{" "}
                        {hasSizes && <span className="text-red-500">*</span>}
                      </legend>
                      <div className="flex flex-wrap gap-2" role="radiogroup">
                        {product.size!.map((size) => (
                          <button
                            key={size}
                            onClick={() => handleSizeSelect(size)}
                            role="radio"
                            aria-checked={selectedSize === size}
                            className={`px-4 py-2 text-sm font-medium border rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                              selectedSize === size
                                ? "border-primary bg-primary/5 text-primary"
                                : "border-[#b4b4b4] text-primary-foreground hover:border-primary"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </fieldset>
                  )}

                  {/* Color Selection */}
                  {hasColors && (
                    <fieldset className="flex flex-col gap-2">
                      <legend className="text-xs font-semibold uppercase tracking-wider text-[#8B8B8B]">
                        Color{" "}
                        {hasColors && <span className="text-red-500">*</span>}
                      </legend>
                      <div className="flex flex-wrap gap-3" role="radiogroup">
                        {product.color!.map((color) => (
                          <button
                            key={color}
                            onClick={() => handleColorSelect(color)}
                            role="radio"
                            aria-checked={selectedColor === color}
                            aria-label={`Select ${color}`}
                            className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                              selectedColor === color
                                ? "border-primary scale-110"
                                : "border-transparent hover:border-[#b4b4b4]"
                            }`}
                          >
                            <div
                              className="w-8 h-8 rounded-full border border-black/10 shadow-sm"
                              style={{ backgroundColor: color.toLowerCase() }}
                              aria-hidden="true"
                            />
                          </button>
                        ))}
                      </div>
                    </fieldset>
                  )}
                </div>
              )}

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                disabled={isAdding}
                className="w-full h-12 md:h-14 bg-primary hover:bg-primary/80 text-white rounded-full text-sm md:text-base font-semibold transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={
                  isAdding ? "Adding to cart" : "Add to pre order cart"
                }
              >
                {isAdding ? (
                  <>
                    <span className="animate-pulse">Adding...</span>
                  </>
                ) : (
                  <>
                    Pre Order{" "}
                    <ShoppingCart
                      className="ml-2 w-4 h-4 md:w-5 md:h-5"
                      aria-hidden="true"
                    />
                  </>
                )}
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
