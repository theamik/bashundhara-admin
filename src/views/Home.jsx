import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { role } = useSelector((state) => state?.auth);
  if (role === "seller") return <Navigate to="/seller/dashboard" />;
  else if (role === "admin") return <Navigate to="/admin/dashboard" />;
  else return <Navigate to="/login" />;
};

export default Home;
