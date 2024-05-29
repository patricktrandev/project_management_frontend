/* eslint-disable no-unused-vars */

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

export const UserList = () => {
  return (
    <>
      <div className="space-y-2">
        <div className="border rounded-md text-center">
          <p className="py-2 px-3">Unassignee</p>
        </div>
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <div
              key={item}
              className="py-2 group hover:bg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md border px-4 "
            >
              <Avatar>
                <AvatarFallback>Z</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm leading-none">Patrick</p>
                <p className="text-sm text-muted-foreground">@testuser</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
