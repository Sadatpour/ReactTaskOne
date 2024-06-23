import ProjectsTable from "../features/projects/ProjectsTable";
import ProjectsHeader from "../features/projects/ProjectsHeader";
import { projectsData } from "../data/Data";
import { useState } from "react";

function Projects() {
  //?  states
  const [data] = useState(projectsData);
  const [projectsList, setProjectsList] = useState(data);
  const [status, setStatus] = useState("ALL");
  const [sort, setSort] = useState("default");
  const [category, setCategory] = useState("ALL");

  const handleChangeSort = e => {
    setSort(e.target.value);
  };
  const handleChangeCategory = e => {
    setCategory(e.target.value);
  };
  const handleChangeStatus = value => {
    setStatus(value);
  };
  //?  Handlers
  const handleSort = (a, b) => {
    switch (sort) {
      case "earliest": // latest
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      case "latest": // earliest
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "default": // earliest
        return sort;
      default:
        throw new Error("No Matching Sort!");
    }
  };

  const filterAndSort = projectsList
    .filter(p => (status === "ALL" ? true : p.status == status))
    .filter(p =>
      category === "ALL" ? true : p.category.englishTitle == category
    )
    .sort(handleSort);

  return (
    <div>
      <ProjectsHeader
        status={status}
        onChangeStatus={handleChangeStatus}
        sort={sort}
        onChangeSort={handleChangeSort}
        category={category}
        onChangeCategory={handleChangeCategory}
      />
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-14 px-10 ">
        <ProjectsTable projectsList={filterAndSort} />
      </div>
    </div>
  );
}
export default Projects;
