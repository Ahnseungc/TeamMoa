import {
  NeedPositionLayout,
  FrameWorkLayout,
  PositionTitleLayout,
} from "./style";
import Text from "@atom/Text";
import { EachPosition } from "@type/Tb";
import { FC } from "react";

const NeedPosistionForm: FC<EachPosition> = ({
  NeedPosistionName,
  NeedPosistionNumber,
  NeedPosistionSkill,
}) => {
  return (
    <NeedPositionLayout>
      <PositionTitleLayout>
        {NeedPosistionNumber !== undefined ? (
          <Text fontSize="12px" fontWeight="400" color="rgba(104, 118, 132, 1)">
            {`${NeedPosistionName}(${NeedPosistionNumber}명)`}
          </Text>
        ) : (
          <Text fontSize="12px" fontWeight="400" color="rgba(104, 118, 132, 1)">
            {`${NeedPosistionName}`}
          </Text>
        )}
      </PositionTitleLayout>
      <FrameWorkLayout>
        <Text fontSize="15px" fontWeight="400" color="rgba(0, 0, 0, 1)">
          {NeedPosistionSkill}
        </Text>
      </FrameWorkLayout>
    </NeedPositionLayout>
  );
};

export default NeedPosistionForm;
