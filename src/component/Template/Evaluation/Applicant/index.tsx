import EvaluationHeader from "@molecules/EvaluationHeader";
import EvaluationForm from "@organisms/EvaluationForm";

export const Applicant = () => {
  return (
    <div>
      <EvaluationHeader content="지금까지 만난 팀원" />
      <EvaluationForm />
    </div>
  );
};

export default Applicant;
