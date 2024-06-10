import EvaluationHeader from "@molecules/EvaluationHeader";
import EvaluationForm from "@organisms/EvaluationForm";
import { ApplicantLayout } from "./styles";

export const Applicant = () => {
  return (
    <ApplicantLayout>
      <EvaluationHeader content="지금까지 만난 팀원" />
      <EvaluationForm
        title={"김성우 교수님의 HCI 팀원 찾습니다"}
        postionName={"프론트엔드"}
        name={"안승찬 "}
        schoolName={"한림대"}
        schoolNum={"20183632"}
      />
    </ApplicantLayout>
  );
};

export default Applicant;
