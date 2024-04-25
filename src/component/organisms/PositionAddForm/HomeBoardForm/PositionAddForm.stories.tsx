import { StoryFn } from "@storybook/react";
import PositionAddForm from ".";
import { PositionAddFormProps } from "@type/Tb";

export default {
  title: "Organisms/PositionAddForm",
  component: PositionAddForm,
};

const Template: StoryFn<PositionAddFormProps> = (args: any) => (
  <PositionAddForm {...args} />
);

export const Default = Template.bind({});

Default.args = {
  positionCount: 3,
};
