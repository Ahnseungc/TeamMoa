import { ReactNode } from "react";

export interface InputType {
  placeholder: string;
  readonly: boolean;
  disabled: boolean;
  value: string;
  error: string;
  id: string;
  type: "text" | "password";
  inputtype: "text" | "password" | "website" | "textheader";
}

export interface ButtonType {
  type: "submit" | "button" | undefined;
  buttontype:
    | "text"
    | "icon"
    | "largebutton"
    | "addposition"
    | "middlebutton"
    | "smallbutton"
    | "largebuttonactive";
  disabled: boolean;
  content?: string;
  icon?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
export interface TextAreaType {
  Areatype: "default" | "bordernone";
  placeholder: string;
}

export interface PosistionType {
  text: string;
}

export interface BannerType {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

export interface UserIconProps {
  size: string;
}

export interface WritingUserFormProps {
  src: string;
  size: string;
  userName: string;
  userPosition: string;
  iconSize: string;
  fontWeight: string;
  color: string;
}

export interface TextProps {
  fontSize: string;
  fontWeight: string;
  color: string;
  children: ReactNode;
}

export interface WritingBoardFormProps extends WritingUserFormProps, TextProps {
  headingSize: string;
  headingColor: string;
  headingWeight: string;
  textColor: string;
  textSize: string;
  writedDate: string;
}

export interface EachPosition {
  needTitle: string;
  needCount: number;
  needFramework: Array<string>;
}

export interface WritingNeedPositionProps {
  NeedPosition: Array<EachPosition>;
}

export interface PositionAddFormProps {
  positionCount: number;
}

export interface ApplyAnnounceHeadingProps {
  title: string;
}

export interface SelectStackProps {
  src: string;
  position: string;
  stack: Array<string>;
}

export interface StackSelectFormProps {
  StackList: Array<SelectStackProps>;
}

export interface ContentCheckFormProps {
  name: string;
  temp: number;
  callNumber: string;
  kakaoId: string;
}
