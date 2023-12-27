"use client";
import { useSearchParams } from "next/navigation";

import useSetSearchParams from "@/hooks/setSearchParams";
import PrimaryButton from "./PrimaryButton";

type Props = {
  total: ManyProducts["total"];
  limit: ManyProducts["limit"];
};

const Paging = ({ total, limit }: Props) => {
  const setSearchParams = useSetSearchParams();
  const page = +(useSearchParams().get("page") || 0);

  const handlePrev = () => {
    const prev = page - 1;
    if (prev < 0) return;
    setSearchParams("page", prev.toString());
  };

  const handleNext = () => {
    const next = page + 1;
    if (limit < 12) return;
    setSearchParams("page", next);
  };
  return (
    <div
      className={`w-full flex justify-center items-center py-3 gap-2 ${
        limit < 12 && " absolute bottom-0"
      }`}
    >
      <button
        className="bg-slate-900 text-white p-2 rounded-md mx-2 disabled:bg-slate-600 disabled:cursor-not-allowed hover:bg-slate-700"
        onClick={handlePrev}
        disabled={page <= 0}
      >
        Back
      </button>
      <button
        className="bg-slate-900 text-white p-2 rounded-md mx-2 disabled:bg-slate-600 disabled:cursor-not-allowed hover:bg-slate-700"
        onClick={handleNext}
        disabled={limit < 12}
      >
        Next
      </button>
    </div>
  );
};

export default Paging;
