import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "@templates/Layout";

const SignUpPage = lazy(() => import("@page/SignUp"));
const HomePage = lazy(() => import("@page/Home"));
const UserInfoPage = lazy(() => import("@page/UserInfo"));
const ApplyPage = lazy(() => import("@page/Apply"));
const WriteContentPage = lazy(() => import("@page/Write/WritingContent"));
const AlarmPage = lazy(() => import("@page/Alarm"));
const SearchForm = lazy(() => import("@templates/SearchFrom"));
const KakaoLoading = lazy(() => import("@page/Auth/kakao"));
const LoginPage = lazy(() => import("@page/Login"));
const PostingPage = lazy(() => import("@page/Posting"));

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
      <Route path="/posting" element={<PostingPage />} />
      <Route path="/writecontent" element={<WriteContentPage />} />
      <Route path="/search" element={<SearchForm />} />
      <Route path="/auth/kakao" element={<KakaoLoading />} />
    </Routes>
  );
};

export default Router;
