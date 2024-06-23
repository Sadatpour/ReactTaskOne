import Status from "../../ui/status";
import Sort from "../../ui/sort";
import Category from "../../ui/category";
import { useState } from "react";
const statusOption = [
  {
    lable: "همه",
    value: "ALL",
  },
  {
    lable: "باز",
    value: "OPEN",
  },
  {
    lable: "بسته",
    value: "CLOSED",
  },
];
function ProjectsHeader() {
  const [status, setStatus] = useState("ALL");
  const statusHandler = ((value) => {
  setStatus(value)
});
  return (
    <div className="flex justify-center items-center gap-4 mt-10 px-10 ">
      <div className="grow">
        <h1> لیست پروژه ها </h1>
      </div>
      <Status options={statusOption} currentStatus={status} onChange = {statusHandler} />
      <Sort />
      <Category />
    </div>
  );
}

export default ProjectsHeader;
