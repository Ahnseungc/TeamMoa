import Input from "../../../component/atom/Input";

const SignUp = () => {
  return (
    <div>
      <label htmlFor="UserId">이름</label>
      <Input
        placeholder="홍길동"
        readonly={false}
        type="text"
        disabled={false}
        value={""}
        error={""}
        inputtype={"text"}
        id={"UserID"}
      />
      <label htmlFor="Password">비밀번호</label>
      <Input
        id="Password"
        placeholder="비밀번호"
        readonly={false}
        type="password"
        disabled={false}
        value={""}
        error={""}
        inputtype={"password"}
      />

      <label htmlFor="PasswordCheck">비밀번호 확인</label>
      <Input
        id="PasswordCheck"
        placeholder="비밀번호확인"
        readonly={false}
        type="password"
        disabled={false}
        value={""}
        error={""}
        inputtype={"password"}
      />
    </div>
  );
};

export default SignUp;
