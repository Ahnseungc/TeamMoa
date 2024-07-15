import HomeMain from "@templates/Home/HomeMain";
import { MouseEvent, useState } from "react";
import useSWR from "swr";
import fetcher from "src/apis/util/fetcher";
import { useRecoilState } from "recoil";
import { userAtom } from "src/atom";
import Spinner from "@atom/Spinner";
import { Box, Header, HeaderTextLayout } from "./styles";
import Button from "@atom/Button";
import BackIcon from "@asset/image/icon_back.png";
import Heading from "@atom/Heading";
import { useNavigate } from "react-router-dom";
import Text from "@atom/Text";

const ApplyUserList = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const userInfo = useRecoilState(userAtom);
  const navigate = useNavigate();

  const { data, isLoading, error } = useSWR(
    () => (userInfo ? `http://localhost:3000/api/postsAll` : null),
    fetcher
  );

  if (isLoading) return <Spinner />;
  if (error) return <div>..로딩중</div>;

  return (
    <div>
      <Header>
        <Button
          type="button"
          buttontype="icon"
          icon={BackIcon}
          disabled={false}
          onClick={() => navigate("/WriteApply")}
        />
        <HeaderTextLayout>
          <Heading fontSize="20px" fontWeight="400" color="#636363">
            지원자 보기
          </Heading>
        </HeaderTextLayout>
      </Header>
      <Box>
        <div>
          <span style={{ display: "flex", width: "100vw" }}>
            <span style={{ marginLeft: "0" }}>
              <Text
                fontSize={"16px"}
                fontWeight={"700"}
                color={"rgba(0, 0, 0, 1)"}
              >
                김성우 교수님의 HCI 팀원 찾습니다
              </Text>
            </span>
            <span className="button">
              <Text
                fontSize={"12px"}
                fontWeight={"400"}
                color={"rgba(104, 118, 132, 1)"}
              >
                프론트엔드
              </Text>
            </span>
          </span>
        </div>
        <div style={{ marginTop: "7px" }}>
          <span style={{ width: "68px" }}>
            <Text
              fontSize={"16px"}
              fontWeight={"700"}
              color={"rgba(0, 0, 0, 1)"}
            >
              이름
            </Text>
          </span>
          <span>홍길동</span>
        </div>
        <div style={{ marginTop: "7px" }}>
          <span style={{ width: "68px" }}>
            <Text
              fontSize={"16px"}
              fontWeight={"700"}
              color={"rgba(0, 0, 0, 1)"}
            >
              학교
            </Text>
          </span>
          <span>한림대학교</span>
        </div>
        <div style={{ marginTop: "7px" }}>
          <span style={{ width: "68px" }}>
            <Text
              fontSize={"16px"}
              fontWeight={"700"}
              color={"rgba(0, 0, 0, 1)"}
            >
              학과(학번)
            </Text>
          </span>
          <span>20240000</span>
        </div>
      </Box>
    </div>
  );
};

export default ApplyUserList;
