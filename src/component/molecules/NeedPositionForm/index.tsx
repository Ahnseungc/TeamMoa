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
  console.log(NeedPosistionName);
  return (
    <NeedPositionLayout>
      <PositionTitleLayout>
        <Text fontSize="12px" fontWeight="400" color="rgba(104, 118, 132, 1)">
          {`${NeedPosistionName}(${NeedPosistionNumber}명)`}
        </Text>
      </PositionTitleLayout>
      <FrameWorkLayout>
        {/* {NeedPosistionSkill.map((FrameWork) => {
          return (
            <Text fontSize="15px" fontWeight="400" color="rgba(0, 0, 0, 1)">
              {FrameWork}
            </Text>
          );
        })} */}
      </FrameWorkLayout>
    </NeedPositionLayout>
  );
};

export default NeedPosistionForm;
