/* eslint-disable no-unused-vars */
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

export const Chatbox = () => {
  const [message, setMessage] = useState("");
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  console.log(message);
  const handleSendMessage = () => {};
  return (
    <div className="sticky">
      <div className="border rounded-lg">
        <h1 className="border-b p-5">Chat Box</h1>
        <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col">
          {[1, 2].map((item, index) => {
            return (
              <div key={item} className="flex gap-2 mb-2">
                <Avatar>
                  <AvatarFallback>Z</AvatarFallback>
                </Avatar>
                <div className="space-y-2 py-2 px-5 border rounded-e-2xl rounded-bl-2xl">
                  <p className="text-sm text-gray-400">@John Doe</p>
                  <p className="text-gray-300">Hello world</p>
                </div>
              </div>
            );
          })}
          {[1, 2, 3, 4].map((item, index) => {
            return (
              <div key={item} className="flex flex-row-reverse gap-2 mb-2 ">
                <div className="space-y-2 py-2 px-5 border rounded-l-2xl rounded-tr-2xl bg-sky-700">
                  <p className="text-sm text-gray-400">@John Doe</p>
                  <p className="text-gray-300">Hello world</p>
                </div>
              </div>
            );
          })}
        </ScrollArea>

        <div className="relative p-0">
          <Input
            placeholder="Type message..."
            className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0"
            value={message}
            onChange={handleMessageChange}
          />
          <Button
            onClick={handleSendMessage}
            className="absolute right-2 top-3 rounded-full"
            size="icon"
          >
            <PaperPlaneIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
