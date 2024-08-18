import React from "react";

const DateOfBirthField = ({
  year,
  month,
  day,
  yearChangeHandler,
  monthChangeHandler,
  dayChangeHandler,
  yearBlurHandler,
  monthBlurHandler,
  dayBlurHandler,
}) => {
  return (
    <div className="flex w-w2 py-2.5 px-5 text-sm">
      <div className="inline-block w-w6 mt-4">
        <label className="text-darkGray font-medium">생년월일</label>
      </div>
      <div className="inline-block border border-lightGray rounded w-w3 h-h1 text-sm">
        <input
          className="h-10 w-w5 pr-p1 pl-p2 text-center mt-1 ml-2 placeholder-middleGray focus:outline-none"
          name="year"
          type="text"
          maxLength="4"
          value={year}
          onChange={yearChangeHandler}
          onBlur={yearBlurHandler}
          placeholder="YYYY"
          onKeyDown={(e) => {
            if (
              !/[0-9]/.test(e.key) &&
              !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(
                e.key
              )
            ) {
              e.preventDefault();
            }
          }}
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
          }}
        />
        <span className="text-center text-lightGray">/</span>
        <input
          className="h-10 w-w5 pr-p1 pl-p2 text-center mt-1 placeholder-middleGray focus:outline-none"
          name="month"
          type="text"
          maxLength="2"
          value={month}
          onChange={monthChangeHandler}
          onBlur={monthBlurHandler}
          placeholder="MM"
          onKeyDown={(e) => {
            if (
              !/[0-9]/.test(e.key) &&
              !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(
                e.key
              )
            ) {
              e.preventDefault();
            }
          }}
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
          }}
        />
        <span className="text-center text-lightGray">/</span>
        <input
          className="h-10 w-w5 pr-p1 pl-p2 text-center mt-1 placeholder-middleGray focus:outline-none"
          name="day"
          type="text"
          maxLength="2"
          value={day}
          onChange={dayChangeHandler}
          onBlur={dayBlurHandler}
          placeholder="DD"
          onKeyDown={(e) => {
            if (
              !/[0-9]/.test(e.key) &&
              !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(
                e.key
              )
            ) {
              e.preventDefault();
            }
          }}
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
          }}
        />
      </div>
    </div>
  );
};

export default DateOfBirthField;
