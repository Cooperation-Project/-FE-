import React, { useState } from "react";
import ShoppingList from "./shoppingList/ShoppingList";
import Payment from "./payment/Payment";

const ShoppingCart = () => {
  const [cartDetails, setCartDetails] = useState({
    totalPrice: 0,
    totalDiscount: 0,
    hasCheckedItems: false,
    itemsCount: 0,
  });

  return (
    <>
      <div className="w-1050 h-1075 mx-auto min-w-1050 min-h-1075 flex flex-col relative font-[NotoSansKR] tracking-[-0.5px] pb-20 text-[#333]">
        <h2
          style={{ fontSize: "1.75rem" }}
          className="text-center py-12 font-medium"
        >
          장바구니
        </h2>
        <div className="flex">
          <ShoppingList setCartDetails={setCartDetails} />
          <Payment cartDetails={cartDetails} />
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
