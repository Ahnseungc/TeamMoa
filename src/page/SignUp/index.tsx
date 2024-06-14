import { setMajorProps } from "@type/Tb";
import { ChangeEvent, useState } from "react";
import { lazy } from "react";
import { Axios } from "src/apis/api/axiosFetch";
import { useRecoilValue } from "recoil";
import { userAtom } from "src/atom";
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
  const userAtomValue = useRecoilValue(userAtom);

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
      return value;
    }
    setMajor((prev) => {
      return { ...prev, [id]: value };
    });
  };
  const onSubmit = async () => {
    try {
      const res = await Axios.post("http://localhost:3000/api/user", {
        NickName: name,
        SchoolName: school,
        SchoolMajor: major.DoubleMajor,
        SchoolNumber: Number(major.StudentID),
        kakaoId: userAtomValue.id,
        username: userAtomValue.name,
        email: userAtomValue.email,
        img: userAtomValue.img,
      });

      res.status === 201 && setIndex(4);
    } catch (err) {
      console.log(err);
    }
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
          onSubmit={onSubmit}
        />
      )}
      {index === 4 && <SignUpSuccess pageIndex={index} setIndex={setIndex} />}
    </>
  );
};

export default SignUpPage;
