import { setMajorProps } from "@type/Tb";
import { ChangeEvent, useState } from "react";
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
  const [name, setName] = useState<string>("");
  const [school, setSchool] = useState<string>("");
  const [major, setMajor] = useState<setMajorProps>({
    StudentID: "",
    DoubleMajor: "",
  });

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeSchool = (e: ChangeEvent<HTMLInputElement>) => {
    setSchool(e.target.value);
  };

  const onChangeMajor = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "StudentID" && /[^0-9]/.test(value)) {
      return;
    }
    setMajor((prev) => {
      return { ...prev, [id]: value };
    });
  };

  return (
    <>
      {index === 1 && (
        <SignUpSettingName
          name={name}
          onchange={onChangeName}
          pageIndex={index}
          setIndex={setIndex}
        />
      )}
      {index === 2 && (
        <SignUpSettingSchoolName
          pageIndex={index}
          setIndex={setIndex}
          school={school}
          onchange={onChangeSchool}
        />
      )}
      {index === 3 && (
        <SignUpSettingMajor
          pageIndex={index}
          setIndex={setIndex}
          major={major}
          onchange={onChangeMajor}
        />
      )}
      {index === 4 && <SignUpSuccess pageIndex={index} setIndex={setIndex} />}
    </>
  );
};

export default SignUpPage;
