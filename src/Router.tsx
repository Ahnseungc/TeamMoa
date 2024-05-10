import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const LoginPage = lazy(() => import("@page/Login"));
const SignUpPage = lazy(() => import("@page/SignUp"));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};

export default Router;
