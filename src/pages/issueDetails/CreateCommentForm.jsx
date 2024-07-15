/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { PaperPlaneIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const CreateCommentForm = (props) => {
  const [comment, setComment] = useState("");
  const { issueId } = props;
  const form = useForm({
    defaultValues: {
      content: "",
    },
  });
  const onSubmitComment = (data) => {
    console.log("create comment data ", data);
    setComment(data);
  };
  return (
    <Form {...form}>
      <form
        className="flex gap-2 mt-10"
        onSubmit={form.handleSubmit(onSubmitComment)}
      >
        <div>
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="items-center">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="w-[30rem]"
                    placeholder="Write your comment here..."
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-[5rem]">
          <PaperPlaneIcon />
        </Button>
      </form>
    </Form>
  );
};
