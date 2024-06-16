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
import Button from "@atom/Button";

const WritingBoardForm: FC<WritingBoardFormProps> = ({
  src,
  userName,
  userPosition,
  writedDate,
  Title,
  Detail,
  IsRecruiting,
  WebSiteUri,
}) => {
  return (
    <WritingBoardFormLayouts>
      <div>
        <WritingHeader>
          <Heading fontSize="20px" fontWeight="700" color="rgba(0,0,0,1)">
            {Title}
          </Heading>
          <Button
            type="button"
            buttontype="posistionbutton"
            content="모집중"
            disabled={false}
            onClick={() => "d"}
          />
        </WritingHeader>
        <ApplyUserForm
          src={src}
          size="11px"
          color="rgba(0, 0, 0, 1)"
          userName={userName}
          userPosition={userPosition}
          iconSize="38"
          fontWeight="400"
        />
        <WritingParagraph>
          <Text fontSize="16px" fontWeight="400" color="rgba(0,0,0,1)">
            {Detail}
          </Text>
        </WritingParagraph>
      </div>
      <WritingFooter>
        <Text fontSize="15px" fontWeight="350" color="rgba(99, 99, 99, 1)">
          {`프로젝트 마감일자: ${writedDate}`}
        </Text>
        <Text fontSize="15px" fontWeight="350" color="rgba(99, 99, 99, 1)">
          {`공모전 웹사이트: ${WebSiteUri}`}
        </Text>
      </WritingFooter>
    </WritingBoardFormLayouts>
  );
};

export default WritingBoardForm;
