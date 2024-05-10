import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
const LoginPage = lazy(() => import("@page/Login"));

// import Login from "@/a"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default Router;
