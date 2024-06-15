import { FC } from "react";
import { ApplyPageProps } from "@type/Tb";
import {
  WritingContentLayout,
  HeaderTextLayout,
  ContentText,
  ApplyButtonForm,
} from "./styles";
import Button from "@atom/Button";
import Heading from "@atom/Heading";

const NoticeGuideForm: FC<ApplyPageProps> = ({ setIndex, pageIndex }) => {
  return (
    <WritingContentLayout>
      <HeaderTextLayout>
        <Heading fontSize="20px" fontWeight="400" color="rgba(99, 99, 99, 1)">
          지원하기
        </Heading>
      </HeaderTextLayout>
      <ContentText>
        {`지원하시기 전에 포지션 상세 내용을
          꼼꼼히 확인해 주세요.
          지원 절차는 몇 분 정도 소요될 수 있습니다.
          계속 하시려면 아래 버튼을 눌러주세요.`}
      </ContentText>
      <ApplyButtonForm>
        <Button
          type="button"
          buttontype="largebuttonactive"
          content="네, 확인했어요!"
          disabled={false}
          onClick={() => setIndex(pageIndex + 1)}
        />
        <Button
          type="button"
          buttontype="largebuttondisable"
          content="모집글을 다시 보고 올래요"
          disabled={false}
          onClick={() => setIndex(pageIndex + 1)}
        />
      </ApplyButtonForm>
    </WritingContentLayout>
  );
};

export default NoticeGuideForm;
