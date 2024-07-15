import { StoryFn } from "@storybook/react";
import { StackSelectFormProps } from "@type/Tb";
import Heading from "@atom/Heading";
import { StackSelectFormLayout } from "./styles";
import SelectStack from "@molecules/SelectStack";

const StackSelectForm: StoryFn<StackSelectFormProps> = ({
  stackList,
  applyStatus,
}) => {
  console.log(stackList);
  return (
    <StackSelectFormLayout>
      <Heading fontSize={"20"} fontWeight={"700"} color={"rgba(0,0,0,1)"}>
        {applyStatus ? "지원포지션 선택" : "지원스택"}
      </Heading>
      <div style={{ marginTop: "15px" }}>
        {stackList.map((item) => {
          return (
            <SelectStack
              position={item?.NeedPosistionName}
              stack={item?.NeedPosistionSkill}
              count={item.NeedPosistionNumber}
            />
          );
        })}
      </div>
    </StackSelectFormLayout>
  );
};

export default StackSelectForm;
