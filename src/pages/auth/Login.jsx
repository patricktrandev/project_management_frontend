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
import { clearErrors, loginAction } from "@/redux/actions/authActions";
import { Loader } from "../utils/Loader";
export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.authReducer
  );
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmitLogin = (data) => {
    console.log("login user data ", data);

    dispatch(loginAction(data.email, data.password));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
      toast.success("Login successfully");
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [isAuthenticated, error, loading]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="loginContainer">
          <div className="box h-[30rem] w-[25rem]">
            <div className="minContainer login">
              <div className="loginBox w-full px-10 space-y-5">
                <div className="text-center">
                  <h1>Log In</h1>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmitLogin)}>
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
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                {...field}
                                type="password"
                                className="border w-full border-gray-400 py-5 px-5 form-control"
                                placeholder="Enter your password.."
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
                    <div>
                      <Button
                        type="submit"
                        className="w-full mt-5"
                        disabled={loading}
                      >
                        {loading ? "Login user..." : "Login"}
                      </Button>
                    </div>
                    <div className="my-5">
                      <p className="text-sm">
                        Don&apos;t have an account?
                        <Link to="/register">
                          <span className="text-orange-600 px-1">Register</span>
                        </Link>
                      </p>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
