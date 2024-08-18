import React, { useState } from "react";
import ShoppingListItem from "./ShoppingListItem";
import { down, up } from "../../../assets/icon";

const ShoppingListGroup = ({
  title,
  items,
  onCheckboxChange,
  deleteItem,
  updateQuantity,
}) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(true);

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    <div>
      <div
        className="flex justify-between py-4 pr-1 pl-0.5"
        style={{ borderTop: "1px solid #333333" }}
      >
        <div className="flex justify-start items-center">
          <span className="mr-2">
            <img src={items[0].icon} alt={title} />
          </span>
          <span className="font-medium text-lg">{title}</span>
        </div>
        <div onClick={toggleDetails} className="cursor-pointer">
          {isDetailsVisible ? (
            <img src={up} alt="리스트 닫기" className="w-6 h-6" />
          ) : (
            <img src={down} alt="리스트 열기" className="w-6 h-6" />
          )}
        </div>
      </div>
      {isDetailsVisible &&
        items.map((item) => (
          <ShoppingListItem
            key={item.id}
            item={item}
            onCheckboxChange={onCheckboxChange}
            deleteItem={deleteItem}
            updateQuantity={updateQuantity}
          />
        ))}
    </div>
  );
};

export default ShoppingListGroup;
