import AlarmInfoForm from "@molecules/AlarmInfoForm";

const AlarmInfoList = ({ AlarmDatas }) => {
  return AlarmDatas.map((AlarmData) => {
    return (
      <AlarmInfoForm
        title={AlarmData.title}
        content={AlarmData.content}
        status={AlarmData.status}
      />
    );
  });
};

export default AlarmInfoList;
