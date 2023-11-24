import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(
  value: number | string,
  options: {
    currency?: "USD" | "EUR" | "GBP";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {}
) {
  const { currency = "EUR", notation = "compact" } = options;

  const numericValue = typeof value === "string" ? parseFloat(value) : value;

  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericValue);
}
