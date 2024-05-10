import { useState } from "react";
import { lazy } from "react";
const SignUpSettingName = lazy(
  () => import("@templates/SignUp/SignUpSettingName")
);
const SignUpSettingMajor = lazy(
  () => import("@templates/SignUp/SignUpSettingMajor")
);
const SignUpSettingSchoolName = lazy(
  () => import("@templates/SignUp/SignUpSettingSchoolName")
);
const SignUpSuccess = lazy(() => import("@templates/SignUp/SignUpSucces"));

const SignUpPage = () => {
  const [index, setIndex] = useState<number>(1);

  return (
    <>
      {index === 1 && (
        <SignUpSettingName pageIndex={index} setIndex={setIndex} />
      )}
      {index === 2 && (
        <SignUpSettingSchoolName pageIndex={index} setIndex={setIndex} />
      )}
      {index === 3 && (
        <SignUpSettingMajor pageIndex={index} setIndex={setIndex} />
      )}
      {index === 4 && <SignUpSuccess pageIndex={index} setIndex={setIndex} />}
    </>
  );
};

export default SignUpPage;

const IndexPage = [
  { id: 1, name: "userName" },
  { id: 2, name: "schoolName" },
  { id: 3, name: "schoolMajor" },
  { id: 4, name: "Success" },
];
