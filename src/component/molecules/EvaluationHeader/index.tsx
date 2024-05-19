import Heading from "@atom/Heading";
import Button from "@atom/Button";
import { EvaluationHeaderLayout } from "./styles";
import CancelIcon from "@asset/image/icon_cancel.png";
import { EvaluationHeaderProps } from "@type/Tb";
import { FC } from "react";

const EvaluationHeader: FC<EvaluationHeaderProps> = ({ content }) => {
  return (
    <EvaluationHeaderLayout>
      <Button
        type="button"
        buttontype="icon"
        icon={CancelIcon}
        disabled={false}
        onClick={() => null}
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
