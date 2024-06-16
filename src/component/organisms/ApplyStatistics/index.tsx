import Heading from "@atom/Heading";
import { WritingBoardFormLayouts, WritingHeader, BarLine } from "./styles";
import Button from "@atom/Button";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
} from "recharts";
import { useNavigate } from "react-router-dom";

const ApplyStatistics = () => {
  const data = [
    { name: "Page A", uv: 4, pv: 4, amt: 2400 },
    { name: "Page B", uv: 3, pv: 3, amt: 2210 },
    { name: "Page C", uv: 1, pv: 3, amt: 2290 },
  ];
  return (
    <WritingBoardFormLayouts>
      <WritingHeader>
        <Heading fontSize="20px" fontWeight="600" color="rgba(0,0,0,1)">
          지원자 통계
        </Heading>
      </WritingHeader>

      <ComposedChart
        width={329}
        height={226}
        data={data}
        margin={{
          bottom: 70,
          top: 10,
        }}
      >
        <XAxis dataKey="name" tick={false} />
        <Tooltip />

        <Bar
          dataKey="pv"
          barSize={25}
          fill="rgba(217, 74, 86, 1)"
          label={{
            position: "insideTop",
            fill: "#fff",
            fontSize: "11px",
            fontWeight: "400",

            formatter: (value) => `${value}명`,
          }}
        />
      </ComposedChart>
    </WritingBoardFormLayouts>
  );
};

export default ApplyStatistics;
