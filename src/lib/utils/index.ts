import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ApiError } from "next/dist/server/api-utils";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = async (url: string, opts: RequestInit = {}) => {
  const res = await fetch(url, opts);
  if (!res.ok) {
    throw new ApiError(res.status, res.statusText);
  }

  return await res.json();
};

export const ErrorResponse = (statusCode: number, message: string) => {
  return {
    error: {
      statusCode,
      message,
    },
  };
};
