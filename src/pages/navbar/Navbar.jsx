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

import React, { useEffect } from "react";
import { CreateProject } from "../project/CreateProject";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PersonIcon } from "@radix-ui/react-icons";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import toast from "react-hot-toast";
import { logoutUserAction } from "@/redux/actions/authActions";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.authReducer);
  //console.log(user);
  const logoutHandler = () => {
    //logout();
    dispatch(logoutUserAction());
    localStorage.clear();

    navigate("/subcription/upgrade");
    toast.success("Logout user");
  };

  return (
    <section className="border-b py-4 px-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <p className="cursor-pointer text-rose font-bold">
          <Link to={"/"}> PROJECT MANAGEMENT</Link>
        </p>
        {user && (
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
        )}

        <div>
          <Link to="/subcription/upgrade">
            <Button>Upgrade Plan</Button>
          </Link>
        </div>
      </div>
      {user ? (
        <div className="flex gap-3 items-center">
          <p>{user?.fullName}</p>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="rounded-full" variant="outline" size="icon">
                <PersonIcon />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem>Subcription</DropdownMenuItem>
              <Link to="/profile/me">
                <DropdownMenuItem>View Profile</DropdownMenuItem>
              </Link>

              <Link to={"/"}>
                <DropdownMenuItem className="border-t" onClick={logoutHandler}>
                  Logout
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        !loading && (
          <Link to={"/login"}>
            <Button>Login</Button>
          </Link>
        )
      )}
    </section>
  );
};
