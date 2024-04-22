import {
  ApplyBoardFormLayouts,
  ApplyParagraph,
  ApplyHeader,
  ApplyFooter,
} from "./styles";
import ApplyUserForm from "@molecules/ApplyUserForm";
import { ApplyBoardFormProps } from "@type/Tb";
import { FC } from "react";
import Text from "@atom/Text";
import Heading from "@atom/Heading";

const ApplyBoardForm: FC<ApplyBoardFormProps> = ({
  src,
  userName,
  userPosition,
  writedDate,
}) => {
  return (
    <ApplyBoardFormLayouts>
      <div>
        <ApplyHeader>
          <Heading fontSize="30px" fontWeight="700" color="rgba(0,0,0,1)">
            제목
          </Heading>
          <div>?</div>
        </ApplyHeader>
        <ApplyUserForm
          src={src}
          size="20px"
          color="rgba(89, 84, 84, 1)"
          userName={userName}
          userPosition={userPosition}
          iconSize="38"
          fontWeight="700"
        />
        <ApplyParagraph>
          <Text fontSize="30px" fontWeight="700" color="rgba(89, 84, 84, 1)">
            글내용글내용글내용길게 쓰여진 글
          </Text>
        </ApplyParagraph>
      </div>
      <ApplyFooter>
        <Text fontSize="16px" fontWeight="700" color="rgba(89, 84, 84, 1)">
          {`프로젝트 마감일자: ${writedDate}`}
        </Text>
      </ApplyFooter>
    </ApplyBoardFormLayouts>
  );
};

export default ApplyBoardForm;
