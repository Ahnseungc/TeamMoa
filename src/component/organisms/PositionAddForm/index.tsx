import { StoryFn } from "@storybook/react";
import { NeedPosistionType, PositionAddFormProps } from "@type/Tb";
import {
  PositionAddFormLayout,
  PositionFormContentLayout,
  FormTitle,
} from "./styles";
import PositionInfoInput from "@molecules/PositionInfoInput";
import Button from "@atom/Button";
import Text from "@atom/Text";
import Heading from "@atom/Heading";
import cancelBtn from "@asset/image/icon_cancel.png";
import { ChangeEvent, useState } from "react";

const PositionAddForm: StoryFn<PositionAddFormProps> = ({
  positionCount,
  writeForm,
  onChangeWriteForm,
  setWriteForm,
}) => {
  const titleName = ["포지션명", "필요스킬", "인원수"];

  const [needPosistion, setNeedPosistion] = useState<Array<NeedPosistionType>>(
    []
  );
  const [testList, setTestList] = useState([]);

  const onChangeNeedPosistion = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setNeedPosistion((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
    setWriteForm((prev) => {
      return {
        ...prev,
        NeedPosistion: needPosistion,
      };
    });
  };

  const onClickAdd = () => {
    const newNeedPosition = {
      NeedPosistionName: "",
      NeedPosistionNumber: 0,
      NeedPosistionSkill: "",
    };
    setTestList((prev) => [...prev, newNeedPosition]);
  };
  const onClickDelete = () => {
    setTestList((prev) => prev.slice(0, prev.length - 1));
  };

  return (
    <PositionAddFormLayout>
      <Heading fontSize="20px" fontWeight="700" color="rgba(0,0,0,1)">
        필요 포지션
      </Heading>
      <PositionFormContentLayout>
        <FormTitle>
          {titleName.map((item) => (
            <Text fontSize="16px" fontWeight="400" color="#363636">
              {item}
            </Text>
          ))}
        </FormTitle>

        {testList?.map((NeedPosistion, index) => {
          return (
            <PositionInfoInput
              iptype="text"
              btntype="button"
              buttontype="icon"
              inputtype="website"
              disabled={false}
              readonly={false}
              // id={NeedPosistion}
              id=""
              index={index}
              placeholder=""
              value=""
              error=""
              content=""
              onClick={onClickDelete}
              icon={cancelBtn}
              writeForm={needPosistion}
              onChangeWriteForm={onChangeNeedPosistion}
            />
          );
        })}
      </PositionFormContentLayout>
      <Button
        type="button"
        content="추가하기"
        buttontype={"largeAddbutton"}
        disabled={false}
        onClick={onClickAdd}
      />
    </PositionAddFormLayout>
  );
};

export default PositionAddForm;
