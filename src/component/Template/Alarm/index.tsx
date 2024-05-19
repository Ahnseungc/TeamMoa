import Heading from "@atom/Heading";
import { AlarmHeader } from "./styles";

const Alarm = () => {
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
    </div>
  );
};

export default Alarm;
