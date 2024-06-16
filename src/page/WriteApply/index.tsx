import { StoryFn } from "@storybook/react";
import {
  WritingUploadLayout,
  Header,
  HeaderTextLayout,
  ButtonLayout,
  Line,
} from "./styles";
import Button from "@atom/Button";
import BackIcon from "@asset/image/icon_back.png";
import Heading from "@atom/Heading";
import WritingBoardForm from "@organisms/WritingBoardForm";
import WritingNeedPosition from "@organisms/WritingNeedPosition";
import { useLocation, useNavigate } from "react-router-dom";
import useSWR from "swr";
import fetcher from "src/apis/util/fetcher";

const WritingUpload: StoryFn = () => {
  const location = useLocation();
  const { id, name } = location.state || {};

  const {
    data: wirteForm,
    isLoading,
    error,
  } = useSWR(
    () => `http://3.106.143.87:3000/api/postsDetail?writeid=${name}`,
    fetcher
  );

  const navigate = useNavigate();

  return (
    wirteForm && (
      <WritingUploadLayout>
        <Header>
          <Button
            type="button"
            buttontype="icon"
            icon={BackIcon}
            disabled={false}
            onClick={() => null}
          />
          <HeaderTextLayout>
            <Heading fontSize="20px" fontWeight="400" color="#636363">
              {wirteForm[0]?.UploadTag}
            </Heading>
          </HeaderTextLayout>
        </Header>
        <WritingBoardForm
          src="/"
          userName={wirteForm[0]?.Writer}
          userPosition="프론트"
          iconSize="38px"
          writedDate={wirteForm[0]?.ExpireDate}
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
          WebSiteUri={wirteForm[0]?.WebSiteUri}
          Title={wirteForm[0]?.Title}
          Detail={wirteForm[0]?.Detail}
          IsRecruiting={wirteForm[0]?.IsRecruiting}
        />
        <Line />
        <WritingNeedPosition NeedPosition={wirteForm[0]?.NeedPosistion} />
        <Line />
        <ButtonLayout>
          <Button
            type="button"
            buttontype="largebuttonactive"
            content="지원자 보기"
            disabled={false}
            onClick={() => navigate("/applyuserlist")}
          />
        </ButtonLayout>
      </WritingUploadLayout>
    )
  );
};

// , Navigate("/home")

export default WritingUpload;
