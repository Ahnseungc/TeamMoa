import { FC } from "react";
import TextArea from "@atom/TextArea";
import { TextAreaType } from "@type/Tb";
import { ContentHeader, ContentInputLayout } from "./styles";
import Text from "@atom/Text";

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
        <Text color="black" fontSize="20px" fontWeight="bold">
          {contentTitle}
        </Text>
      </ContentHeader>
      <TextArea Areatype={Areatype} placeholder={placeholder} />
    </ContentInputLayout>
  );
};

export default ContentInput;
