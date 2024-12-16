"use client";

import { cn } from "@/lib/utils";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  logoText?: string;
  className?: string;
}

const AnimatedLogo = ({ logoText = "Devin", className }: Props) => {
  const [text, setText] = useState("Bi");
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Animasyonu başlat
      gsap.to(textRef.current, {
        rotateY: 90,
        duration: 0.3,
        onComplete: () => {
          // Metni değiştirme
          setText((prev) => (prev === "bi" ? "2B" : "bi"));

          // Yeni metni gösterirken animasyonu geri döndür
          gsap.fromTo(
            textRef.current,
            { rotateY: 90 },
            { rotateY: 0, duration: 0.5 }
          );
        },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <p
      className={
        (cn("inline-flex gap-1 justify-center items-center"), className)
      }
    >
      {logoText}
      <span
        ref={textRef}
        className="inline-block text-emerald-600" // inline-block, rotate için gerekli
      >
        {text}
      </span>
    </p>
  );
};

export default AnimatedLogo;
