/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const categories = ["All", "Fullstack", "Frontend", "Backend"];
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
export const ProjectFilterCategory = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [tagsSearch, setTagsSearch] = useState("");
  const handleCategoryFilterChange = (value) => {
    //console.log(value + " - ");
    setCategory(value);
  };
  const handleTagsFilterChange = (value) => {
    // console.log(value + " - ");
    setTagsSearch(value);
  };
  console.log(category);
  console.log(tagsSearch);
  const handleSearch = () => {
    if (
      category !== "" &&
      category != "all" &&
      tagsSearch != "" &&
      tagsSearch != "all"
    ) {
      navigate(`/search/category=${category}&tags=${tagsSearch}`);
    } else if (category === "" || category === "all") {
      navigate(`/search/category=all&tags=${tagsSearch}`);
    } else if (tagsSearch === "" || tagsSearch === "all") {
      navigate(`/search/category=${category}&tags=all`);
    } else {
      navigate("/");
    }
  };
  return (
    <form onSubmit={handleSearch}>
      <div>
        <h1 className="pb-3 text-gray-400 border-b">Category</h1>
        <div className="pt-5">
          <RadioGroup
            defaultValue="all"
            onValueChange={(val) => handleCategoryFilterChange(val)}
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
            onValueChange={(val) => handleTagsFilterChange(val)}
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
      <div className="py-5 w-max">
        <Button>Search</Button>
      </div>
    </form>
  );
};
