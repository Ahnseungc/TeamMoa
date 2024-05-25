import {
  SignUpSettingSchoolNameLayout,
  SignUpSettingSchoolNameText,
  SignUpSettingSchoolNameLabelForm,
  SignUpSettingSchoolNameLabel,
} from "./styles";
import Heading from "@atom/Heading";
import Button from "@atom/Button";
import Input from "@atom/Input";
import Text from "@atom/Text";
import SignUpHeader from "@organisms/SignUp/SignUpHeader";
import { FC } from "react";
import { SignUpPageProps } from "@type/Tb";

const SignUpSettingSchoolName: FC<SignUpPageProps> = ({
  pageIndex,
  setIndex,
  school,
  onchange,
}) => {
  return (
    <SignUpSettingSchoolNameLayout>
      <SignUpHeader setIndex={setIndex} pageIndex={pageIndex} />
      <SignUpSettingSchoolNameText>
        <Heading fontSize="24px" fontWeight="600" color="rgba(0,0,0,1)">
          현재 다니고 있는{" "}
          <Text fontSize="24px" fontWeight="600" color="rgba(217, 74, 86, 1)">
            학교
          </Text>
          를
        </Heading>
        <Heading fontSize="24px" fontWeight="600" color="rgba(0,0,0,1)">
          설정해 주세요
        </Heading>
      </SignUpSettingSchoolNameText>
      <SignUpSettingSchoolNameLabelForm>
        <SignUpSettingSchoolNameLabel>
          <label htmlFor="school">
            <Text fontSize="15px" fontWeight="500" color="rgba(99, 99, 99, 1)">
              현재 다니고 있는 학교를 설정해주세요 :)
            </Text>
          </label>
          <Input
            placeholder={"대학교 이름"}
            readonly={false}
            disabled={false}
            value={school}
            error={""}
            id="school"
            type={"text"}
            inputtype={"text"}
            onChange={onchange}
          />
        </SignUpSettingSchoolNameLabel>
      </SignUpSettingSchoolNameLabelForm>

      <Text fontSize="12px" fontWeight="400" color="rgba(99, 99, 99, 1)">
        다음이 마지막 단계 입니다!
      </Text>

      <div>
        <Button
          content="계속하기"
          type="button"
          buttontype={school ? "largebuttonactive" : "largebutton"}
          disabled={school ? false : true}
          onClick={() => setIndex(pageIndex + 1)}
        />
      </div>
    </SignUpSettingSchoolNameLayout>
  );
};

export default SignUpSettingSchoolName;
