import React from "react";

const GenderField = () => {
  return (
    <div className="flex py-2.5 px-5 text-sm">
      <div className="inline-block w-w6 h-h1">
        <label className="text-darkGray font-medium">성별</label>
      </div>
      <div>
        <div className="flex">
          <div className="flex mr-14">
            <input
              className="w-6 h-6 accent-purple outline-radioColor"
              name="check"
              type="radio"
              defaultChecked
            />
            <span className="ml-3 mt-1">남자</span>
          </div>
          <div className="flex mr-14">
            <input
              className="w-6 h-6 accent-purple"
              name="check"
              type="radio"
            />
            <span className="ml-3 mt-1">여자</span>
          </div>
          <div className="flex">
            <input
              className="w-6 h-6 accent-purple"
              name="check"
              type="radio"
            />
            <span className="ml-3 mt-1">선택안함</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderField;
