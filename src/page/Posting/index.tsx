import Heading from "@atom/Heading";
import { PostingHeader } from "./styles";
import WritingBoardForm from "@organisms/WritingBoardForm";
import WritingNeedPosition from "@organisms/WritingNeedPosition";
import { Line } from "@templates/ApplyInputForm/styles";
import ApplyStatistics from "@organisms/ApplyStatistics";

const Posting = () => {
  const NeedPosition = [
    {
      needTitle: "프론트",
      needCount: 2,
      needFramework: ["React", "Next"],
    },
    {
      needTitle: "백",
      needCount: 1,
      needFramework: ["Spring"],
    },
    {
      needTitle: "디자인",
      needCount: 1,
      needFramework: ["Figma"],
    },
  ];
  return (
    <div>
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
        userName="홍길동"
        userPosition="프론트"
        iconSize="38px"
        writedDate="0000년 00월 00일"
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
      <WritingNeedPosition NeedPosition={NeedPosition} />
      <Line />
      <ApplyStatistics />
    </div>
  );
};

export default Posting;
