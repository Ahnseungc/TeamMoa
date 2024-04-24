import {
  WritingBoardFormLayouts,
  WritingParagraph,
  WritingHeader,
  WritingFooter,
} from "./styles";
import ApplyUserForm from "@molecules/WritingUserForm";
import { WritingBoardFormProps } from "@type/Tb";
import { FC } from "react";
import Text from "@atom/Text";
import Heading from "@atom/Heading";

const WritingBoardForm: FC<WritingBoardFormProps> = ({
  src,
  userName,
  userPosition,
  writedDate,
}) => {
  return (
    <WritingBoardFormLayouts>
      <div>
        <WritingHeader>
          <Heading fontSize="30px" fontWeight="700" color="rgba(0,0,0,1)">
            제목
          </Heading>
          <div>?</div>
        </WritingHeader>
        <ApplyUserForm
          src={src}
          size="20px"
          color="rgba(89, 84, 84, 1)"
          userName={userName}
          userPosition={userPosition}
          iconSize="38"
          fontWeight="700"
        />
        <WritingParagraph>
          <Text fontSize="30px" fontWeight="700" color="rgba(89, 84, 84, 1)">
            글내용글내용글내용길게 쓰여진 글
          </Text>
        </WritingParagraph>
      </div>
      <WritingFooter>
        <Text fontSize="16px" fontWeight="700" color="rgba(89, 84, 84, 1)">
          {`프로젝트 마감일자: ${writedDate}`}
        </Text>
      </WritingFooter>
    </WritingBoardFormLayouts>
  );
};

export default WritingBoardForm;
