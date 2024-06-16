import HomeMain from "@templates/Home/HomeMain";
import { useState } from "react";
import useSWR from "swr";
import fetcher from "src/apis/util/fetcher";
import { useRecoilState } from "recoil";
import { userAtom } from "src/atom";
import Spinner from "@atom/Spinner";

const Home = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const userInfo = useRecoilState(userAtom);

  const { data, isLoading, error } = useSWR(
    () => (userInfo ? `http://3.106.143.87:3000/api/postsAll` : null),
    fetcher
  );

  if (isLoading) return <Spinner />;
  if (error) return <div>..로딩중</div>;

  return (
    <HomeMain BoardData={data} isActive={isActive} setIsActive={setIsActive} />
  );
};

export default Home;
