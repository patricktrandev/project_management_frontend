/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";
import { IssueCard } from "./IssueCard";

import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { CreateIssueForm } from "./CreateIssueForm";

export const IssueList = ({ status, title }) => {
  return (
    <div>
      <Dialog>
        <Card className="w-full md:w-[300px] lg:w-[400px]">
          <CardHeader>
            <CardTitle className="text-roselight">{title}</CardTitle>
          </CardHeader>

          <CardContent className="px-2">
            <div className="space-y-2">
              {[1, 2, 3].map((item) => {
                return <IssueCard key={item} />;
              })}
            </div>
          </CardContent>

          <CardFooter>
            <DialogTrigger>
              <Button className="w-full flex items-center gap-2">
                Create Issue
                <PlusCircledIcon />
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>New Issue</DialogTitle>
              </DialogHeader>
              <CreateIssueForm />
            </DialogContent>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  );
};
