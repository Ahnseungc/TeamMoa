import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "@templates/Layout";

const LoginPage = lazy(() => import("@page/Login"));
const SignUpPage = lazy(() => import("@page/SignUp"));
const HomePage = lazy(() => import("@page/Home"));
const UserInfoPage = lazy(() => import("@page/UserInfo"));
const ApplyPage = lazy(() => import("@page/Apply"));
const WriteContentPage = lazy(() => import("@page/Write/WritingContent"));
const WriteDetailContentPage = lazy(
  () => import("@page/Write/WritingDetailContent")
);
const WriteUploadPage = lazy(() => import("@page/Write/WritingUpload"));
const AlarmPage = lazy(() => import("@page/Alarm"));
const SearchForm = lazy(() => import("@templates/SearchFrom"));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/userinfo" element={<UserInfoPage />} />
        <Route path="/alarm" element={<AlarmPage />} />
      </Route>
      <Route path="/apply" element={<ApplyPage />} />
      <Route path="/writecontent" element={<WriteContentPage />} />
      <Route path="/writedetailcontent" element={<WriteDetailContentPage />} />
      <Route path="/writeupload" element={<WriteUploadPage />} />
      <Route path="/search" element={<SearchForm />} />
    </Routes>
  );
};

export default Router;
