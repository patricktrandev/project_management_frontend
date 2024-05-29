/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotFilledIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
import React from "react";
import { Link } from "react-router-dom";
import { DropdownDotMenu } from "../utils/DropdownDotMenu";

export const ProjectCard = () => {
  return (
    <Card className="p-5 w-full lg:max-w-3xl">
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <Link to="/project/1">
                <h1 className="cursor-pointer font-bold text-lg text-rose">
                  Create Ecommer ce project
                </h1>
              </Link>

              <DotFilledIcon />
              <p className="text-sm text-gray-400 ">fullstack</p>
            </div>
            <DropdownDotMenu content={["Update", "Delete"]} />
          </div>
          <p className="text-gray-500 text-sm text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque odit
            minus esse qui.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          {[1, 2, 3, 4].map((item) => (
            <Badge key={item} variant="Outline">
              frontend
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};
