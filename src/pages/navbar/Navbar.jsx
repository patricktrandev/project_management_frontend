/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";
import { CreateProject } from "../project/CreateProject";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PersonIcon } from "@radix-ui/react-icons";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <section className="border-b py-4 px-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <p className="cursor-pointer text-rose font-bold">
          <Link to={"/"}> PROJECT MANAGEMENT</Link>
        </p>
        <div>
          <Dialog>
            <DialogTrigger>
              <Button variant="ghost">New Project</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>New Project</DialogTitle>
              </DialogHeader>

              <CreateProject />
            </DialogContent>
          </Dialog>
        </div>

        <div>
          <Link to="/subcripition/upgrade">
            <Button>Upgrade Plan</Button>
          </Link>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <p>user</p>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="rounded-full" variant="outline" size="icon">
              <PersonIcon />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem>Subcription</DropdownMenuItem>
            <DropdownMenuItem>View Profile</DropdownMenuItem>
            <DropdownMenuItem className="border-t">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
};
