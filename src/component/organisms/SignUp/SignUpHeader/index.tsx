import Button from "@atom/Button";
import Text from "@atom/Text";
import { SignUpHeaderLayout } from "./styles";
import { FC } from "react";
import { SignUpPageProps } from "@type/Tb";

const SignUpHeader: FC<SignUpPageProps> = ({ setIndex, pageIndex }) => {
  return (
    <SignUpHeaderLayout>
      <Button
        type="button"
        buttontype="icon"
        icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADaSURBVHgB5ZXNDcIwDIVtYKkQDh2BEZihKlxp71HFBjAKHJpwZAU2gAVqmkrc+uPacEA8qaoSvbxPkWIb4K+1TdNN/IY8cxBql2X75ncAxPXK2mfl/bXLNwOBYjgR5e811fWjz7sAbThR4cry1OdH0IfnQ2fYAEk4GyANZwE04aMAbfggoC0gxKMmPIpdB42RQKDeSvYh3JbWYnPFpN1ATFbGQBXCBT4BaCHen7WQ0V6khbCanQbC7qZSyKR2LYFMngddEGvMPb66Lr9oHjjnckIs4NvijMzf1wsq6J/OkLMYvgAAAABJRU5ErkJggg=="
        disabled={false}
        onClick={() => setIndex(pageIndex - 1)}
      />
      <Text fontSize="20px" fontWeight="400" color="rgba(99, 99, 99, 1)">
        회원 가입
      </Text>
    </SignUpHeaderLayout>
  );
};

export default SignUpHeader;
