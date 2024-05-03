import { SelectStackLayout, PositionImage, StackListLayout, StackItem } from "./styles";
import { StoryFn } from "@storybook/react";
import { SelectStackProps } from "@type/Tb";
import Text from "@atom/Text";

const SelectStack: StoryFn<SelectStackProps> = ({
  src,
  position,
  stack,
}) => {
  return (
    <SelectStackLayout>
      <PositionImage src={src}/>
      <div>
        <Text fontSize={"16"} fontWeight={"400"} color={"#7D7D7D"}>
          {position}
        </Text>
        <StackListLayout>
          {stack.map((item) => {
            return (
              <StackItem>
                <Text fontSize={"15"} fontWeight={"700"} color={"black"}>
                  {item}
                </Text>
              </StackItem>
            )
          })}
        </StackListLayout>
      </div>
    </SelectStackLayout>
  );
};

export default SelectStack;
