import { FC, useState } from "react";
import { 
  EvaluationItemLayout,
  ScoreEvaluationLayout,
  Line,
  ScorePoint
 } from "./style";
import { EvaluationItemProps } from "@type/Tb";
import Text from "@atom/Text";

const EvaluationItem: FC<EvaluationItemProps> = ({
  category
}) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(2);

  const handleClick = (idx: number) => {
    setSelectedIdx(idx);
  };

  return (
    <EvaluationItemLayout>
      <div>
        <Text fontSize={"16px"} fontWeight={"700"} color={"rgba(0, 0, 0, 1)"}>
          해당 팀원의 {" "}
            <Text fontSize={"16px"} fontWeight={"700"} color={"rgba(217, 74, 86, 1)"}>
              {category}
            </Text>
          은 어땠나요?
        </Text>
      </div>
      <div>
        <ScoreEvaluationLayout>
          {Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} onClick={() => handleClick(idx)}>
              <Line/>
              {(idx === 0 || idx === 4) && (
                <Text fontSize={"11px"} fontWeight={"400"} color={"rgba(176, 176, 176, 1)"}>
                  {idx === 0 ? "1점" : "5점"}
                </Text>
              )}
              {selectedIdx === idx && <ScorePoint/>}
            </div>
            ))}
        </ScoreEvaluationLayout>
      </div>
    </EvaluationItemLayout>
  );
};

export default EvaluationItem;
