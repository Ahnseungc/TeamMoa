import {
  LoginPageLayout,
  MainLogo,
  LoginPageHeader,
  LoginPageLoginForm,
} from "./styles";
import Button from "@atom/Button";
import Input from "@atom/Input";

const LoginPage = () => {
  return (
    <LoginPageLayout>
      <LoginPageHeader>
        <MainLogo src="/" alt="로고" />
      </LoginPageHeader>
      <LoginPageLoginForm>
        <Input
          type="text"
          id=""
          placeholder="아이디"
          readonly={false}
          inputtype="text"
          disabled={false}
          value={""}
          error={""}
        />
        <Input
          type="password"
          placeholder={"비밀번호를 입력하세요"}
          readonly={false}
          disabled={false}
          value={""}
          error={""}
          id={""}
          inputtype={"text"}
        />

        <Button
          type="button"
          buttontype="middlebutton"
          disabled={false}
          onClick={() => null}
          content="로그인"
        />
        <div>
          <Button
            type="button"
            buttontype="text"
            disabled={false}
            onClick={() => null}
            content="회원 가입"
          />
        </div>
      </LoginPageLoginForm>
    </LoginPageLayout>
  );
};

export default LoginPage;
