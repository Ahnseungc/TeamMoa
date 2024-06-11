import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { 
  EvaluationFormLayout, 
  UserInfoLayout 
} from "./styles";
import Heading from "@atom/Heading";
import Text from "@atom/Text";
import NeedPosistionForm from "@molecules/NeedPositionForm";
import Button from "@atom/Button";
import { MemberEvaluationFormProps } from "@type/Tb";
import EvaluationItem from "@molecules/EvaluationItem";

const MemberEvaluationForm: FC<MemberEvaluationFormProps> = ({
  title,
  name,
  postionName,
  framework
}) => {
  const Navigate = useNavigate();
  return (
    <EvaluationFormLayout>
      <Heading
        fontSize={"20px"}
        fontWeight={"700"}
        color={"rgba(0, 0, 0, 1)"}
      >
        {title}
      </Heading>
      <section/>
      <UserInfoLayout>
        <Text 
          fontSize={"16px"}
          fontWeight={"700"}
          color={"rgba(0, 0, 0, 1)"}
        >
          {name}
        </Text>
        <NeedPosistionForm needTitle={postionName} needCount={framework.length} needFramework={framework}/>
      </UserInfoLayout>
      <section/>
      <EvaluationItem category={"실력"}/>
      <EvaluationItem category={"커뮤니케이션 능력"}/>
      <EvaluationItem category={"일정 관리 능력"}/>
      <Button
        content="완료"
        type="button"
        buttontype={"largebuttonactive"}
        disabled={false}
        onClick={() => Navigate("/membercheck")}
      />
    </EvaluationFormLayout>
  );
};

export default MemberEvaluationForm;
