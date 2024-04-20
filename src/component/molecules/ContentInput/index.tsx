import { FC } from "react";
import TextArea from "../../atom/TextArea";
import { TextAreaType } from "../../../type/Tb";
import { ContentHeader, ContentInputLayout, ContentText } from "./styles";

export interface ContentInputType extends TextAreaType {
  contentTitle: string;
}

const ContentInput: FC<ContentInputType> = ({
  contentTitle,
  Areatype,
  placeholder,
}) => {
  return (
    <ContentInputLayout>
      <ContentHeader>
        <ContentText>{contentTitle}</ContentText>
      </ContentHeader>
      <TextArea Areatype={Areatype} placeholder={placeholder}/>
    </ContentInputLayout>
  );
};

export default ContentInput;