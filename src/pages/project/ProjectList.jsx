// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import { ScrollArea } from "@/components/ui/scroll-area";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ProjectCard } from "./ProjectCard";

const tags = [
  "All",
  "React",
  "Nextjs",
  "Spring Boot",
  "Javascript",
  "Typescript",
  "Angular",
  "Golang",
];

const categories = ["All", "Fullstack", "Frontend", "Backend"];

export const ProjectList = () => {
  const [keyword, setKeyword] = useState("");
  const handleFilterChange = (section, value) => {
    console.log(value + " - ", section);
  };
  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <div className="relative px-3 lg:px-0 lg:flex gap-5 justify-content-center py-3">
      <section className="filter_search">
        <Card className="p-5 sticky top-10">
          <div className="flex justify-between lg:w-[20rem]">
            <p className="text-xl tracking-wider">Filter</p>
            <Button sixe="icon" variant="ghost">
              <MixerHorizontalIcon />
            </Button>
          </div>
          <CardContent className="mt-5">
            <ScrollArea className="h-[72vh] space-y-7">
              <div>
                <h1 className="pb-3 text-gray-400 border-b">Category</h1>
                <div className="pt-5">
                  <RadioGroup
                    defaultValue="all"
                    onValueChange={(val) => handleFilterChange("category", val)}
                  >
                    {categories?.map((item) => {
                      return (
                        <div key={item} className="flex items-center space-x-2">
                          <RadioGroupItem
                            value={item.toLowerCase().replace(" ", "")}
                            id={item.toLowerCase().replace(" ", "")}
                          />
                          <Label htmlFor={item.toLowerCase().replace(" ", "")}>
                            {item}
                          </Label>
                        </div>
                      );
                    })}
                  </RadioGroup>
                </div>
              </div>
              <div className="pt-9">
                <h1 className="pb-3 text-gray-400 border-b">Tags</h1>
                <div className="pt-5">
                  <RadioGroup
                    defaultValue="all"
                    onValueChange={(val) => handleFilterChange("tags", val)}
                  >
                    {tags?.map((item) => {
                      return (
                        <div key={item} className="flex items-center space-x-2">
                          <RadioGroupItem
                            value={item.toLowerCase().replace(" ", "")}
                            id={item.toLowerCase().replace(" ", "")}
                          />
                          <Label htmlFor={item.toLowerCase().replace(" ", "")}>
                            {item}
                          </Label>
                        </div>
                      );
                    })}
                  </RadioGroup>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </section>
      <section className="project_list w-full lg:w-[48rem]">
        <div className="flex gap-2 items-center pb-5 justify-between">
          <div className="relative p-0 w-full">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                className="40% px-9"
                type="text"
                placeholder="Enter name of project"
                onChange={handleSearchChange}
              />
              <MagnifyingGlassIcon className="absolute top-3 hover:text-red-600 cursor-pointer " />
            </div>
          </div>
        </div>

        <div>
          <div className="space-y-5 min-h-[74vh]">
            {keyword
              ? [1, 2, 3, 4].map((item) => <ProjectCard key={`r${item}`} />)
              : [1, 2, 3].map((item) => <ProjectCard key={`s${item}`} />)}
          </div>
        </div>
      </section>
    </div>
  );
};
