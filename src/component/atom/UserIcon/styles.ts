import styled from "styled-components";
import { UserIconProps } from "@type/Tb";

export const UserIconLayout = styled.img<UserIconProps>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border-radius: 50%;
  background-color: rgba(217, 217, 217, 1);
`;
