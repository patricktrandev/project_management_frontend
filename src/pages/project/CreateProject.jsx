/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DialogClose } from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const categories = ["All", "Fullstack", "Frontend", "Backend"];
const tagsValue = [
  "All",
  "React",
  "Nextjs",
  "Spring Boot",
  "Javascript",
  "Typescript",
  "Angular",
  "Golang",
];
export const CreateProject = () => {
  const [checkSubcription, setCheckSubcription] = useState(false);
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      tags: [],
    },
  });
  const onSubmitCreateProject = (data) => {
    console.log("create prijetc data ", data);
  };
  const handleTagsChange = (item) => {
    const currentTags = form.getValues("tags");
    let updatedTags = currentTags.includes(item)
      ? currentTags.filter((tag) => tag !== item)
      : [...currentTags, item];
    form.setValue("tags", updatedTags);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitCreateProject)}>
        <div className="">
          <div className="items-center">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="border w-full border-gray-400 py-5 px-5 form-control"
                      placeholder="Project name...."
                    />
                  </FormControl>
                  <FormDescription>Project name is required</FormDescription>
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
                      placeholder="Project description...."
                    />
                  </FormControl>
                  <FormDescription>
                    Project description is required
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories?.map((item) => {
                          return (
                            <SelectItem key={item} value={item.toLowerCase()}>
                              {item}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-3">
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          handleTagsChange(value);
                        }}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a tag" />
                        </SelectTrigger>
                        <SelectContent>
                          {tagsValue?.map((item) => {
                            return (
                              <SelectItem
                                key={item}
                                value={item.toLowerCase().replace(" ", "")}
                              >
                                {item}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <div className="flex flex-wrap">
                      {field.value?.map((item) => {
                        return (
                          <div
                            key={item}
                            onClick={() => handleTagsChange(item)}
                          >
                            <div className="cursor-pointer flex items-center border gap-2 py-2 rounded-full px-4">
                              <span className="text-sm">{item}</span>
                              <Cross1Icon className="h-3 w-3" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <DialogClose>
              {checkSubcription ? (
                <div>
                  <p>
                    You can only 3 projects with free plan. Please upgrade your
                    plan.
                  </p>
                </div>
              ) : (
                <div className="ml-auto">
                  <Button type="submit" className="w-full mt-5">
                    Create Project
                  </Button>
                </div>
              )}
            </DialogClose>
          </div>
        </div>
      </form>
    </Form>
  );
};
