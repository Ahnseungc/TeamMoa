import Heading from "@atom/Heading";
import { 
  WrittenPostFormLayout, 
  PostInfoLayout, 
  PostTitle, 
  NeedPositionList,
} from "./styles";
import { StoryFn } from "@storybook/react";
import { PostInfoProps } from "@type/Tb";
import Button from "@atom/Button";
import Text from "@atom/Text";

const WrittenPostForm: StoryFn<PostInfoProps> = ({
  title,
  subtitle,
  iscruiting,
  needposistion
}) => {
  return (
    <WrittenPostFormLayout>
      <div>
        <Heading fontSize={"20"} fontWeight={"700"} color={"rgba(0, 0, 0, 1)"}>
          내가 쓴 게시글
        </Heading>
        <PostInfoLayout>
          <PostTitle>
            <Text fontSize={"20"} fontWeight={"700"} color={"rgba(0, 0, 0, 1)"}>
              {title}
            </Text>
            <Text fontSize={"12"} fontWeight={"400"} color={"rgba(0, 0, 0, 1)"}>
              {subtitle}
            </Text>
          </PostTitle>
          {iscruiting ? (
            <Button 
            type={"button"} 
            buttontype={"posistionbutton"}
            disabled={false}
            content="모집중"
            onClick={() => "d"}/>
          ) : (
            <Button 
            type={"button"} 
            buttontype={"posistioncompletebutton"}
            disabled={false}
            content="모집완료"
            onClick={() => "d"}/>
          )}
        </PostInfoLayout>
        <NeedPositionList>
          {needposistion.map((position, idx) => (
            <Text fontSize={"16"} fontWeight={"700"} color={"rgba(0, 0, 0, 1)"}>
              {`${position.name}(${position.count}) ${idx !== needposistion.length - 1 ? "/" : ""}`}
            </Text>
          ))}   
        </NeedPositionList>
      </div>
    </WrittenPostFormLayout>
  );
};
 
export default WrittenPostForm;
