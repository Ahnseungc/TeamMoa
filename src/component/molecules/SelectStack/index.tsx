import { useState } from "react";
import { SelectStackLayout, PositionSelectLayout } from "./styles";
import { StoryFn } from "@storybook/react";
import { SelectStackProps } from "@type/Tb";
import NeedPosistionForm from "@molecules/NeedPositionForm";

const SelectStack: StoryFn<SelectStackProps> = ({
  position,
  stack,
  count,
}) => {
  const [isSelect, setIsSelect] = useState(false);

  const onClickPosition = () => {
    setIsSelect(!isSelect);
  }
  return (
    <SelectStackLayout>
      <PositionSelectLayout 
        isSelect={isSelect}
        onClick={onClickPosition}>
        <div/>
      </PositionSelectLayout>
      <NeedPosistionForm 
        needTitle={position}
        needCount={count}
        needFramework={stack}/>
    </SelectStackLayout>
  );
};

export default SelectStack;
