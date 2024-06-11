import EvaluationHeader from "@molecules/EvaluationHeader";
import MemberEvaluationForm from "@organisms/MemberEvaluation";
import { MembeEvaluationLayout } from "./styles";

export const MembeEvaluation = () => {
  return (
    <MembeEvaluationLayout>
      <EvaluationHeader content="팀원 평가하기" />
      <MemberEvaluationForm
        title={"김성우 교수님의 HCI 팀원 찾습니다"}
        postionName={"프론트엔드"}
        name={"홍길동"}
        framework={["react", "next.js"]}
      />
    </MembeEvaluationLayout>
  );
};

export default MembeEvaluation;
