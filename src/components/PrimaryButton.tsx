"use client";
import { cn } from "@/lib/utils";
import React, { Ref } from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  onClick?: Function;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
};

const PrimaryButton = (props: Props) => {
  return (
    <button
      className={cn(
        "w-full bg-slate-950 text-white p-2 rounded-xl hover:bg-slate-700 transition-all duration-200 active:bg-slate-900 flex justify-center items-center gap-2 disabled:bg-slate-600 disabled:cursor-not-allowed " +
          props.className
      )}
      type={props.type}
      onClick={(e) => props.onClick?.(e)}
      disabled={props.disabled}
    >
      {props.title || props.children}
    </button>
  );
};

export default PrimaryButton;
