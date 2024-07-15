/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Loader } from "../utils/Loader";
import { Link } from "react-router-dom";

export const UserProfile = () => {
  const { user, loading } = useSelector((state) => state.authReducer);
  console.log(user);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <section>
            <div className="mt-5 lg:px-10">
              <div className="text-gray-400 pb-10 w-full">
                <h1 className="text-lg font-semibold pb-5">Profile</h1>
              </div>
            </div>
          </section>
        </Fragment>
      )}
    </>
  );
};
