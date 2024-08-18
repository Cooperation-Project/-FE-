import React from "react";
import { checked, uncheckable, unchecked } from "../../../assets/icon";

const ShoppingListCheck = ({
  allChecked,
  onCheckboxChange,
  deleteCheckedItems,
  checkedItemsCount,
  itemsCount,
}) => {
  return (
    <div className="flex justify-start items-center py-4 pl-0.5 pr-2.5">
      <label
        htmlFor="checkbox"
        className="flex items-center"
        style={{ cursor: itemsCount === 0 ? "default" : "pointer" }}
      >
        <div className="flex justify-center items-center pr-3">
          {itemsCount === 0 ? (
            <img src={uncheckable} alt="uncheckable" className="h-6 w-6" />
          ) : (
            <input
              type="checkbox"
              id="checkbox"
              className="appearance-none"
              checked={allChecked}
              onChange={onCheckboxChange}
            />
          )}
          {itemsCount === 0 ? null : allChecked ? (
            <img src={checked} alt="checked" className="h-6 w-6" />
          ) : (
            <img src={unchecked} alt="unchecked" className="h-6 w-6" />
          )}
        </div>
        <span className="text-sm font-medium">
          전체선택 ({checkedItemsCount}/{itemsCount})
        </span>
      </label>
      <span className="px-5" style={{ color: "#e5e5e5" }}>
        |
      </span>
      <button
        className="text-sm font-medium"
        onClick={deleteCheckedItems}
        style={{ cursor: checkedItemsCount === 0 ? "default" : "pointer" }}
      >
        선택삭제
      </button>
    </div>
  );
};

export default ShoppingListCheck;
