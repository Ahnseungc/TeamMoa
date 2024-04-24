import PosistionIcon from "@atom/PosistionIcon";
import { NeedPositionLayout, FrameWorkLayout } from "./style";
import Text from "@atom/Text";
import { EachPosition } from "@type/Tb";
import { FC } from "react";

const NeedPosistionForm: FC<EachPosition> = ({
  needTitle,
  needCount,
  needFramework,
}) => {
  return (
    <NeedPositionLayout>
      <Text fontSize="20px" fontWeight="700" color="rgba(89, 84, 84, 1)">
        {`${needTitle}(${needCount}명)`}
      </Text>
      <FrameWorkLayout>
        {needFramework.map((FrameWork) => {
          return <PosistionIcon text={FrameWork} />;
        })}
      </FrameWorkLayout>
    </NeedPositionLayout>
  );
};

export default NeedPosistionForm;
