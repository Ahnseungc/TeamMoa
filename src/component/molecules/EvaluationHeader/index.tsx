import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "@atom/Heading";
import Button from "@atom/Button";
import { EvaluationHeaderLayout } from "./styles";
import CancelIcon from "@asset/image/icon_cancel.png";
import { EvaluationHeaderProps } from "@type/Tb";

const EvaluationHeader: FC<EvaluationHeaderProps> = ({ content }) => {
  const navigate = useNavigate();

  return (
    <EvaluationHeaderLayout>
      <Button
        type="button"
        buttontype="icon"
        icon={CancelIcon}
        disabled={false}
        onClick={() => navigate("/userinfo")}
      />
      <Heading
        fontSize={"20px"}
        fontWeight={"400"}
        color={"rgba(99, 99, 99, 1)"}
      >
        {content}
      </Heading>
    </EvaluationHeaderLayout>
  );
};

export default EvaluationHeader;
