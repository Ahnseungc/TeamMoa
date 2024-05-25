import PosistionIcon from "@atom/PosistionIcon";
import { NeedPositionLayout, FrameWorkLayout, PositionTitleLayout } from "./style";
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
      <PositionTitleLayout>
        <Text fontSize="12px" fontWeight="400" color="rgba(104, 118, 132, 1)">
          {`${needTitle}(${needCount}명)`}
        </Text>
      </PositionTitleLayout>
      <FrameWorkLayout>
        {needFramework.map((FrameWork) => {
          return (
            <PosistionIcon
              count={needCount}
              name={FrameWork}
              PosistionType="default"
            />
          );
        })}
      </FrameWorkLayout>
    </NeedPositionLayout>
  );
};

export default NeedPosistionForm;
