import { StoryFn } from "@storybook/react";
import { ButtonType } from "@type/Tb";
import Button from "./index";
import BackIcon from "@asset/image/icon_back.png";
import CancelIcon from "@asset/image/icon_cancel.png";
import SearchIcon from "@asset/image/icon_search.png";

export default {
  title: "Atom/Button",
  component: Button,
};

const Template: StoryFn<ButtonType> = (args: any) => <Button {...args} />;

export const BottomBtn = Template.bind({});

BottomBtn.args = {
  type: "button",
  buttontype: "largebutton",
  content: "버튼",
};

export const SmallBtn = Template.bind({});

SmallBtn.args = {
  type: "button",
  buttontype: "smallbutton",
  content: "회원정보수정",
};

export const middleBtn = Template.bind({});

middleBtn.args = {
  type: "button",
  buttontype: "middlebutton",
  content: "로그인",
};

export const AddPositionBtn = Template.bind({});

AddPositionBtn.args = {
  type: "button",
  buttontype: "addposition",
  content: "추가하기",
};

export const TextBtn = Template.bind({});

TextBtn.args = {
  type: "button",
  buttontype: "text",
  content: "회원가입",
};

export const BackBtn = Template.bind({});

BackBtn.args = {
  type: "button",
  buttontype: "icon",
  icon: BackIcon,
};

export const CancelBtn = Template.bind({});

CancelBtn.args = {
  type: "button",
  buttontype: "icon",
  icon: CancelIcon,
};

export const SearchBtn = Template.bind({});

SearchBtn.args = {
  type: "button",
  buttontype: "icon",
  icon: SearchIcon,
};

export const PosistionBtn = Template.bind({});

PosistionBtn.args = {
  type: "button",
  buttontype: "posistionbutton",
  content: "모집중",
};

export const PosistionCompleteBtn = Template.bind({});

PosistionCompleteBtn.args = {
  type: "button",
  buttontype: "posistioncompletebutton",
  content: "모집완료",
};
