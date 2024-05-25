import { StoryFn } from "@storybook/react";
import { UserProfileLayout, Header, WriteHeader } from "./styles";
import Heading from "@atom/Heading";
import WrittenPostForm from "@organisms/WrittenPostForm";
import { PostInfoData } from "@type/Tb";
import UserStackForm from "@molecules/UserStackForm";
import ProjectInfoForm from "@molecules/ProjectInfoForm";
import UserInfoForm from "@molecules/UserInfoForm";
import HomeBoardForm from "@organisms/HomeBoardForm";

const UserProfile: StoryFn<PostInfoData> = ({ PostInfo, BoardData }) => {
  return (
    <UserProfileLayout>
      <Header>
        <Heading
          fontSize={"20"}
          fontWeight={"400"}
          color={"rgba(99, 99, 99, 1)"}
        >
          프로필
        </Heading>
      </Header>
      <UserInfoForm
        name={"홍길동"}
        major={"빅데이터"}
        studentnumber={20203351}
        schoolName={"한림대학교"}
        temp={0}
      />
      <ProjectInfoForm projectinfo={[2, 3, 0, 4]} />
      <UserStackForm userstack={["React", "Next.js"]} />
      {PostInfo.map((post) => {
        return (
          <WrittenPostForm
            title={post.title}
            subtitle={post.subtitle}
            iscruiting={post.iscruiting}
            needposistion={post.needposistion.map((position) => ({
              name: position.name,
              count: position.count,
            }))}
          />
        );
      })}
      <WriteHeader>
        <Heading
          fontSize={"20"}
          fontWeight={"400"}
          color={"rgba(99, 99, 99, 1)"}
        >
          내가 쓴 게시글
        </Heading>
      </WriteHeader>

      {BoardData.map((data) => {
        return (
          <HomeBoardForm
            name={data.name}
            position={data.position}
            title={data.title}
            date={data.date}
            iscruiting={data.iscruiting}
            subtitle={data.subtitle}
            needposistion={data.needposistion}
          />
        );
      })}
    </UserProfileLayout>
  );
};

export default UserProfile;
