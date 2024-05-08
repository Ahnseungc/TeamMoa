import { StoryFn } from "@storybook/react";
import {
  UserProfileLayout,
  Header
} from "./styles";
import Heading from "@atom/Heading";
import WrittenPostForm from "@organisms/WrittenPostForm";
import { PostInfoData } from "@type/Tb";
import UserStackForm from "@molecules/UserStackForm";
import ProjectInfoForm from "@molecules/ProjectInfoForm";
import UserInfoForm from "@molecules/UserInfoForm";

const UserProfile: StoryFn<PostInfoData>= ({ PostInfo }) => {
  return (
    <UserProfileLayout>
      <Header>
        <Heading fontSize={"20"} fontWeight={"700"} color={"#595454"}>
          프로필
        </Heading>
      </Header>
      <UserInfoForm name={"홍길동"} major={"빅데이터"} studentnumber={20203351} temp={0}/>
      <ProjectInfoForm projectinfo={[2, 3, 0, 4]}/>
      <UserStackForm userstack={["React", "Next.js"]}/>
      {PostInfo.map((post) => {
        return (
          <WrittenPostForm
            title={post.title}
            subtitle={post.subtitle}
            iscruiting={post.iscruiting}
            needposistion={post.needposistion.map((position) => (
              { name: position.name, count: position.count }
            ))}
          />
        );
      })}
    </UserProfileLayout>
  );
};

export default UserProfile;
