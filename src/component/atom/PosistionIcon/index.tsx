import { FunctionComponent } from "react";
import { PosistionIconLayout } from "./styles";
import { PosistionType } from "@type/Tb";

const PosistionIcon: FunctionComponent<PosistionType> = ({ text }) => {
  return (
    <PosistionIconLayout PosistionType="default">
      <h3>{text}</h3>
    </PosistionIconLayout>
  );
};

export default PosistionIcon;
