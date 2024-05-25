import Heading from "@atom/Heading";
import { AlarmHeader } from "./styles";
import AlarmInfoList from "@organisms/AlarmInfoList";
import { FC } from "react";
import { AlarmData } from "@type/Tb";

const Alarm: FC<AlarmData> = ({ AlarmDatas }) => {
  return (
    <div>
      <AlarmHeader>
        <Heading
          fontSize={"20px"}
          fontWeight={"400"}
          color={"rgba(99, 99, 99, 1)"}
        >
          알림
        </Heading>
      </AlarmHeader>
      <div>
        <AlarmInfoList AlarmDatas={AlarmDatas} />
      </div>
    </div>
  );
};

export default Alarm;
