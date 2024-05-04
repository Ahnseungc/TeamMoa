import {
  SignUpSuccessLayout,
  SignUpSuccessLayoutText,
  SignUpSucessImg,
  SignUpSuccessBody,
} from "./styles";
import Heading from "@atom/Heading";
import Button from "@atom/Button";
import SignUpHeader from "@organisms/SignUp/SignUpHeader";
import Text from "@atom/Text";

const SignUpSuccess = () => {
  return (
    <SignUpSuccessLayout>
      <SignUpHeader />
      <SignUpSuccessLayoutText>
        <Heading fontSize="24px" fontWeight="600" color="rgba(0,0,0,1)">
          회원가입이 성공적으로
        </Heading>
        <Heading fontSize="24px" fontWeight="600" color="rgba(0,0,0,1)">
          완료되었습니다!
        </Heading>
      </SignUpSuccessLayoutText>
      <SignUpSuccessBody>
        <SignUpSucessImg />
        <Text fontSize="20px" fontWeight="400" color="rgba(0, 0, 0, 1)">
          이제부터 팀원을 모집해봐요.
        </Text>

        <Button
          content="홈으로"
          type="button"
          buttontype="largebuttonactive"
          disabled={false}
          onClick={() => null}
        />
      </SignUpSuccessBody>
    </SignUpSuccessLayout>
  );
};

export default SignUpSuccess;
