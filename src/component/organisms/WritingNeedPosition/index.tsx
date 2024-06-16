import Heading from "@atom/Heading";
import { WritingNeedPositionLayout, NeedPosistionList } from "./styles";
import { WritingNeedPositionProps } from "@type/Tb";
import { FC } from "react";
import NeedPosistionForm from "@molecules/NeedPositionForm";

const WritingNeedPosition: FC<WritingNeedPositionProps> = ({
  NeedPosition,
}) => {
  console.log(NeedPosition);
  return (
    <WritingNeedPositionLayout>
      <Heading fontSize="20px" fontWeight="600" color="rgba(0, 0, 0, 1)">
        필요 포지션
      </Heading>
      <NeedPosistionList>
        {NeedPosition?.map((EachPosition) => {
          return (
            <NeedPosistionForm
              NeedPosistionName={EachPosition.NeedPosistionName}
              NeedPosistionNumber={EachPosition.NeedPosistionNumber}
              NeedPosistionSkill={EachPosition.NeedPosistionSkill}
            />
          );
        })}
      </NeedPosistionList>
    </WritingNeedPositionLayout>
  );
};

export default WritingNeedPosition;
