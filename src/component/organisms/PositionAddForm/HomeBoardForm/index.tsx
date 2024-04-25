import Heading from "@atom/Heading";
import { StoryFn } from "@storybook/react";
import { PositionAddFormProps } from "@type/Tb";
import { PositionAddFormLayout, PositionFormContentLayout, FormTitle } from "./styles";
import PositionInfoInput from "@molecules/PositionInfoInput";
import Button from "@atom/Button";
import Text from "@atom/Text";
import cancelBtn from "@asset/image/icon_cancel.png";

const PositionAddForm: StoryFn<PositionAddFormProps> = ({ positionCount }) => {
  const titleName = ["포지션명", "필요스킬", "인원수"];
  const onClickMenu = () => {
    positionCount++;
  }

  return (
    <PositionAddFormLayout>
      <Heading fontSize="20px" fontWeight="600" color="rgba(0,0,0,1)">
        필요 포지션
      </Heading>
      <PositionFormContentLayout>
        <FormTitle>
          {titleName.map((item) => (
            <Text fontSize="15px" fontWeight="400" color="#363636">
              {item}
            </Text>
          ))} 
        </FormTitle>       
        {[...Array(positionCount)].map((item) => {
          return <PositionInfoInput icon={cancelBtn}/>  
        })}
      </PositionFormContentLayout>
      <Button 
        type="button"
        buttontype="addposition"
        content="추가하기"
        disabled={false}
        onClick={onClickMenu}
      />
    </PositionAddFormLayout>
  );
};

export default PositionAddForm;
