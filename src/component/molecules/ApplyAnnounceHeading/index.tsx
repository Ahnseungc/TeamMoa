import Heading from "@atom/Heading";
import Text from "@atom/Text";
import {
  ApplyAnnounceHeadingLayout,
  ApplyAnnounceHeadingTextLayout,
} from "./styles";
import { ApplyAnnounceHeadingProps } from "@type/Tb";
import { FC } from "react";

const ApplyAnnounceHeading: FC<ApplyAnnounceHeadingProps> = ({ title }) => {
  return (
    <ApplyAnnounceHeadingLayout>
      <ApplyAnnounceHeadingTextLayout>
        <Heading fontSize="20px" fontWeight="700" color="rgba(0, 0, 0, 1)">
          공고제목
        </Heading>
        <Text fontSize="20px" fontWeight="700" color="rgba(89, 84, 84, 1)">
          {title}
        </Text>
      </ApplyAnnounceHeadingTextLayout>
    </ApplyAnnounceHeadingLayout>
  );
};

export default ApplyAnnounceHeading;
