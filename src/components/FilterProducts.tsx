"use client";

import React, { FormEvent, useState } from "react";
import { Filter } from "lucide-react";

import PrimaryButton from "./PrimaryButton";
import { useRouter } from "next/navigation";
import useSetSearchParams from "@/hooks/setSearchParams";

type Props = {
  className?: string;
};

const PRICES = [100, 200, 500, 1000, 1500, 2000];

const FilterProducts = (p: Props) => {
  const [showDialog, setShowDialog] = useState(false);
  const [isLessThen, setIsLessThen] = useState(true);
  const [price, setPrice] = useState(100);
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.replace(`/filter?price=${price}&type=${isLessThen ? "<" : ">"}`);

    setShowDialog(false);
  };

  return (
    <>
      <PrimaryButton
        className={"w-fit h-fit"}
        onClick={() => setShowDialog(true)}
      >
        <Filter />
      </PrimaryButton>
      {showDialog && (
        <div
          className="fixed z-50 top-0 left-0 bg-black/25 w-full h-full flex justify-center items-center"
          onClick={() => setShowDialog(false)}
        >
          <form
            className="bg-white flex flex-col gap-2 justify-center items-center px-10 py-5 shadow-md rounded-md text-black"
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleSubmit}
          >
            <span className="flex gap-2 items-center">
              <h2 className=" text-lg"> Price </h2>
              <PrimaryButton
                className="bg-blue-500 hover:bg-blue-400 w-24"
                onClick={() => setIsLessThen((prev) => !prev)}
                type="button"
              >
                {isLessThen ? "Less then" : "More then"}
              </PrimaryButton>
            </span>
            <select
              name="price"
              id="price"
              value={price}
              className="p-1"
              onChange={(e) => setPrice(+e.target.value)}
            >
              {PRICES.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            <span className="flex gap-1">
              <PrimaryButton className="bg-blue-500 hover:bg-blue-400">
                Apply
              </PrimaryButton>
              <PrimaryButton
                type="button"
                className="bg-red-500 hover:bg-red-400"
                onClick={() => setShowDialog(false)}
              >
                Cancel
              </PrimaryButton>
            </span>
          </form>
        </div>
      )}
    </>
  );
};

export default FilterProducts;
