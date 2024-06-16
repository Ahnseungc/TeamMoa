import Spinner from "@atom/Spinner";
import UserInfo from "@templates/Mypage/UserProfile";
import axios from "axios";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { Axios } from "src/apis/api/axiosFetch";
import fetcher from "src/apis/util/fetcher";
import { userAtom } from "src/atom";
import useSWR from "swr";

const UserInfoPage = () => {
  const userinfo = useRecoilValue(userAtom);
  const [skill, setSkill] = useState([]);

  const { data, isLoading, error } = useSWR(
    () =>
      userinfo
        ? `http://3.106.143.87:3000/api/user?kakaoId=${userinfo.id}`
        : null,
    fetcher
  );

  const { data: postData } = useSWR(
    () =>
      userinfo ? `http://3.106.143.87:3000/api/posts?id=${userinfo.id}` : null,
    fetcher
  );

  const onSubmit = async () => {
    try {
      try {
        const response = await axios.put(
          `http://3.106.143.87:3000/updateuser?kakaoId=${userinfo.id}`,
          {}
        );
        console.log("User updated:", response.data);
      } catch (error) {
        console.error("Error updating user:", error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return data ? (
    <UserInfo
      PostInfo={data[0]}
      userInfo={userinfo}
      BoardData={postData}
      skill={skill}
      setSkill={setSkill}
    />
  ) : (
    <Spinner />
  );
};

export default UserInfoPage;
