/* eslint-disable no-unused-vars */
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const ProjectSearch = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const handleSearchChange = (e) => {
    e.preventDefault();
    if (name?.trim()) {
      navigate(`/search/${name}`);
    } else {
      navigate("/");
    }
  };
  console.log(name);
  return (
    <form onSubmit={handleSearchChange}>
      <div className="flex gap-2 items-center pb-5 justify-between">
        <div className="relative p-0 w-full">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              className="40% px-9 form-control"
              type="text"
              placeholder="Enter name of project"
              onChange={(e) => setName(e.target.value)}
            />
            <MagnifyingGlassIcon className="absolute top-3 hover:text-red-600 cursor-pointer " />
          </div>
        </div>
      </div>
    </form>
  );
};
