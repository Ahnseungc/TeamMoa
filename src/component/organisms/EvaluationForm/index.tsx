import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { EvaluationFormLayout, EvaluationFormLine } from "./styles";
import Heading from "@atom/Heading";
import PosistionIcon from "@atom/PosistionIcon";
import Text from "@atom/Text";
import { EvaluationFormProps } from "@type/Tb";

const EvaluationForm: FC<EvaluationFormProps> = ({
  title,
  postionName,
  name,
  schoolName,
  schoolNum,
}) => {
  const Navigate = useNavigate();

  return (
    <EvaluationFormLayout  onClick={() => Navigate("/evaluation")}>
      <EvaluationFormLine>
        <th>
          <Heading
            fontSize={"16px"}
            fontWeight={"700"}
            color={"rgba(0, 0, 0, 1)"}
          >
            {title}
          </Heading>
        </th>
        <th style={{ marginLeft: "10px" }}>
          <PosistionIcon
            count={0}
            name={postionName}
            PosistionType={"default"}
          />
        </th>
      </EvaluationFormLine>
      <EvaluationFormLine>
        <th>
          <Heading
            fontSize={"16px"}
            fontWeight={"700"}
            color={"rgba(0, 0, 0, 1)"}
          >
            이름
          </Heading>
        </th>
        <th>
          <Text fontSize={"16px"} fontWeight={"400"} color={"rgba(0, 0, 0, 1)"}>
            {name}
          </Text>
        </th>
      </EvaluationFormLine>
      <EvaluationFormLine>
        <th>
          <Heading
            fontSize={"16px"}
            fontWeight={"700"}
            color={"rgba(0, 0, 0, 1)"}
          >
            {schoolName}
          </Heading>
        </th>
        <th>
          <Text fontSize={"16px"} fontWeight={"400"} color={"rgba(0, 0, 0, 1)"}>
            한림대학교
          </Text>
        </th>
      </EvaluationFormLine>
      <EvaluationFormLine>
        <th>
          <Heading
            fontSize={"16px"}
            fontWeight={"700"}
            color={"rgba(0, 0, 0, 1)"}
          >
            학과(학번)
          </Heading>
        </th>
        <th>
          <Text fontSize={"16px"} fontWeight={"400"} color={"rgba(0, 0, 0, 1)"}>
            {schoolNum}
          </Text>
        </th>
      </EvaluationFormLine>
    </EvaluationFormLayout>
  );
};

export default EvaluationForm;
