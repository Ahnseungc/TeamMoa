import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const LoginPage = lazy(() => import("@page/Login"));
const SignUpPage = lazy(() => import("@page/SignUp"));
const HomePage = lazy(() => import("@page/Home"));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default Router;
