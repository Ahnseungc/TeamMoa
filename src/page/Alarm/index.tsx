import Alarm from "@templates/Alarm";

const mockdata = [
  {
    title: "김성우 교수님 HCI 팀원 모집합니다.",
    content: "프론트엔드 지원자가 왔습니다.",
    icon: "/",
  },
  {
    title: "김성우 교수님 HCI 팀원 모집합니다.",
    content: "팀원 평가할 시기가 왔어요.",
    icon: "/",
  },
  {
    title: "김성우 교수님 HCI 팀원 모집합니다.",
    content: "00님이 지원서를 확인헀어요.",
    icon: "/",
  },
];

const AlarmPage = () => {
  return <Alarm AlarmDatas={mockdata} />;
};

export default AlarmPage;
