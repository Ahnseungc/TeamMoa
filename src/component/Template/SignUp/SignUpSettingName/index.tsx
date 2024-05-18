import {
  SignUpSchoolSettingNameLayout,
  SignUpSchoolSettingText,
  SignUpSchoolSettingLabelForm,
  SignUpSchoolSettingLabel,
} from "./styles";
import Heading from "@atom/Heading";
import Button from "@atom/Button";
import Input from "@atom/Input";
import Text from "@atom/Text";
import { FC } from "react";
import { SignUpPageProps } from "@type/Tb";
import { useNavigate } from "react-router-dom";
import CancelIcon from "@asset/image/icon_cancel.png";

const SignUpSchoolSettingName: FC<SignUpPageProps> = ({
  setIndex,
  pageIndex,
  name,
  onchange,
}) => {
  const Navigate = useNavigate();

  return (
    <SignUpSchoolSettingNameLayout>
      <Button
        type="button"
        buttontype="icon"
        icon={CancelIcon}
        disabled={false}
        onClick={() => Navigate("/")}
      />
      <SignUpSchoolSettingText>
        <Heading fontSize="24px" fontWeight="600" color="rgba(0,0,0,1)">
          팀원 모집을
        </Heading>
        <Heading fontSize="24px" fontWeight="600" color="rgba(0,0,0,1)">
          시작해 볼까요?
        </Heading>
      </SignUpSchoolSettingText>
      <SignUpSchoolSettingLabelForm>
        <SignUpSchoolSettingLabel>
          <label htmlFor="name">
            <Text fontSize="15px" fontWeight="500" color="rgba(99, 99, 99, 1)">
              먼저 닉네임이 필요해요 :)
            </Text>
          </label>
          <Input
            placeholder={"홍길동"}
            readonly={false}
            disabled={false}
            value={name}
            onChange={onchange}
            error={""}
            id="name"
            type={"text"}
            inputtype={"text"}
          />
        </SignUpSchoolSettingLabel>

        <Button
          content="계속하기"
          type="button"
          buttontype={name ? "largebuttonactive" : "largebutton"}
          disabled={name ? false : true}
          onClick={() => setIndex(pageIndex + 1)}
        />
      </SignUpSchoolSettingLabelForm>
    </SignUpSchoolSettingNameLayout>
  );
};

export default SignUpSchoolSettingName;
