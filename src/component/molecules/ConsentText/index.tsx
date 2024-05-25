import { StoryFn } from "@storybook/react";
import { 
  ConsentTextLayout,
  ConsentItemLayout,
  CheckBox
 } from "./styles";
import Text from "@atom/Text";
import { useState } from "react";

const ConsentText: StoryFn = () => {
  const consentList = ["지원 내용을 확인하였습니다.", "지원서가 확인되었을 때 알림을 받겠습니다."];
  const [isChecked, setIsChecked] = useState<boolean[]>(Array(consentList.length).fill(false));

  const onClick = (index: number) => {
    const newChecked = [...isChecked];
    newChecked[index] = !newChecked[index];
    setIsChecked(newChecked);
  }

  return (
    <ConsentTextLayout>
      {consentList.map((item, idx) => (
        <ConsentItemLayout>
          <CheckBox onClick={() => onClick(idx)} isChecked={isChecked[idx]}> ✓ </CheckBox>
          <Text fontSize={"11px"} fontWeight={"400"} color={"rgba(176, 176, 176, 1)"}>
            {item}
          </Text>
          {idx === 0 && <div>*</div>}
      </ConsentItemLayout>
      ))}
    </ConsentTextLayout>
  );
};

export default ConsentText;
