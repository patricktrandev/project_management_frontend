/* eslint-disable no-unused-vars */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { DropdownDotMenu } from "../utils/DropdownDotMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PersonIcon } from "@radix-ui/react-icons";
import { UserList } from "./UserList";
import { Link } from "react-router-dom";

export const IssueCard = () => {
  return (
    <Card className="rounded-md py-1 pb-2">
      <CardHeader className="py-0 pb-1">
        <div className="flex justify-between items-center">
          <Link to={"/project/1/issue/2"}>
            <CardTitle>Create Navbar</CardTitle>
          </Link>

          <DropdownDotMenu content={["Edit", "Delete"]} />
        </div>
      </CardHeader>

      <CardContent className="py-0">
        <div className="flex items-center justify-between">
          <p>FBP -1 </p>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                size="icon"
                className="bg-gray-900 hove:text-black text-white rounded-full"
              >
                <Avatar className="cursor-pointer">
                  <AvatarFallback>
                    <PersonIcon />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <UserList />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
};
