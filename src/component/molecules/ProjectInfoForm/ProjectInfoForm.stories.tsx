import { StoryFn } from "@storybook/react";
import ProjectInfoForm from ".";
import { ProjectInfoProps } from "@type/Tb";

export default {
  title: "Molecules/ProjectInfoForm",
  component: ProjectInfoForm,
};

const Template: StoryFn<ProjectInfoProps> = (args: any) => <ProjectInfoForm {...args} />;

export const Default = Template.bind({});

Default.args = {
  projectinfo: [2, 3, 0, 4]
};
