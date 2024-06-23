function ProjectsHeader() {
  return (
    <div className="flex justify-center items-center gap-4 mt-10 px-10 ">
      <div className="grow">
        <h1> لیست پروژه ها </h1>
      </div>
      <ProjectsStatus />
      <ProjectsSort />
      <ProjectsCategory />
    </div>
  );
}

export default ProjectsHeader;

function ProjectsStatus() {
  return (
    <div className="flex py-1 rounded-lg items-center gap-2">
      <span>وضعیت: </span>
      <ul class="flex gap-1 text-sm rounded-xl p-1 bg-white w-36">
        <li class="">
          <a
            href="#"
            class="inline-block px-2 py-1 text-white bg-blue-600 rounded-lg active"
            value="all"
          >
            همه
          </a>
        </li>
        <li class="me-2">
          <a
            href="#"
            class="inline-block px-2 py-1 rounded-lg hover:text-gray-900 hover:bg-gray-300 text-black "
            value="open"
          >
            باز
          </a>
        </li>
        <li class="me-2">
          <a
            href="#"
            class="inline-block px-2 py-1 rounded-lg hover:text-gray-900 hover:bg-gray-300 text-black "
            value="close"
          >
            بسته
          </a>
        </li>
      </ul>
    </div>
  );
}
function ProjectsSort() {
  return (
    <div className="">
      <select id="" className=" w-32 text-black rounded-xl py-2 text-sm px-2">
        <option value="default" className="" selected>
          مرتب سازی (پیش فرض)
        </option>
        <option value="earliest" className="">
          مرتب سازی (جدیدترین)
        </option>
        <option value="latest" className="">
          مرتب سازی (قدیمی ترین)
        </option>
      </select>
    </div>
  );
}
function ProjectsCategory() {
  return (
    <div className="">
      <select
        name=""
        id=""
        className="w-32 text-black rounded-xl py-2 text-sm px-2"
      >
        <option value=""> دسته بندی ها</option>
        <option value="design-ui/ux">طراحی (ui/ux) </option>
        <option value="web development"> برنامه نویسی وب</option>
      </select>
    </div>
  );
}
