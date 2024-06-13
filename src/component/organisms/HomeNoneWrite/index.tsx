import { HomeNoneWriteLayout, HomeNoneWriteImg } from "./styles";
import Text from "@atom/Text";

const HomeNoneWrite = () => {
  return (
    <HomeNoneWriteLayout className="homeBannerNone">
      <HomeNoneWriteImg src="/Home_none.png" alt="/" />
      <Text
        fontSize={"16px"}
        fontWeight={"400"}
        color={"rgba(176, 176, 176, 1)"}
      >
        글을 맨 첫번째로 작성해보세요
      </Text>
    </HomeNoneWriteLayout>
  );
};

export default HomeNoneWrite;
