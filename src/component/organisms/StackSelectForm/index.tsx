import { StoryFn } from "@storybook/react";
import { StackSelectFormProps } from "@type/Tb";
import Heading from "@atom/Heading";
import {
  StackSelectFormLayout,
  StackListLayout,
} from "./styles";
import SelectStack from "@molecules/SelectStack";

const StackSelectForm: StoryFn<StackSelectFormProps> = ({
  stackList,
  applyStatus,
}) => {
  return (
    <StackSelectFormLayout>
      <Heading fontSize={"20"} fontWeight={"600"} color={"rgba(0,0,0,1)"}>
        {applyStatus ? "지원스택 선택" : "지원스택"}
      </Heading>
      {stackList.map((item) => {
        return (
          <StackListLayout>
            <SelectStack
              src={item.src}
              position={item.position}
              stack={item.stack}/>
            </StackListLayout>
          )
        })}
    </StackSelectFormLayout>
  );
};

export default StackSelectForm;
