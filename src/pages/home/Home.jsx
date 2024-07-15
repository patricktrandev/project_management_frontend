// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { ProjectList } from "../project/ProjectList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { clearErrors } from "@/redux/actions/authActions";
import { Loader } from "../utils/Loader";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isAuthenticated, error, loading } = useSelector(
    (state) => state.authReducer
  );
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/subcription/upgrade");
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [user, navigate, error]);
  console.log(isAuthenticated);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <ProjectList />
        </div>
      )}
    </>
  );
};
