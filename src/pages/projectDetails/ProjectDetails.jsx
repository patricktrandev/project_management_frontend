/* eslint-disable no-unused-vars */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "@radix-ui/react-icons";

import React from "react";
import ShowMoreText from "react-show-more-text";
import { InviteUserForm } from "./InviteUserForm";
import { IssueList } from "../issue/IssueList";
import { Chatbox } from "../chat/Chatbox";
import { ScrollArea } from "@/components/ui/scroll-area";

export const ProjectDetails = () => {
  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };
  const handleProjectInvitation = () => {};
  return (
    <section>
      <div className="mt-5 lg:px-10">
        <div className="lg:flex gap-5 justify-between pb-4">
          <ScrollArea className="h-screen lg:w-[69%] pr-2">
            <div className="text-gray-400 pb-10 w-full">
              <h1 className="text-lg font-semibold pb-5">
                Create E-commerce Webiste Using React
              </h1>
            </div>
            <div className="space-y-5 pb-10">
              <ShowMoreText
                lines={3}
                more="more"
                less="less"
                onClick={executeOnClick}
                expanded={false}
                className="w-[700px]"
                width={500}
                truncatedEndingComponent={"... "}
              >
                <p className="w-full text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perspiciatis repellendus reprehenderit officia, atque laborum
                  vero quis illo ducimus, laudantium possimus praesentium,
                  ratione ipsa necessitatibus ab consequatur magnam omnis neque
                  sunt?Lorem, ipsum.Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Aliquid reprehenderit odio illo pariatur
                  beatae tempore officia asperiores nemo ducimus accusamus.Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
                  quos eius aliquid amet sapiente dicta excepturi inventore
                  aspernatur, eveniet molestias.
                </p>
              </ShowMoreText>

              <div className="flex ">
                <p className="w-40">Project Lead: </p>
                <p className="text-rose">John Doe</p>
              </div>
              <div className="flex">
                <p className="w-36">Members</p>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((item) => {
                    return (
                      <Avatar key={item} className="cursor-pointer">
                        <AvatarFallback>Z</AvatarFallback>
                      </Avatar>
                    );
                  })}
                </div>

                <Dialog>
                  <DialogTrigger>
                    <Button
                      variant="outline"
                      className="ml-2 "
                      size="sm"
                      onClick={handleProjectInvitation}
                    >
                      Invite <PlusIcon className="w-3 h-3 ml-2" />
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Invite User</DialogTitle>
                    </DialogHeader>
                    <InviteUserForm />
                  </DialogContent>
                </Dialog>
              </div>

              <div className="flex ">
                <p className="w-36">Tags </p>
                <div className="flex items-center gap-2">
                  <Badge className="rounded-full" size="sm">
                    React
                  </Badge>
                  <Badge className="rounded-full" size="sm">
                    React
                  </Badge>
                </div>
              </div>
            </div>

            <div className="py-5 border-b text-lg tracking-wider">
              <div className="lg:flex md:flex gap-3 justify-between py-2">
                <IssueList status="pending" title="Todo" />
                <IssueList status="in_progres" title="In Progress" />
                <IssueList status="done" title="Done" />
              </div>
            </div>
          </ScrollArea>

          <div className="lg:w-[30%] rounded-md sticky right-5 top-10">
            <Chatbox />
          </div>
        </div>
      </div>
    </section>
  );
};
