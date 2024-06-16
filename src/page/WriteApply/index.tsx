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
import { useLocation } from "react-router-dom";
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
    () => `http://localhost:3000/api/postsDetail?writeid=${name}`,
    fetcher
  );
  console.log(wirteForm);
  console.log(name);

  return (
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
            글쓰기
          </Heading>
        </HeaderTextLayout>
      </Header>
      <WritingBoardForm
        src="/"
        userName={wirteForm?.Writer}
        userPosition="프론트"
        iconSize="38px"
        writedDate={wirteForm?.ExpireDate}
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
        WebSiteUri={wirteForm.WebSiteUri}
        Title={wirteForm.Title}
        Detail={wirteForm.Detail}
        IsRecruiting={wirteForm.IsRecruiting}
      />
      <Line />
      <WritingNeedPosition NeedPosition={wirteForm.NeedPosistion} />
      <Line />
      <ButtonLayout>
        <Button
          type="button"
          buttontype="largebuttonactive"
          content="지원자 보기"
          disabled={false}
          onClick={() => null}
        />
      </ButtonLayout>
    </WritingUploadLayout>
  );
};

// , Navigate("/home")

export default WritingUpload;
