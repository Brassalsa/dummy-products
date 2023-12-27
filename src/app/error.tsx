"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  statusCode: number;
  message: string;
};

const Error = (props: Props) => {
  const router = useRouter();
  const goBack = () => router.back();
  const refresh = () => router.refresh();

  return (
    <div className="flex flex-col gap-3 justify-center items-center max-h-svh h-80 ">
      <h2 className="font-semibold text-gray-900 text-2xl">
        {props.statusCode || 500}
      </h2>
      <p className="text-red-500 text-lg">
        {props.message || "Something went wrong!"}
      </p>
      <button
        className="text-blue-600 hover:text-blue-400 transition-all duration-300"
        onClick={goBack}
      >
        Go back
      </button>
      <button
        className="text-blue-600 hover:text-blue-400 transition-all duration-300"
        onClick={refresh}
      >
        Refresh
      </button>
    </div>
  );
};

export default Error;
