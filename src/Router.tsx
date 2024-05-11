import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "@templates/Layout";

const LoginPage = lazy(() => import("@page/Login"));
const SignUpPage = lazy(() => import("@page/SignUp"));
const HomePage = lazy(() => import("@page/Home"));
const UserInfoPage = lazy(() => import("@page/UserInfo"));
const WriteContentPage = lazy(() => import("@page/Write/WritingContent"));
const WriteUploadPage = lazy(() => import("@page/Write/WritingUpload"));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/userinfo" element={<UserInfoPage />} />
        <Route path="/writecontent" element={<WriteContentPage />} />
        <Route path="/writeupload" element={<WriteUploadPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
