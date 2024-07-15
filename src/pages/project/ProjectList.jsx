// eslint-disable-next-line no-unused-vars
import React, { Fragment, useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  getProjectsAction,
  getProjectsSearchAction,
} from "@/redux/actions/projectActions";
import toast from "react-hot-toast";
import { Loader } from "../utils/Loader";
import { Navigate, Route, useSearchParams } from "react-router-dom";
import { ProjectSearch } from "./ProjectSearch";
import { ProjectFilterCategory } from "./ProjectFilterCategory";

export const ProjectList = () => {
  const dispatch = useDispatch();

  const { loading, projects, error } = useSelector(
    (state) => state.projectReducer
  );
  console.log(projects);

  //console.log(keyword);

  useEffect(() => {
    dispatch(getProjectsAction());
    if (error) {
      return toast.error(error);
    }
    //
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
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
                  <ProjectFilterCategory />
                </ScrollArea>
              </CardContent>
            </Card>
          </section>
          <section className="project_list w-full lg:w-[48rem]">
            <ProjectSearch />

            <div>
              <div className="space-y-5 min-h-[74vh]">
                {projects
                  ? [1, 2, 3, 4].map((item) => <ProjectCard key={`r${item}`} />)
                  : [1, 2, 3].map((item) => <ProjectCard key={`s${item}`} />)}
              </div>
            </div>
          </section>
        </div>
      )}
    </Fragment>
  );
};
