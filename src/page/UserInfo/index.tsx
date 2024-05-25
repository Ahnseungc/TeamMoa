import UserInfo from "@templates/Mypage/UserProfile";

const dummy = [
  {
    name: "홍길동",
    position: "프론트엔드",
    title: "김성우 교수님 HCI 프로젝트 모집",
    date: "2024-05-03",
    iscruiting: true,
    subtitle:
      "팀원을 모으는 서비스를 주제로 HCI수업에서 함께할학우를 찾습니다!",
    needposistion: [
      {
        count: 2,
        name: "프론트엔드",
      },
      {
        count: 1,
        name: "백엔드",
      },
      {
        count: 1,
        name: "기획",
      },
    ],
  },
  {
    name: "홍길동",
    position: "프론트엔드",
    title: "김성우 교수님 HCI 프로젝트 모집",
    date: "2024-05-03",
    iscruiting: true,
    subtitle:
      "팀원을 모으는 서비스를 주제로 HCI수업에서 함께할학우를 찾습니다!",
    needposistion: [
      {
        count: 2,
        name: "프론트엔드",
      },
      {
        count: 1,
        name: "백엔드",
      },
      {
        count: 1,
        name: "기획",
      },
    ],
  },
  {
    name: "홍길동",
    position: "프론트엔드",
    title: "김성우 교수님 HCI 프로젝트 모집",
    date: "2024-05-03",
    iscruiting: true,
    subtitle:
      "팀원을 모으는 서비스를 주제로 HCI수업에서 함께할학우를 찾습니다!",
    needposistion: [
      {
        count: 2,
        name: "프론트엔드",
      },
      {
        count: 1,
        name: "백엔드",
      },
      {
        count: 1,
        name: "기획",
      },
    ],
  },
  {
    name: "홍길동",
    position: "프론트엔드",
    title: "김성우 교수님 HCI 프로젝트 모집",
    date: "2024-05-03",
    iscruiting: true,
    subtitle:
      "팀원을 모으는 서비스를 주제로 HCI수업에서 함께할학우를 찾습니다!",
    needposistion: [
      {
        count: 2,
        name: "프론트엔드",
      },
      {
        count: 1,
        name: "백엔드",
      },
      {
        count: 1,
        name: "기획",
      },
    ],
  },
  {
    name: "홍길동",
    position: "프론트엔드",
    title: "김성우 교수님 HCI 프로젝트 모집",
    date: "2024-05-03",
    iscruiting: true,
    subtitle:
      "팀원을 모으는 서비스를 주제로 HCI수업에서 함께할학우를 찾습니다!",
    needposistion: [
      {
        count: 2,
        name: "프론트엔드",
      },
      {
        count: 1,
        name: "백엔드",
      },
      {
        count: 1,
        name: "기획",
      },
    ],
  },
];

const UserInfoPage = () => {
  return <UserInfo PostInfo={[]} BoardData={dummy} />;
};

export default UserInfoPage;
