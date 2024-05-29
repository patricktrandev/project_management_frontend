/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";

export const CreateIssueForm = () => {
  const form = useForm({
    defaultValues: {
      issueName: "",
      description: "",
    },
  });
  const onSubmitCreateIssue = (data) => {
    console.log("create issue data ", data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitCreateIssue)}>
        <div className="items-center">
          <FormField
            control={form.control}
            name="issueName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-400 py-5 px-5 form-control"
                    placeholder="Enter issue name"
                  />
                </FormControl>
                <FormDescription>Issue name is required</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-400 py-5 px-5 form-control"
                    placeholder="Enter issue description"
                  />
                </FormControl>
                <FormDescription>
                  Issue descripition is required
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row-reverse">
          <DialogClose>
            <Button type="submit" className="w-full mt-5">
              Create Issue
            </Button>
          </DialogClose>
        </div>
      </form>
    </Form>
  );
};
