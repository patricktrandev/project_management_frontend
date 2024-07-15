/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import React from "react";

export const PlanCard = ({ data }) => {
  return (
    <div className="rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-[#14173b] shadow-2xl card p-5 space-y-5 w-[24rem] text-center">
      <p className="text-xl tracking-wider">{data.planName}</p>
      <p>
        <span className="text-2xl font-semibold  tracking-wider">
          ${data.price}/
        </span>
        <span className=" tracking-widest">{data.planType}</span>
      </p>
      {data.planType == "ANNUALLY" && (
        <p className="text-sky-700 font-semibold">30% off</p>
      )}
      <Button className="w-full py-7 tracking-wider">{data.buttonName}</Button>
      <div>
        {data.features.map((item) => {
          return (
            <div key={item} className="flex items-center gap-2">
              <CheckCircledIcon />
              <p className="text-sm text-gray-400 tracking-wider">{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
