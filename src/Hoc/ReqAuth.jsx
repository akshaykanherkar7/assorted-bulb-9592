import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ReqAuth = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);

  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/"></Navigate>;
  }
};

export default ReqAuth;
