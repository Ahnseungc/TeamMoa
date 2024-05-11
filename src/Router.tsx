import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "@templates/Layout";

const LoginPage = lazy(() => import("@page/Login"));
const SignUpPage = lazy(() => import("@page/SignUp"));
const HomePage = lazy(() => import("@page/Home"));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default Router;
