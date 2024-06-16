import Heading from "@atom/Heading";
import { PostingHeader, PostingLayout } from "./styles";
import WritingBoardForm from "@organisms/WritingBoardForm";
import WritingNeedPosition from "@organisms/WritingNeedPosition";
import { Line } from "@templates/ApplyInputForm/styles";
import ApplyStatistics from "@organisms/ApplyStatistics";
import { useRecoilState } from "recoil";
import { userAtom } from "src/atom";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useSWR from "swr";
import fetcher from "src/apis/util/fetcher";
import Spinner from "@atom/Spinner";
import { useEffect, useState } from "react";
import Button from "@atom/Button";

const Posting = () => {
  const userInfo = useRecoilState(userAtom);
  const location = useLocation();
  const { id, name } = location.state || {};
  const [showStatistics, setShowStatistics] = useState(false);
  const Navigate = useNavigate();

  const { data, isLoading, error } = useSWR(
    () =>
      userInfo ? `http://localhost:3000/api/postsDetail?writeid=${name}` : null,
    fetcher
  );

  if (isLoading) return <Spinner />;

  const timer = setTimeout(() => {
    setShowStatistics(true);
  }, 500);

  return (
    <PostingLayout>
      {data ? (
        <>
          <PostingHeader>
            <Heading
              fontSize={"20px"}
              fontWeight={"400"}
              color={"rgba(99, 99, 99, 1)"}
            >
              한림대학교
            </Heading>
          </PostingHeader>
          <WritingBoardForm
            src="/"
            IsRecruiting={data[0]?.IsRecruiting}
            Title={data[0]?.Title}
            Detail={data[0]?.Detail}
            userName={data[0]?.Writer}
            userPosition=""
            iconSize="38px"
            writedDate={data[0]?.createdAt}
            WebSiteUri={data[0]?.WebSiteUri}
            size="20px"
            color="#000000"
            fontWeight="700"
            fontSize=""
            headingSize=""
            headingColor=""
            headingWeight=""
            textColor=""
            textSize=""
            children=""
          />
          <Line />
          <WritingNeedPosition NeedPosition={data[0]?.NeedPosistion} />
          <Line />
          {showStatistics && <ApplyStatistics />}
          <Button
            type={"button"}
            buttontype={"largebuttonactive"}
            content={"지원하기"}
            disabled={false}
            onClick={() => Navigate("/apply", { state: { id: 1, name: name } })}
          />
        </>
      ) : (
        <Spinner />
      )}
    </PostingLayout>
  );
};

export default Posting;
