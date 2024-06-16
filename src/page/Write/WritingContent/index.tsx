import { lazy, useState } from "react";
import WritingContent from "@templates/WritingContent";
import { NeedPosistionType, WriteForm } from "@type/Tb";
import { useRecoilValue } from "recoil";
import { userAtom } from "src/atom";
import { Axios } from "src/apis/api/axiosFetch";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";

const WritingDetailContent = lazy(() => import("@templates/DetailContent"));
const WritingUpload = lazy(() => import("@templates/WritingUpload"));

const groupByNumber = (data) => {
  const grouped = {};

  Object?.keys(data)?.forEach((key) => {
    const [propertyName, number] = key.match(/[a-zA-Z]+|[0-9]+/g);
    grouped[number] = grouped[number] || {};
    grouped[number][propertyName] = data[key];
  });

  const result = Object.values(grouped);

  return result;
};

const WritePage = () => {
  const [index, setIndex] = useState<number>(0);
  const userInfo = useRecoilValue(userAtom);
  const Navigate = useNavigate();
  const [wirteForm, setWriteForm] = useState<WriteForm>({
    Title: "",
    Detail: "",
    NeedPosistion: [
      {
        NeedPosistionName: "",
        NeedPosistionNumber: 0,
        NeedPosistionSkill: "",
      },
    ],
    ApplyCount: 0,
    IsRecruiting: true,
    UploadTag: "",
    ExpireDate: "",
    id: userInfo.id,
    Writer: userInfo.name,
    WebSiteUri: "",
  });

  const NewNeedPosistion = groupByNumber(wirteForm.NeedPosistion);

  const onChangeWriteForm = (e: any) => {
    const { id, value } = e.target;
    setWriteForm((prev) => {
      return { ...prev, [id]: value };
    });
  };

  const onSubmit = async () => {
    try {
      const res = await Axios.post("http://3.106.143.87:3000/api/posts", {
        id: wirteForm.id,
        Title: wirteForm.Title,
        Detail: wirteForm.Detail,
        NeedPosistion: NewNeedPosistion,
        ApplyCount: 0,
        IsRecruiting: true,
        UploadTag: wirteForm.UploadTag,
        ExpireDate: wirteForm.ExpireDate,
        Writer: userInfo.name,
        UserList: [wirteForm.id],
        writeid: uuid(),
      });
      res.status === 201 && Navigate("/home");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {index === 0 && (
        <WritingContent
          setIndex={setIndex}
          writeForm={wirteForm}
          onChangeWriteForm={onChangeWriteForm}
        />
      )}
      {index === 1 && (
        <WritingDetailContent
          setIndex={setIndex}
          writeForm={wirteForm}
          onChangeWriteForm={onChangeWriteForm}
          setWriteForm={setWriteForm}
        />
      )}
      {index === 2 && (
        <WritingUpload
          setIndex={setIndex}
          wirteForm={wirteForm}
          NewNeedPosistion={NewNeedPosistion}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default WritePage;
