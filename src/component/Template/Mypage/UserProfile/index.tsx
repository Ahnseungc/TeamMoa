import { StoryFn } from "@storybook/react";
import { UserProfileLayout, Header, WriteHeader } from "./styles";
import Heading from "@atom/Heading";
import WrittenPostForm from "@organisms/WrittenPostForm";
import { PostInfoData } from "@type/Tb";
import UserStackForm from "@molecules/UserStackForm";
import ProjectInfoForm from "@molecules/ProjectInfoForm";
import UserInfoForm from "@molecules/UserInfoForm";
import HomeBoardForm from "@organisms/HomeBoardForm";
import Spinner from "@atom/Spinner";
import { useNavigate } from "react-router-dom";

const UserProfile: StoryFn<PostInfoData> = ({
  PostInfo,
  BoardData,
  userInfo,
  setSkill,
  skill,
}) => {
  const Navigate = useNavigate();
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
        name={PostInfo?.NickName}
        major={PostInfo?.SchoolName}
        studentnumber={PostInfo?.SchoolNumber}
        schoolName={PostInfo?.SchoolName}
        temp={0}
      />
      <ProjectInfoForm projectinfo={[2, 3, 0, 4]} />
      <UserStackForm userstack={skill} setSkill={setSkill} />
      <WriteHeader>
        <Heading fontSize={"20"} fontWeight={"600"} color={"rgba(0, 0, 0, 1)"}>
          내가 쓴 게시글
        </Heading>
      </WriteHeader>

      {BoardData ? (
        BoardData.map((data) => {
          return (
            <HomeBoardForm
              name={data.Writer}
              position={"팀장"}
              title={data.Title}
              date={data.ExpireDate}
              iscruiting={data.IsRecruiting}
              subtitle={data.Detail}
              needposistion={data.NeedPosistion}
              onclick={() =>
                Navigate("/WriteApply", {
                  state: { id: 1, name: data.writeid },
                })
              }
            />
          );
        })
      ) : (
        <Spinner />
      )}
    </UserProfileLayout>
  );
};

export default UserProfile;
