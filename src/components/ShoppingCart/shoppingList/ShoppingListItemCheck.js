import React from "react";
import { checked, unchecked } from "../../../assets/icon";

const ShoppingListItemCheck = ({ isChecked, onCheckboxChange }) => {
  return (
    <div
      className="flex justify-center items-center pr-3"
      onClick={onCheckboxChange}
    >
      {isChecked ? (
        <img src={checked} alt="checked" className="h-6 w-6" />
      ) : (
        <img src={unchecked} alt="unchecked" className="h-6 w-6" />
      )}
    </div>
  );
};

export default ShoppingListItemCheck;
