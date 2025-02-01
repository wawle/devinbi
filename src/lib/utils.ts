import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function later(delay: number, value: number) {
  return new Promise((resolve) => setTimeout(resolve, delay, value));
}
