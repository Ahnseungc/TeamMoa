import {
  SignUpSuccessLayout,
  SignUpSuccessLayoutText,
  SignUpSucessImg,
  SignUpSuccessBody,
  SignUpSuccessTextHeader,
} from "./styles";
import Heading from "@atom/Heading";
import Button from "@atom/Button";
import SignUpHeader from "@organisms/SignUp/SignUpHeader";
import Text from "@atom/Text";
import { FC } from "react";
import { SignUpPageProps } from "@type/Tb";
import { useNavigate } from "react-router-dom";

const SignUpSuccess: FC<SignUpPageProps> = ({ pageIndex, setIndex }) => {
  const navigate = useNavigate();
  return (
    <SignUpSuccessLayout>
      <SignUpHeader pageIndex={pageIndex} setIndex={setIndex} />
      <SignUpSuccessTextHeader>
        <SignUpSuccessLayoutText>
          <Heading fontSize="24px" fontWeight="600" color="rgba(0,0,0,1)">
            회원가입이 성공적으로
          </Heading>
          <Heading fontSize="24px" fontWeight="600" color="rgba(0,0,0,1)">
            완료되었습니다!
          </Heading>
        </SignUpSuccessLayoutText>
      </SignUpSuccessTextHeader>
      <SignUpSuccessBody>
        <SignUpSucessImg />
        <Text fontSize="20px" fontWeight="400" color="rgba(0, 0, 0, 1)">
          이제부터 팀원을 모집해보러 가볼까요?
        </Text>
      </SignUpSuccessBody>
      <div>
        <Button
          content="홈으로"
          type="button"
          buttontype="largebuttonactive"
          disabled={false}
          onClick={() => {
            navigate("/home");
          }}
        />
      </div>
    </SignUpSuccessLayout>
  );
};

export default SignUpSuccess;
