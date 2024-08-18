import React from "react";
import { Link, useLocation } from "react-router-dom";

const OtherMenus = () => {
  const location = useLocation();

  const checkPath = (path) => {
    return location.pathname === path;
  };
  return (
    <div className="py-0 px-[25px] text-sm bg-white">
      <div className="flex flex-wrap pt-3 px-0 pb-4 border-t border-[#eeeeee] border-solid">
        <div className="w-full pt-3 px-0 pb-1.5 font-normal leading-5 text-[#b5b5b5]">
          쇼핑
        </div>
        <div className="flex relative flex-col items-start min-w-full py-3 px-0 font-medium cursor-pointer">
          <div className="text-base/[22px] text-[#333333] whitespace-nowrap">
            결제수단 · 컬리페이
          </div>
        </div>
        <div className="flex relative flex-col items-start min-w-full py-3 px-0 font-medium cursor-pointer">
          <div className="text-base/[22px] text-[#333333] whitespace-nowrap">
            상품 후기
          </div>
        </div>
        <div className="flex relative flex-col items-start min-w-full py-3 px-0 font-medium cursor-pointer">
          <div className="text-base/[22px] text-[#333333] whitespace-nowrap">
            선물 내역
          </div>
        </div>
        <div className="flex relative flex-col items-start min-w-full py-3 px-0 font-medium cursor-pointer">
          <div className="text-base/[22px] text-[#333333] whitespace-nowrap">
            상품 후기
          </div>
        </div>
      </div>
      <div className="flex flex-wrap pt-3 px-0 pb-4 border-t border-[#eeeeee] border-solid">
        <div className="w-full pt-3 px-0 pb-1.5 font-normal leading-5 text-[#b5b5b5]">
          혜택
        </div>
        <div className="flex relative flex-col items-start min-w-full py-3 px-0 font-medium cursor-pointer">
          <div className="text-base/[22px] text-[#333333] whitespace-nowrap">
            컬리 멤버스
          </div>
        </div>
      </div>
      <div className="flex flex-wrap pt-3 px-0 pb-4 border-t border-[#eeeeee] border-solid">
        <div className="w-full pt-3 px-0 pb-1.5 font-normal leading-5 text-[#b5b5b5]">
          내 정보관리
        </div>
        <Link
          to="/userprofile/address"
          className={`flex relative flex-col items-start min-w-full py-3 px-0 font-medium cursor-pointer ${
            checkPath("/userprofile/address") ? "text-purple" : "text-black"
          }`}
        >
          <div className="text-base/[22px] whitespace-nowrap">배송지 관리</div>
        </Link>
        <div className="flex relative flex-col items-start min-w-full py-3 px-0 font-medium cursor-pointer">
          <div className="text-base/[22px] text-[#333333] whitespace-nowrap">
            나의 컬리스타일
          </div>
        </div>
        <Link
          to="/userprofile/info"
          className={`flex relative flex-col items-start min-w-full py-3 px-0 font-medium cursor-pointer ${
            checkPath("/userprofile/info") ? "text-purple" : "text-black"
          }`}
        >
          <div className="text-base/[22px] whitespace-nowrap">
            개인정보 수정
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap pt-3 px-0 pb-4 border-t border-[#eeeeee] border-solid">
        <div className="w-full pt-3 px-0 pb-1.5 font-normal leading-5 text-[#b5b5b5]">
          서비스 안내
        </div>
        <div className="flex relative flex-col items-start min-w-full py-3 px-0 font-medium cursor-pointer">
          <div className="text-base/[22px] text-[#333333] whitespace-nowrap">
            컬리퍼플박스
          </div>
        </div>
        <div className="flex relative flex-col items-start min-w-full py-3 px-0 font-medium cursor-pointer">
          <div className="text-base/[22px] text-[#333333] whitespace-nowrap">
            VIP제도 안내
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherMenus;
