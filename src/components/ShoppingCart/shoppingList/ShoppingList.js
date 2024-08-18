import React, { useState, useEffect } from "react";
import ShoppingListGroup from "./ShoppingListGroup";
import ShoppingListCheck from "./ShoppingListCheck";
import { sun, water } from "../../../assets/icon";
import { basilPesto, cookie, egg, peach } from "../../../assets/item";

const ShoppingList = ({ setCartDetails }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      icon: water,
      title: "냉장 상품",
      img: egg,
      name: "[KF365] 1+등급 무항생제 특란 20구",
      price: 7390,
      discount: 1260,
      quantity: 1,
      isChecked: false,
    },
    {
      id: 2,
      icon: water,
      title: "냉장 상품",
      img: peach,
      name: "백도 복숭아 1.2kg (5~6입)",
      price: 17900,
      discount: 2000,
      quantity: 1,
      isChecked: false,
    },
    {
      id: 3,
      icon: sun,
      title: "상온 상품",
      img: cookie,
      name: "[제니쿠키] 마카다미아 코코아 크리스피 255g",
      price: 36800,
      discount: 3680,
      quantity: 1,
      isChecked: false,
    },
    {
      id: 4,
      icon: sun,
      title: "상온 상품",
      img: basilPesto,
      name: "[파토니움브레] 바질페스토",
      price: 4980,
      discount: 0,
      quantity: 1,
      isChecked: false,
    },
  ]);

  const handleSingleCheck = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handleAllCheck = (isChecked) => {
    setItems(items.map((item) => ({ ...item, isChecked })));
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const deleteCheckedItems = () => {
    setItems(items.filter((item) => !item.isChecked));
  };

  const updateQuantity = (id, quantity) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const totalPrice = items.reduce(
    (acc, item) => (item.isChecked ? acc + item.price * item.quantity : acc),
    0
  );
  const totalDiscount = items.reduce(
    (acc, item) => (item.isChecked ? acc + item.discount * item.quantity : acc),
    0
  );

  const hasCheckedItems = items.some((item) => item.isChecked);
  const checkedItemsCount = items.filter((item) => item.isChecked).length;
  const itemsCount = items.length;

  useEffect(() => {
    setCartDetails({ totalPrice, totalDiscount, hasCheckedItems, itemsCount });
  }, [totalPrice, totalDiscount, hasCheckedItems, itemsCount, setCartDetails]);

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.title]) {
      acc[item.title] = [];
    }
    acc[item.title].push(item);
    return acc;
  }, {});

  const allChecked = items.length > 0 && items.every((item) => item.isChecked);

  return (
    <div className="flex flex-col w-742 min-w-742 h-942 min-h-942">
      <ShoppingListCheck
        allChecked={allChecked}
        onCheckboxChange={(e) => handleAllCheck(e.target.checked)}
        deleteCheckedItems={deleteCheckedItems}
        checkedItemsCount={checkedItemsCount}
        itemsCount={itemsCount}
      />
      {items.length === 0 ? (
        <div
          className="py-[115px] text-base text-[#b5b5b5] text-center"
          style={{
            borderTop: "1px solid #333333",
            borderBottom: "1px solid #f7f7f7",
          }}
        >
          장바구니에 담긴 상품이 없습니다
        </div>
      ) : (
        Object.entries(groupedItems).map(([title, groupedItems]) => (
          <ShoppingListGroup
            key={title}
            title={title}
            items={groupedItems}
            onCheckboxChange={handleSingleCheck}
            deleteItem={deleteItem}
            updateQuantity={updateQuantity}
          />
        ))
      )}
      <ShoppingListCheck
        allChecked={allChecked}
        onCheckboxChange={(e) => handleAllCheck(e.target.checked)}
        deleteCheckedItems={deleteCheckedItems}
        checkedItemsCount={checkedItemsCount}
        itemsCount={itemsCount}
      />
    </div>
  );
};

export default ShoppingList;
