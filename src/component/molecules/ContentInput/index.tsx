import { FC } from "react";
import TextArea from "@atom/TextArea";
import { TextAreaType } from "@type/Tb";
import { ContentHeader, ContentInputLayout } from "./styles";
import Heading from "@atom/Heading";

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
        <Heading color="black" fontSize="20px" fontWeight="bold">
          {contentTitle}
        </Heading>
      </ContentHeader>
      <TextArea Areatype={Areatype} placeholder={placeholder} />
    </ContentInputLayout>
  );
};

export default ContentInput;
