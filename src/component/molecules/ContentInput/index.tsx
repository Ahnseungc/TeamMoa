import { FC } from "react";
import { ContentInputType } from "@type/Tb";
import { ContentHeader, ContentInputLayout, ContentLayout } from "./styles";
import Heading from "@atom/Heading";
import Button from "@atom/Button";
import { Axios } from "src/apis/api/axiosFetch";

const ContentInput: FC<ContentInputType> = ({
  contentTitle,
  placeholder,
  value,
  onchange,
  setMessage,
}) => {
  // console.log(value);
  const onSubmit = async () => {
    try {
      const res = await Axios.post("http://59.152.141.225:8000/get-answer", {
        user_input: value,
      });
      setMessage(res.data.answer);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ContentInputLayout contentTitle={contentTitle}>
      <ContentHeader>
        <Heading color="black" fontSize="20px" fontWeight="bold">
          {contentTitle}
        </Heading>
        {contentTitle === "전달메시지" && (
          <Button
            type="button"
            buttontype="gptButton"
            disabled={false}
            onClick={() => onSubmit()}
            content="chatGPT로 글쓰기"
          />
        )}
      </ContentHeader>
      <ContentLayout
        value={value}
        onChange={onchange}
        placeholder={placeholder}
      />
    </ContentInputLayout>
  );
};

export default ContentInput;
