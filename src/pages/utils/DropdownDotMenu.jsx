/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import React from "react";

export const DropdownDotMenu = ({ content }) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button className="rounded-full" variant="ghost" size="icon">
            <DotsVerticalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {content.map((item) => {
            return <DropdownMenuItem key={item}>{item}</DropdownMenuItem>;
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
