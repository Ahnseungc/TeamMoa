import { 
  UserStackFormLayout, 
  StackListLayout, 
  ButtonLayout, 
} from "./styles";
import { UserStackData } from "@type/Tb";
import { StoryFn } from "@storybook/react";
import Heading from "@atom/Heading";
import Text from "@atom/Text";
import PosistionIcon from "@atom/PosistionIcon";

const UserStackForm: StoryFn<UserStackData> = ({
  userstack
}) => {
  return (
    <UserStackFormLayout>
      <div>
        <Heading fontSize={"20"} fontWeight={"700"} color={"#595454"}>
          내 스택
        </Heading>
        <StackListLayout>
          {userstack.map((stack) => (
            <PosistionIcon name={stack} PosistionType={"default"} count={1}/>
          ))}
          <ButtonLayout>
            <Text fontSize={"20"} fontWeight={"700"} color={"black"}> + </Text>
          </ButtonLayout>
        </StackListLayout>
      </div>
    </UserStackFormLayout>
  );
};

export default UserStackForm;
