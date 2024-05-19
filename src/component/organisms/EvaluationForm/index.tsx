import { EvaluationFormLayout } from "./styles";
import Heading from "@atom/Heading";
import Text from "@atom/Text";

const EvaluationForm = () => {
  return (
    <EvaluationFormLayout>
      <div>
        <Heading
          fontSize={"16px"}
          fontWeight={"700"}
          color={"rgba(0, 0, 0, 1)"}
        >
          김성우 교수님의 HCI 팀원 찾습니다
        </Heading>
      </div>
      <div>
        <Heading
          fontSize={"16px"}
          fontWeight={"700"}
          color={"rgba(0, 0, 0, 1)"}
        >
          이름
        </Heading>
      </div>
      <div>
        <Heading
          fontSize={"16px"}
          fontWeight={"700"}
          color={"rgba(0, 0, 0, 1)"}
        >
          학교
        </Heading>
      </div>
      <div>
        <Heading
          fontSize={"16px"}
          fontWeight={"700"}
          color={"rgba(0, 0, 0, 1)"}
        >
          학과(학번)
        </Heading>
      </div>
    </EvaluationFormLayout>
  );
};

export default EvaluationForm;
