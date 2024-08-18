import React from "react";
import ShoppingListItemInfo from "./ShoppingListItemInfo";
import { minusBlack, plus, deleted, minusGrey } from "../../../assets/icon";
import ShoppingListItemCheck from "./ShoppingListItemCheck";

const ShoppingListItem = ({
  item,
  onCheckboxChange,
  deleteItem,
  updateQuantity,
}) => {
  const { id, price, discount, quantity, isChecked } = item;

  const incrementQuantity = () => {
    updateQuantity(id, quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    }
  };

  const totalCost = quantity * (price - discount);

  return (
    <div
      className="py-5 pl-0.5 h-28 flex items-center"
      style={{ borderBottom: "1px solid #f7f7f7" }}
    >
      <label
        htmlFor={`checkbox-${id}`}
        className="cursor-pointer flex items-center"
      >
        <ShoppingListItemCheck
          isChecked={isChecked}
          onCheckboxChange={() => {
            onCheckboxChange(id);
          }}
        />
      </label>

      <ShoppingListItemInfo item={item} />

      <div className="flex" style={{ border: "1px solid #e2e3e4" }}>
        <button
          className="w-7 h-7 flex justify-center items-center"
          onClick={decrementQuantity}
          style={{ cursor: quantity === 1 ? "default" : "pointer" }}
          disabled={quantity === 1}
        >
          {quantity === 1 ? (
            <img src={minusGrey} alt="minusgrey" />
          ) : (
            <img src={minusBlack} alt="minusBlack" />
          )}
        </button>

        <div className="w-7 h-7 text-sm flex justify-center items-center">
          {quantity}
        </div>

        <button
          className="w-7 h-7 flex justify-center items-center"
          onClick={incrementQuantity}
        >
          <img src={plus} alt="plus" />
        </button>
      </div>
      <div className="flex flex-col ">
        <div className="w-[7.9375rem] text-right text-base font-bold">
          {`${totalCost.toLocaleString()}원`}
        </div>
        {discount !== 0 && (
          <div className="w-[7.9375rem] text-right text-sm text-[#b5b5b5] line-through">
            {`${(price * quantity).toLocaleString()}원`}
          </div>
        )}
      </div>
      <button
        className="w-[1.875rem] h-[1.875rem] ml-2"
        onClick={() => deleteItem(id)}
      >
        <img src={deleted} alt="삭제" />
      </button>
    </div>
  );
};

export default ShoppingListItem;
