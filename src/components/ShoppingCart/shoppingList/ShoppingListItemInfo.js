import React from "react";

const ShoppingListItemInfo = ({ item }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-20 h-20 flex justify-start items-center">
        <img
          src={item.img}
          alt={item.name}
          className="w-[3.75rem] h-[4.875rem]"
        />
      </div>
      <p className="text-base font-medium w-[22rem] mr-5">{item.name}</p>
    </div>
  );
};

export default ShoppingListItemInfo;
