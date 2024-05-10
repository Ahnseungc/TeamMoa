import Button from "@atom/Button";
import Text from "@atom/Text";
import { SignUpHeaderLayout } from "./styles";
import { FC } from "react";
import { SignUpPageProps } from "@type/Tb";
import BackIcon from "@asset/image/icon_back.png";

const SignUpHeader: FC<SignUpPageProps> = ({ setIndex, pageIndex }) => {
  return (
    <SignUpHeaderLayout>
      <Button
        type="button"
        buttontype="icon"
        icon={BackIcon}
        disabled={false}
        onClick={() => setIndex(pageIndex - 1)}
      />
      <Text fontSize="20px" fontWeight="400" color="rgba(99, 99, 99, 1)">
        회원 가입
      </Text>
    </SignUpHeaderLayout>
  );
};

export default SignUpHeader;
