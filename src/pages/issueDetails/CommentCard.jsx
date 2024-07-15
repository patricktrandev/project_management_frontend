/* eslint-disable no-unused-vars */
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import React from "react";

export const CommentCard = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex items-center gap-4 bg-zinc-700 px-5 py-5 rounded-lg">
        <div>
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className="">
          <p className="text-gray-500 text-sm">@John Doe</p>
          <p className="text-gray-400">
            How about work is still pending? How about work is still pending?
          </p>
        </div>
        <div>
          <Button className="rounded-full" size="icon" variant="outline">
            <TrashIcon />
          </Button>
          <Button className="rounded-full" size="icon" variant="outline">
            <Pencil2Icon />
          </Button>
        </div>
      </div>
    </div>
  );
};
