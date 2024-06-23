import React from 'react'

function Sort() {
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

export default Sort