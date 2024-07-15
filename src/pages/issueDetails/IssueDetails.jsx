/* eslint-disable no-unused-vars */
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { useParams } from "react-router-dom";
import ReactShowMoreText from "react-show-more-text";
import { CreateCommentForm } from "./CreateCommentForm";
import { CommentCard } from "./CommentCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const IssueDetails = () => {
  const { id, issueId } = useParams();
  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };
  const handleUpdateIssueStatus = (status) => {
    console.log("issue status ", status);
  };
  return (
    <div className="px-20 py-8 text-gray-400">
      <div className="flex justify-between border p-10 rounded-lg">
        <ScrollArea className="h-[80vh] w-[60%]">
          <div className="">
            <h1 className="text-lg font-semibold text-gray-400">
              Create navbar
            </h1>
            <div className="py-5">
              <h2 className="font-semibold text-gray-400">Description</h2>
              <ReactShowMoreText
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
              </ReactShowMoreText>
            </div>

            <div className="mt-5">
              <h1 className="mb-3">Activity</h1>
              <Tabs defaultValue="comment">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="comment">Comment</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                  <TabsContent></TabsContent>
                </TabsList>

                <TabsContent value="all">
                  <p>All makes changes to your account here</p>
                </TabsContent>
                <TabsContent value="comment">
                  <div className="mt-10 space-y-6">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <CommentCard key={item} />
                    ))}
                  </div>

                  <CreateCommentForm issueId={issueId} />
                </TabsContent>
                <TabsContent value="history">
                  <p>History of your account is here</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </ScrollArea>

        <div className="w-full lg:w-[30%] space-y-2">
          <Select onValueChange={handleUpdateIssueStatus}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Pending" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in_progress">In progress</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectContent>
          </Select>

          <div className="border rounded-lg ">
            <p className="border-b py-3 px-5">Details</p>
            <div className="p-5">
              <div className="space-y-7">
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Assignee</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 text-xs">
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-gray-500 text-sm">@John Doe</p>
                  </div>
                </div>

                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Labels</p>
                  <p>None</p>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Status</p>
                  <Badge className="">in_progres</Badge>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Release</p>
                  <p>10-11-2022</p>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Reporter</p>
                  <div className="flex gap-3 items-center">
                    <Avatar className="h-8 w-8 text-xs">
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-gray-500 text-sm">@John Doe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
