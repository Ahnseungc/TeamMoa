import { FunctionComponent } from "react";
import { PosistionIconLayout } from "./styles";
import { PosistionType } from "@type/Tb";

const PosistionIcon: FunctionComponent<PosistionType> = ({
  name,
  PosistionType,
  count,
}) => {
  return (
    <PosistionIconLayout PosistionType={PosistionType}>
      {PosistionType === "HomePosistion" ? (
        <h3>{`${name}(${count})`}</h3>
      ) : (
        <h3>{name}</h3>
      )}
    </PosistionIconLayout>
  );
};

export default PosistionIcon;
