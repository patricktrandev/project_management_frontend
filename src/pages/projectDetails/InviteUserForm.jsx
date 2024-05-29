/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const InviteUserForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });
  const onSubmitInviteUser = (data) => {
    console.log("create prijetc data ", data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitInviteUser)}>
        <div className="items-center">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    className="border w-full border-gray-400 py-5 px-5 form-control"
                    placeholder="johndoe@gmail.com...."
                  />
                </FormControl>
                <FormDescription>User email is required</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row-reverse">
          <DialogClose>
            <Button type="submit" className="w-full mt-5">
              Invite User
            </Button>
          </DialogClose>
        </div>
      </form>
    </Form>
  );
};
