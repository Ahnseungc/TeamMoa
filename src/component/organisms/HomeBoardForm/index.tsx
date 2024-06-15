import Heading from "@atom/Heading";
import Text from "@atom/Text";
import {
  HomeBoardFormLayout,
  HomeBoardFormContentLayout,
  HomeBoardFormContentHeader,
  HomeBoardHeaderTiteName,
  HomeBoardHeaderBody,
  HomeBannerFooter,
} from "./styles";
import { HomeMainProps } from "@type/Tb";
import { FC } from "react";
import Button from "@atom/Button";
import PosistionIcon from "@atom/PosistionIcon";

const HomeBoardForm: FC<HomeMainProps> = ({
  name,
  position,
  title,
  date,
  iscruiting,
  subtitle,
  needposistion,
  onclick,
}) => {
  return (
    <HomeBoardFormLayout onClick={onclick}>
      <HomeBoardFormContentLayout>
        <HomeBoardFormContentHeader>
          <HomeBoardHeaderTiteName>
            <Heading fontSize="16px" fontWeight="700" color="rgba(0,0,0,1)">
              {title}
            </Heading>
            <div>
              <Text fontSize="11px" fontWeight="400" color="rgba(0,0,0,1)">
                {`${name}(${position})`}
              </Text>
              <Text
                fontSize="11px"
                fontWeight="400"
                color="rgba(217, 217, 217, 1)"
              >
                {date}
              </Text>
            </div>
          </HomeBoardHeaderTiteName>
          {iscruiting ? (
            <Button
              type={"button"}
              buttontype={"posistionbutton"}
              disabled={true}
              content="모집중"
              onClick={() => null}
            />
          ) : (
            <Button
              type={"button"}
              buttontype={"posistioncompletebutton"}
              disabled={true}
              content="모집완료"
              onClick={() => null}
            />
          )}
        </HomeBoardFormContentHeader>
        <HomeBoardHeaderBody>
          <Text fontSize="16px" fontWeight="400" color="rgba(0, 0, 0, 1)">
            {subtitle}
          </Text>
        </HomeBoardHeaderBody>
        <HomeBannerFooter>
          {needposistion.map((posistion) => {
            return (
              <PosistionIcon
                count={posistion.count}
                name={posistion.name}
                PosistionType={"HomePosistion"}
              />
            );
          })}
        </HomeBannerFooter>
      </HomeBoardFormContentLayout>
    </HomeBoardFormLayout>
  );
};

export default HomeBoardForm;
