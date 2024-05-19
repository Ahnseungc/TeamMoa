import { StoryFn } from "@storybook/react";
import { StackSelectFormProps } from "@type/Tb";
import Heading from "@atom/Heading";
import {
  StackSelectFormLayout,
} from "./styles";
import SelectStack from "@molecules/SelectStack";

const StackSelectForm: StoryFn<StackSelectFormProps> = ({
  stackList,
  applyStatus,
}) => {
  return (
    <StackSelectFormLayout>
      <Heading fontSize={"20"} fontWeight={"700"} color={"rgba(0,0,0,1)"}>
        {applyStatus ? "지원포지션 선택" : "지원스택"}
      </Heading>
      {stackList.map((item) => {
        return (
          <SelectStack
            position={item.position}
            stack={item.stack}
            count={item.count}/>
        )
      })}
    </StackSelectFormLayout>
  );
};

export default StackSelectForm;
