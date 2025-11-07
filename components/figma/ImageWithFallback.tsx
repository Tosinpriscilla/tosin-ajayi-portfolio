"use client";

import React, { useState } from "react";
import Image from "next/image";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  quality?: number;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  width,
  height,
  fill = false,
  sizes,
  priority = false,
  quality = 75,
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle relative ${className ?? ""}`}
      >
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src={ERROR_IMG_SRC}
            alt="Error loading image"
            width={88}
            height={88}
            unoptimized
          />
        </div>
      </div>
    );
  }

  // If fill is true, use fill layout (no width/height needed)
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        onError={handleError}
        sizes={sizes || "100vw"}
        priority={priority}
        quality={quality}
      />
    );
  }

  // If width and height are provided, use them
  if (width && height) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onError={handleError}
        sizes={sizes}
        priority={priority}
        quality={quality}
      />
    );
  }

  // Default fallback with reasonable dimensions for case study images
  return (
    <Image
      src={src}
      alt={alt}
      width={1080}
      height={720}
      className={className}
      onError={handleError}
      sizes={
        sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      }
      priority={priority}
      quality={quality}
    />
  );
}
