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
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./auth.css";

import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, registerAction } from "@/redux/actions/authActions";
import { Loader } from "../utils/Loader";
export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
    },
  });
  const { success, loading, error } = useSelector((state) => state.authReducer);

  const onSubmitRegisterUser = (data) => {
    //console.log("create user data ", data);
    dispatch(registerAction(data));
  };
  useEffect(() => {
    if (success) {
      navigate("/login");
      toast.success("Register successfully");
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, success, loading, error, navigate]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="loginContainer">
          <div className="box h-[30rem] w-[25rem]">
            <div className="minContainer login">
              <div className="loginBox w-full px-10 space-y-5">
                <div className="space-y-5">
                  <div className="text-center">
                    <h1>Register</h1>
                  </div>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmitRegisterUser)}>
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
                              <FormDescription>
                                User email is required
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="text"
                                  className="border w-full border-gray-400 py-5 px-5 form-control"
                                  placeholder="John Doe"
                                />
                              </FormControl>
                              <FormDescription>
                                Full Name is required
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="password"
                                  className="border w-full border-gray-400 py-5 px-5 form-control"
                                  placeholder="At least 8 characters..."
                                />
                              </FormControl>
                              <FormDescription>
                                Password is required
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="">
                        <Button
                          type="submit"
                          className="w-full mt-5"
                          disabled={loading}
                        >
                          {loading ? "Register user..." : "Sign up"}
                        </Button>
                      </div>
                      <div className="my-5">
                        <p className="text-sm">
                          Already have an account?
                          <Link to="/login">
                            <span className="text-orange-600 px-1">Log in</span>
                          </Link>
                        </p>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
