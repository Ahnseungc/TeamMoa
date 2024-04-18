import { FunctionComponent } from "react";
import { PosistionIconLayout } from "./styles";
import { PosistionType } from "../../../type/Tb";

const PosistionIcon: FunctionComponent<PosistionType> = ({ text }) => {
  return (
    <PosistionIconLayout PosistionType="default">
      <span>{text}</span>
    </PosistionIconLayout>
  );
};

export default PosistionIcon;
