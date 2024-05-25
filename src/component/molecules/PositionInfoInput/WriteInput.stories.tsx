import { StoryFn } from "@storybook/react";
import { InputType, ButtonType } from "@type/Tb";
import PositionInfoInput from ".";

import cancelBtn from "../../../asset/image/icon_cancel.png";

export interface PositionInfoInputType extends Omit<InputType, "type">, Omit<ButtonType, "type"> {
  iptype: InputType["type"];
  btntype: ButtonType["type"];
}

export default {
  title: "Molecules/PositionInfoInput",
  component: PositionInfoInput,
};

const Template: StoryFn<PositionInfoInputType> = (args: any) => (
  <PositionInfoInput {...args} />
);

export const Default = Template.bind({});

Default.args = {
  iptype: "text",
  inputtype: "text",
  btntype: "button",
  buttontype: "icon",
  icon: cancelBtn
};