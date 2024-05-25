import { ProjectInfoFormLayout, InfoLayout } from "./styles";
import { ProjectInfoProps } from "@type/Tb";
import { StoryFn } from "@storybook/react";
import Text from "@atom/Text";

const ProjectInfoForm: StoryFn<ProjectInfoProps> = ({ projectinfo }) => {
  const menuTitle = [
    "지원현황",
    "최근 본 내역",
    "지원서 열람",
    "지금까지 만난 팀원",
  ];
  return (
    <ProjectInfoFormLayout>
      {projectinfo.map((project, idx) => (
        <InfoLayout>
          <Text fontSize={"24px"} fontWeight={"600"} color={"rgba(0, 0, 0, 1)"}>
            {project}
          </Text>
          <Text
            fontSize={"12px"}
            fontWeight={"400"}
            color={"rgba(99, 99, 99, 1)"}
          >
            {menuTitle[idx]}
          </Text>
        </InfoLayout>
      ))}
    </ProjectInfoFormLayout>
  );
};

export default ProjectInfoForm;
