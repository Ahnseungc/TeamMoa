import { UserStackFormLayout, StackListLayout, ButtonLayout } from "./styles";
import { UserStackData } from "@type/Tb";

import Heading from "@atom/Heading";
import Text from "@atom/Text";
import PosistionIcon from "@atom/PosistionIcon";
import { FC } from "react";

const UserStackForm: FC<UserStackData> = ({ userstack, setSkill }) => {
  return (
    <UserStackFormLayout>
      <div>
        <Heading fontSize={"20"} fontWeight={"600"} color={"rgba(0, 0, 0, 1)"}>
          내 스택
        </Heading>
        <StackListLayout>
          {userstack?.map((stack) => (
            <PosistionIcon
              name={stack}
              PosistionType={"MyPagePosistion"}
              count={1}
            />
          ))}
          <ButtonLayout onClick={setSkill}>
            <Text
              fontSize={"12px"}
              fontWeight={"400"}
              color={"rgba(104, 118, 132, 1)"}
            >
              {" "}
              +{" "}
            </Text>
          </ButtonLayout>
        </StackListLayout>
      </div>
    </UserStackFormLayout>
  );
};

export default UserStackForm;
