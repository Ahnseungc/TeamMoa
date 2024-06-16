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

const WritingUpload: StoryFn = ({
  setIndex,
  wirteForm,
  NewNeedPosistion,
  onSubmit,
}) => {
  return (
    <WritingUploadLayout>
      <Header>
        <Button
          type="button"
          buttontype="icon"
          icon={BackIcon}
          disabled={false}
          onClick={() => setIndex(1)}
        />
        <HeaderTextLayout>
          <Heading fontSize="20px" fontWeight="400" color="#636363">
            글쓰기
          </Heading>
        </HeaderTextLayout>
      </Header>
      <WritingBoardForm
        src="/"
        userName={wirteForm.Writer}
        userPosition="프론트"
        iconSize="38px"
        writedDate={wirteForm.ExpireDate}
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
        Title={wirteForm.Title}
        Detail={wirteForm.Detail}
        IsRecruiting={wirteForm.IsRecruiting}
      />
      <Line />
      <WritingNeedPosition NeedPosition={NewNeedPosistion} />
      <Line />
      <ButtonLayout>
        <Button
          type="button"
          buttontype="largebuttonactive"
          content="업로드"
          disabled={false}
          onClick={() => onSubmit()}
        />
      </ButtonLayout>
    </WritingUploadLayout>
  );
};

// , Navigate("/home")

export default WritingUpload;
