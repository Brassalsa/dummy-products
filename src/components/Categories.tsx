import { getCat } from "@/lib/actions";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  cat: string;
  setCat: Dispatch<SetStateAction<string>>;
};

const Categories = ({ cat, setCat }: Props) => {
  const [opts, setOpts] = useState<ProductType["category"][]>([]);
  useEffect(() => {
    const getCategory = async () => {
      const res = await getCat();
      if (!("error" in res)) {
        setOpts(res);
      }
    };
    getCategory();
  }, []);

  return (
    <select
      name="category"
      id="category"
      className="bg-slate-600 text-white p-1  rounded-md capitalize w-24 truncate"
      value={cat}
      onChange={(e) => setCat(e.target.value)}
    >
      <option value={""} id="All">
        All
      </option>
      {opts.map((opt) => (
        <option value={opt} id={opt} key={opt} className="capitalize">
          {opt}
        </option>
      ))}
    </select>
  );
};

export default Categories;
