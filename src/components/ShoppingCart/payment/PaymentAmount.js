import React from "react";

const PaymentAmount = ({ cartDetails }) => {
  const { totalPrice, totalDiscount, hasCheckedItems } = cartDetails;
  const discountedPrice = totalPrice - totalDiscount;

  let shippingCost = 0;
  if (hasCheckedItems) {
    shippingCost = discountedPrice >= 40000 ? 0 : 3000;
  }

  const finalAmount = discountedPrice + shippingCost;
  const freeShippingAmount = 40000 - discountedPrice;

  return (
    <div className="p-5 bg-neutral-50" style={{ border: "1px solid #f5f5f5" }}>
      <div className="flex justify-between items-center h-6">
        <div className="text-base">상품금액</div>
        <div className="text-lg leading-6">{totalPrice.toLocaleString()}원</div>
      </div>
      <div className="flex justify-between items-center pt-3">
        <div className="text-base">상품할인금액</div>
        <div className="text-lg leading-6">
          {totalDiscount === 0 ? "0원" : `-${totalDiscount.toLocaleString()}원`}
        </div>
      </div>
      <div className="flex justify-between items-center pt-3">
        <div className="text-base">배송비</div>
        <div className="text-lg leading-6">
          {shippingCost === 0 ? "0원" : `+${shippingCost.toLocaleString()}원`}
        </div>
      </div>
      {hasCheckedItems && discountedPrice < 40000 && (
        <p className="text-xs text-right text-[rgb(95,0,128)] pt-0.5">
          {freeShippingAmount.toLocaleString()}원 추가주문 시,{" "}
          <strong>무료배송</strong>
        </p>
      )}
      <div
        className="flex justify-between items-center mt-4 pt-4"
        style={{ borderTop: "1px solid #f4f4f4" }}
      >
        <div className="text-base">결제예정금액</div>
        <div className="text-xl">
          <strong>{finalAmount.toLocaleString()}</strong>원
        </div>
      </div>
    </div>
  );
};

export default PaymentAmount;
