import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  ForwardedRef,
  ReactNode,
  SetStateAction,
} from "react";

export interface InputType {
  placeholder: string;
  readonly: boolean;
  disabled: boolean;
  value: string;
  error: string;
  id: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type: "text" | "password";
  inputtype: "text" | "password" | "website" | "textheader";
  ref?: ForwardedRef<HTMLInputElement>;
  maxlength?: number;
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
    | "largebuttonactive"
    | "posistionbutton"
    | "posistioncompletebutton";
  disabled: boolean;
  content?: string;
  icon?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  size?: string;
}
export interface TextAreaType {
  Areatype: "default" | "bordernone";
  placeholder: string;
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
  animation?: string;
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

export interface ContentInputType {
  contentTitle: string;
  placeholder: string;
  value: string;
  onchange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface PositionAddFormProps {
  positionCount: number;
}

export interface ApplyAnnounceHeadingProps {
  title: string;
}

export interface SelectStackProps {
  position: string;
  stack: Array<string>;
  count: number;
}

export interface StackSelectFormProps {
  stackList: Array<SelectStackProps>;
  applyStatus: boolean;
}

export interface ContentCheckFormProps {
  name: string;
  temp: number;
  callNumber: string;
  kakaoId: string;
  applyStatus: boolean;
}

export interface HomeBannerProps {
  isactive: boolean;
  onclick: () => void;
}
export interface PosistionArrayType {
  name: string;
  count: number;
}
export interface PosistionType {
  count: number;
  name: string;
  PosistionType: "default" | "HomePosistion" | "MyPagePosistion";
}

export interface HomeMainProps {
  name: string;
  position: string;
  title: string;
  date: string;
  iscruiting: boolean;
  subtitle: string;
  needposistion: Array<PosistionArrayType>;
}

export interface HomeBoardData {
  BoardData: Array<HomeMainProps>;
  setIsActive?: Dispatch<SetStateAction<boolean>>;
  isActive?: boolean;
}

export interface SearchFormData {
  BoardData?: Array<HomeMainProps>;
}

export interface PostInfoProps {
  title: string;
  subtitle: string;
  iscruiting: boolean;
  needposistion: Array<PosistionArrayType>;
}

export interface PostInfoData {
  PostInfo: Array<PostInfoProps>;
  BoardData: Array<HomeMainProps>;
}

export interface UserStackData {
  userstack: Array<string>;
}

export interface ProjectInfoProps {
  projectinfo: Array<number>;
}

export interface UserInfoProps {
  name: string;
  major: string;
  studentnumber: number;
  temp: number;
  schoolName: string;
}

export interface LoginProps {
  onclick: () => void;
}

export interface SignUpPageProps {
  setIndex: Dispatch<SetStateAction<number>>;
  pageIndex: number;
  name?: string;
  onchange?: ChangeEventHandler<HTMLInputElement>;
  school?: string;
  major?: setMajorProps;
}

export interface setMajorProps {
  StudentID: string;
  DoubleMajor: string;
}

export interface EvaluationHeaderProps {
  content: string;
}

export interface EvaluationFormProps {
  title: string;
  postionName: string;
  name: string;
  schoolName: string;
  schoolNum: string;
}

export interface AlarmInfoFormProps {
  title: string;
  content: string;
  status: string;
}

export interface AlarmData {
  AlarmDatas: Array<AlarmInfoFormProps>;
}

export interface ApplyPageProps {
  setIndex: Dispatch<SetStateAction<number>>;
  pageIndex: number;
}

export interface SearchFormProps {
  BoardData: Array<HomeMainProps>;
}

export interface MemberEvaluationFormProps {
  title: string;
  postionName: string;
  name: string;
  framework: Array<string>;
}

export interface EvaluationItemProps {
  category: string;
}