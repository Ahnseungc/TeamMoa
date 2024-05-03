import { StoryFn } from "@storybook/react";
import { StackSelectFormProps } from "@type/Tb";
import Heading from "@atom/Heading";
import {
  StackSelectFormLayout,
  StackListLayout,
} from "./styles";
import SelectStack from "@molecules/SelectStack";

const StackSelectForm: StoryFn<StackSelectFormProps> = ({
  StackList,
}) => {
  return (
    <StackSelectFormLayout>
      <Heading fontSize="20px" fontWeight="600" color="rgba(0,0,0,1)">
        지원스택 선택
      </Heading>
      {StackList.map((item) => {
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
