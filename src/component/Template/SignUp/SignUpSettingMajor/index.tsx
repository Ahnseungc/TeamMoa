import {
  SignUpSettingSchoolNameLayout,
  SignUpSettingSchoolNameText,
  SignUpSettingSchoolNameLabelForm,
  SignUpSettingSchoolNameLabel,
  SignUpSettingSchoolDoubleMajorLabel,
} from "./styles";
import Heading from "@atom/Heading";
import Button from "@atom/Button";
import Input from "@atom/Input";
import Text from "@atom/Text";
import SignUpHeader from "@organisms/SignUp/SignUpHeader";
import { FC } from "react";
import { SignUpPageProps } from "@type/Tb";

const SignUpSettingMajor: FC<SignUpPageProps> = ({
  setIndex,
  pageIndex,
  onchange,
  major,
}) => {
  return (
    <SignUpSettingSchoolNameLayout>
      <SignUpHeader setIndex={setIndex} pageIndex={pageIndex} />
      <SignUpSettingSchoolNameText>
        <Heading fontSize="24px" fontWeight="600" color="rgba(0,0,0,1)">
          학번과 학과를
        </Heading>
        <Heading fontSize="24px" fontWeight="600" color="rgba(0,0,0,1)">
          설정해주세요
        </Heading>
      </SignUpSettingSchoolNameText>
      <SignUpSettingSchoolNameLabelForm>
        <SignUpSettingSchoolNameLabel>
          <label htmlFor="StudentID">
            <Text fontSize="15px" fontWeight="500" color="rgba(99, 99, 99, 1)">
              학번을 설정해주세요
            </Text>
          </label>
          <Input
            placeholder={"학번(8글자)"}
            readonly={false}
            disabled={false}
            value={major.StudentID}
            onChange={onchange}
            error={""}
            id="StudentID"
            type={"text"}
            inputtype={"text"}
            maxlength={8}
          />
        </SignUpSettingSchoolNameLabel>
        <SignUpSettingSchoolDoubleMajorLabel>
          <label htmlFor="DoubleMajor">
            <Text fontSize="15px" fontWeight="500" color="rgba(99, 99, 99, 1)">
              복수전공이 있다면 함께 기입해주세요 :D
            </Text>
          </label>
          <Input
            placeholder={"전공명 / 복수전공(부전공)"}
            readonly={false}
            disabled={false}
            value={major.DoubleMajor}
            onChange={onchange}
            error={""}
            id="DoubleMajor"
            type={"text"}
            inputtype={"text"}
          />
        </SignUpSettingSchoolDoubleMajorLabel>
      </SignUpSettingSchoolNameLabelForm>
      <div>
        <Button
          content="계속하기"
          type="button"
          buttontype={major.StudentID ? "largebuttonactive" : "largebutton"}
          disabled={major.StudentID ? false : true}
          onClick={() => setIndex(4)}
        />
      </div>
    </SignUpSettingSchoolNameLayout>
  );
};

export default SignUpSettingMajor;
