import Text from "@atom/Text";
import { ApplyAnnounceHeadingLayout } from "./styles";
import { ApplyAnnounceHeadingProps } from "@type/Tb";
import { FC } from "react";

const ApplyAnnounceHeading: FC<ApplyAnnounceHeadingProps> = ({ title }) => {
  return (
    <ApplyAnnounceHeadingLayout>
      <Text fontSize="20px" fontWeight="700" color="rgba(0, 0, 0, 1)">
        {title}
      </Text>
    </ApplyAnnounceHeadingLayout>
  );
};

export default ApplyAnnounceHeading;