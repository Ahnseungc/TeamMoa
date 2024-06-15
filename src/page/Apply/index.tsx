import { lazy, useState } from "react";

const NoticeForm = lazy(() => import("@templates/NoticeGuideForm"));

const ApplyForm = lazy(() => import("@templates/ApplyInputForm"));

const ApplyPage = () => {
  const [index, setIndex] = useState<number>(1);
  return (
    <>
      {index === 1 && <NoticeForm setIndex={setIndex} pageIndex={index} />}
      {index === 2 && <ApplyForm />}
    </>
  );
};

export default ApplyPage;
