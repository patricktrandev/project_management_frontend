/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { loadUserAction } from "@/redux/actions/authActions";
import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { Loader } from "../utils/Loader";

export const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const {
    isAuthenticated = false,
    loading = true,
    user,
  } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch(loadUserAction());
    }
  }, [isAuthenticated, loading]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};
