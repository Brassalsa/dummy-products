"use client";

import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  const goBack = () => router.back();
  return (
    <div className="flex flex-col gap-3 justify-center items-center min-h-svh">
      <h2 className="text-3xl font-bold text-gray-800">404</h2>
      <p className="text-lg italic text-red-400">Page not found!</p>
      <button
        className="text-blue-600 hover:text-blue-400 transition-all duration-300"
        onClick={goBack}
      >
        Go back
      </button>
    </div>
  );
};

export default NotFound;
