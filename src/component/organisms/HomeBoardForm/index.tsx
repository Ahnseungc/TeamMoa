import Heading from "@atom/Heading";
import Text from "@atom/Text";
import { HomeBoardFormLayout, HomeBoardFormContentLayout } from "./styles";

const HomeBoardForm = () => {
  return (
    <HomeBoardFormLayout>
      <HomeBoardFormContentLayout>
        <div>
          <Heading fontSize="12px" fontWeight="700" color="rgba(0,0,0,1)">
            게시글 제목
          </Heading>
          <Text fontSize="12px" fontWeight="400" color="rgba(0,0,0,1)">
            게시글 맨 처음에 보이는 어쩌고 저쩌고 모집합니다!
          </Text>
        </div>
        <div>해쉬태그포지션</div>
      </HomeBoardFormContentLayout>
      <div>?</div>
    </HomeBoardFormLayout>
  );
};

export default HomeBoardForm;
