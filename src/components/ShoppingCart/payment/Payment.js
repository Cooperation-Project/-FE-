import React from "react";
import { useRecoilValue } from "recoil";
import { authState } from "../../../state/authAtom";
import PaymentAddress from "./PaymentAddress";
import PaymentAmount from "./PaymentAmount";

const Payment = ({ cartDetails }) => {
  const auth = useRecoilValue(authState);
  const isLoggedIn = !!auth.token;

  const getOrderButton = () => {
    if (cartDetails.itemsCount === 0) {
      return (
        <div className="w-284 h-[56px] text-white bg-[#dddddd] rounded flex items-center justify-center">
          상품을 담아주세요
        </div>
      );
    }
    if (!cartDetails.hasCheckedItems) {
      return (
        <div className="w-284 h-[56px] text-white bg-[#dddddd] rounded flex items-center justify-center">
          상품을 선택해주세요
        </div>
      );
    }
    return (
      <button className="w-284 h-[56px] text-white bg-[#5f0080] rounded ">
        주문하기
      </button>
    );
  };

  return (
    <div className="w-284 h-942 absolute right-0">
      <div className="h-[753px] pt-[60px] sticky top-[60px]">
        {isLoggedIn && <PaymentAddress />}
        <PaymentAmount cartDetails={cartDetails} />
        <div className="w-284 h-[256px] pt-5 flex flex-col">
          {isLoggedIn ? (
            <>
              {getOrderButton()}
              <ul className="py-4 w-284 h-[180px] list-none text-[#666]">
                <li className="text-xs pt-1 pl-1.5 before:overflow-hidden before:absolute before:w-px before:h-px before:mt-1.5 before:-ml-1.5 before:bg-[#999999] before:align-top before:rounded-[50%] before:content-['']">
                  쿠폰/적립금은 주문서에서 사용 가능합니다.
                </li>
                <li className="text-xs pt-1 pl-1.5 before:overflow-hidden before:absolute before:w-px before:h-px before:mt-1.5 before:-ml-1.5 before:bg-[#999999] before:align-top before:rounded-[50%] before:content-['']">
                  [주문완료]상태일 경우에만 주문 취소 가능합니다.
                </li>
                <li className="text-xs pt-1 pl-1.5 before:overflow-hidden before:absolute before:w-px before:h-px before:mt-1.5 before:-ml-1.5 before:bg-[#999999] before:align-top before:rounded-[50%] before:content-['']">
                  [마이컬리 &gt; 주문내역 상세페이지]에서 직접 취소하실 수
                  있습니다.
                </li>
                <li className="text-xs pt-1 pl-1.5 before:overflow-hidden before:absolute before:w-px before:h-px before:mt-1.5 before:-ml-1.5 before:bg-[#999999] before:align-top before:rounded-[50%] before:content-['']">
                  쿠폰, 적립금 사용 금액을 제외한 실 결제 금액 기준으로 최종
                  산정됩니다.
                </li>
                <li className="text-xs pt-1 pl-1.5 before:overflow-hidden before:absolute before:w-px before:h-px before:mt-1.5 before:-ml-1.5 before:bg-[#999999] before:align-top before:rounded-[50%] before:content-['']">
                  상품별로 적립금 지급 기준이 다를 수 있습니다.(상품 상세
                  페이지에서 확인 가능합니다)
                </li>
              </ul>
            </>
          ) : (
            <>
              <a
                href="./login"
                className="w-284 h-[56px] text-white bg-[#5f0080] rounded flex items-center justify-center"
              >
                로그인
              </a>
              <ul className="py-4 w-284 h-[180px] list-none text-[#666]">
                <li className="text-xs pt-1 pl-1.5 before:overflow-hidden before:absolute before:w-px before:h-px before:mt-1.5 before:-ml-1.5 before:bg-[#999999] before:align-top before:rounded-[50%] before:content-['']">
                  [주문완료]상태일 경우에만 주문 취소 가능합니다.
                </li>
                <li className="text-xs pt-1 pl-1.5 before:overflow-hidden before:absolute before:w-px before:h-px before:mt-1.5 before:-ml-1.5 before:bg-[#999999] before:align-top before:rounded-[50%] before:content-['']">
                  [마이컬리 &gt; 주문내역 상세페이지]에서 직접 취소하실 수
                  있습니다.
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;