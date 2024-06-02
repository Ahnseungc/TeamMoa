import { ChangeEvent, useState } from "react";
import { StoryFn } from "@storybook/react";
import {
  SearchFormLayout,
  Header,
  InputLayout,
  SearchResultLayout,
  SearchIcon
} from "./styles";
import Button from "@atom/Button";
import Text from "@atom/Text";
import { useNavigate } from "react-router-dom";

const SearchForm: StoryFn = () => {
  const [content, setContent] = useState<String>("");
  const Navigate = useNavigate();

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <SearchFormLayout>
      <Header>
        <Button
            type={"button"}
            buttontype={"icon"}
            icon={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQKSURBVHgB7Vldcts2EN4FJdudvvgI6gninCDyCeKcwPJDp+5T/GJnpq0bumk6E2c6Vp+qTh+snKDOCaqcIOoJytwgL0kUScBmQVsJAYIk+CONM/H3JIJa7H7AYrG7BLjBDb5sINTE/oOwQ6p9F0FtAYouAW3ypJv6HQG8FgAR/4wU4QjF7PngSRhBg6hMYP/wlx6A2OUZuiXEtMIxy/X/PP3hGTSA0gT2HzzqAolzXt8O1AJFCEFYl4g3gYODcPPdWushCxxAg2A36381nZ/0++FrqAAvAtrPkVr/sLItcFsxIsALBfDi69ksWhijSU+CYIuEuIVAO9nuRhGg3K5yPgoJaOOB2v86XQZpCCBPfBVfztUK+edu+m01ErkE4hVca79MG0+RJHHv76c/jqECshZFH/D16Xy7jDuJvJfa5x0r/2xjKm9XNV5Dr/JkOrvNLnmRHNcueqnTH5k7EIdJ1NHGUHDx1+lP96BB7B/9OgTbpSRtD34/HvnIZ+8ABtZKUMTRYg8axmQ656iGkTEYwLmvvJPA5SVluQ4fsKqhLg9DnlMSWLuKne+Pftv1kXcSIBD3zflo2HQKkMTVeTIuNCLV85FNEYhjPtrxXp7AsoHz0HyGbhytCpAioGRrxxjgS2qZq79ArIN1JccUWbY4kCIQCLhjTILwHFYERaYugXSrSEY4JukYf5BUOd6XRQtxZAxQcaabPsRoEtiQcmUE3nIelXzm/GqzSCZFYFGMLLCM0JmFoaXLtsUFAZ85UgR0GZh81gkdrAg9S5dtiwsOF0JD6E273YEVYWM9sOuNqEjG4ULqRfIJkbqwIiiJBgEkeFUkkw6jCo2oIwjuwoog0NTFd9CoUCY1EMyNHN33Sq+LWIdVcgq0bHEgRcB1pYMKShUZlSBbYfKRD/DYJ4XJCKPKbHUg9r49fOwu6BtAvPrCLGoE9458ZLMrsqPH/5s1AUW6lGz6YnPX3RQNTo+/8ZHPvsiksqov7EzawRk0DK6Bz9PFfRB6iud3Jb47fNRHxPuWwAV3Dvbq7kS88uvtM65cesYLpD8GT469m2e5qcT7mQyJwAirfLh2JmvByzqRSZ+n2G1s40Fnw1Z9XIB6jS3ixpYo2djS0UbAbr5RoufbM/VuLWaS0LhqLaJQ/228l+Nka1GnIrzNd/Jbi1CZhHdzVyda6+0gtM9EbbDPo8SIBJyljSsmUb69Hje8godNtNdBwt6igeVqpF0amE+i1gcO3X5JdzAKwO6GKIYuo6qQqEzgo9KrT0ygs1ZdT3NJmvzEFKfnpPiMiDHO+BNTP//AlyVRm8AyUIbEtSwpB09/HvKupfqwClQqP7q2NbGLBIfi1O1/rYv6TyQ4zOr6mMTyW5w3uMFnhg/YPcnDOIJd6AAAAABJRU5ErkJggg=="}
            disabled={false}
            onClick={() => null}
        />
        <InputLayout placeholder={"검색어를 입력하세요"} />
        <Button 
          type={"button"}
          buttontype={"text"}
          disabled={false}
          content={"취소"}
          onClick={() => Navigate("/home")}
        />
      </Header>
      <SearchResultLayout>
        <SearchIcon src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQKSURBVHgB7Vldcts2EN4FJdudvvgI6gninCDyCeKcwPJDp+5T/GJnpq0bumk6E2c6Vp+qTh+snKDOCaqcIOoJytwgL0kUScBmQVsJAYIk+CONM/H3JIJa7H7AYrG7BLjBDb5sINTE/oOwQ6p9F0FtAYouAW3ypJv6HQG8FgAR/4wU4QjF7PngSRhBg6hMYP/wlx6A2OUZuiXEtMIxy/X/PP3hGTSA0gT2HzzqAolzXt8O1AJFCEFYl4g3gYODcPPdWushCxxAg2A36381nZ/0++FrqAAvAtrPkVr/sLItcFsxIsALBfDi69ksWhijSU+CYIuEuIVAO9nuRhGg3K5yPgoJaOOB2v86XQZpCCBPfBVfztUK+edu+m01ErkE4hVca79MG0+RJHHv76c/jqECshZFH/D16Xy7jDuJvJfa5x0r/2xjKm9XNV5Dr/JkOrvNLnmRHNcueqnTH5k7EIdJ1NHGUHDx1+lP96BB7B/9OgTbpSRtD34/HvnIZ+8ABtZKUMTRYg8axmQ656iGkTEYwLmvvJPA5SVluQ4fsKqhLg9DnlMSWLuKne+Pftv1kXcSIBD3zflo2HQKkMTVeTIuNCLV85FNEYhjPtrxXp7AsoHz0HyGbhytCpAioGRrxxjgS2qZq79ArIN1JccUWbY4kCIQCLhjTILwHFYERaYugXSrSEY4JukYf5BUOd6XRQtxZAxQcaabPsRoEtiQcmUE3nIelXzm/GqzSCZFYFGMLLCM0JmFoaXLtsUFAZ85UgR0GZh81gkdrAg9S5dtiwsOF0JD6E273YEVYWM9sOuNqEjG4ULqRfIJkbqwIiiJBgEkeFUkkw6jCo2oIwjuwoog0NTFd9CoUCY1EMyNHN33Sq+LWIdVcgq0bHEgRcB1pYMKShUZlSBbYfKRD/DYJ4XJCKPKbHUg9r49fOwu6BtAvPrCLGoE9458ZLMrsqPH/5s1AUW6lGz6YnPX3RQNTo+/8ZHPvsiksqov7EzawRk0DK6Bz9PFfRB6iud3Jb47fNRHxPuWwAV3Dvbq7kS88uvtM65cesYLpD8GT469m2e5qcT7mQyJwAirfLh2JmvByzqRSZ+n2G1s40Fnw1Z9XIB6jS3ixpYo2djS0UbAbr5RoufbM/VuLWaS0LhqLaJQ/228l+Nka1GnIrzNd/Jbi1CZhHdzVyda6+0gtM9EbbDPo8SIBJyljSsmUb69Hje8godNtNdBwt6igeVqpF0amE+i1gcO3X5JdzAKwO6GKIYuo6qQqEzgo9KrT0ygs1ZdT3NJmvzEFKfnpPiMiDHO+BNTP//AlyVRm8AyUIbEtSwpB09/HvKupfqwClQqP7q2NbGLBIfi1O1/rYv6TyQ4zOr6mMTyW5w3uMFnhg/YPcnDOIJd6AAAAABJRU5ErkJggg=="}/>
        <Text fontSize={"16px"} fontWeight={"700"} color={"rgba(176, 176, 176, 1)"}>
          게시판의 글을 검색해보세요
        </Text>
      </SearchResultLayout>
    </SearchFormLayout>
  );
};

export default SearchForm;
