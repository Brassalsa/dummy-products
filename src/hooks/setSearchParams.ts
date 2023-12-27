"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const useSetSearchParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string | number) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value.toLocaleString());

      return params.toString();
    },
    [searchParams]
  );

  const handleChange = (str: string, val: string | number) => {
    router.push(pathname + "?" + createQueryString(str, val.toString()));
  };

  return handleChange;
};

export default useSetSearchParams;
