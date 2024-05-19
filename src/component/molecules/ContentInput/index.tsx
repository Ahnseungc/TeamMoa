import { FC } from "react";
import { ContentInputType } from "@type/Tb";
import { ContentHeader, ContentInputLayout, ContentLayout } from "./styles";
import Heading from "@atom/Heading";
import Button from "@atom/Button";

const ContentInput: FC<ContentInputType> = ({
  contentTitle,
  placeholder,
  value,
  onchange,
}) => {
  return (
    <ContentInputLayout>
      <ContentHeader>
        <Heading color="black" fontSize="20px" fontWeight="bold">
          {contentTitle}
        </Heading>
        {(contentTitle === "전달메시지") && (
          <Button
            type="button"
            buttontype="posistionbutton"
            disabled={false}
            onClick={() => ""}
            content="chatGPT로 글쓰기"
          />
        )}
      </ContentHeader>
      <ContentLayout 
        value={value}
        onChange={onchange}
        placeholder={placeholder}/>
    </ContentInputLayout>
  );
};

export default ContentInput;
