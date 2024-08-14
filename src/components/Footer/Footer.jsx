import React from "react";

function Footer() {
  return (
    <>
      <footer className="border-t border-gray-200 pt-8 container w-1050 mx-auto min-w-1050 flex flex-col relative">
        <div className="container mx-auto max-w-[1050px]">
          <div className="flex mb-4 justify-between">
            <div role="complementary" className="">
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "16px"
                }}
              >
                고객행복센터
              </div>
              <div className="flex mb-4">
                <span
                  className="font-semibold"
                  style={{
                    fontSize: "28px",
                    marginRight: "10px"
                  }}
                >
                  1644-1107
                </span>
                <span className="text-gray-600 mt-3">
                  월~토요일 오전 7시 - 오후 6시
                </span>
              </div>
              <div className="flex items-center mb-1">
                <div>
                  <a
                    href="#"
                    className="text-sm border border-gray-200 p-2 rounded-1xl"
                    style={{
                      width: "140px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <span>카카오톡 문의</span>
                  </a>
                </div>
                <div className="text-gray-600 ml-3">
                  <span
                    className="block"
                    style={{
                      fontSize: "14px",
                      color: "#999999"
                    }}
                  >
                    월~토요일 | 오전 7시 - 오후 6시
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#999999"
                    }}
                    className="block"
                  >
                    일/공휴일 | 오전 7시 - 오후 1시
                  </span>
                </div>
              </div>

              <div className="flex items-center mb-1">
                <div>
                  <a
                    href="#"
                    className="text-sm border border-gray-200 p-2 rounded-1xl"
                    style={{
                      width: "140px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <span>1:1 문의</span>
                  </a>
                </div>
                <div className="text-gray-600 ml-3">
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#999999"
                    }}
                    className="block"
                  >
                    365일
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#999999"
                    }}
                    className="block"
                  >
                    고객센터 운영시간에 순차적으로 답변드리겠습니다.
                  </span>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <div>
                  <a
                    href="#"
                    className="text-sm border border-gray-200 p-2 rounded-1xl"
                    style={{
                      width: "140px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <span>대량주문 문의</span>
                  </a>
                </div>
                <div className="text-gray-600 ml-3">
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#999999"
                    }}
                    className="block"
                  >
                    월~금요일 | 오전 9시 - 오후 6시
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#999999"
                    }}
                    className="block"
                  >
                    점심시간 | 낮 12시 - 오후 1시
                  </span>
                </div>
              </div>

              <div className="text-gray-600 space-y-2 mt-4">
                <span
                  style={{
                    fontSize: "12px",
                    color: "#999999"
                  }}
                >
                  비회원 문의:{" "}
                  <a
                    href="mailto:help@karlycorp.com"
                    style={{
                      fontSize: "12px",
                      color: "#999999"
                    }}
                    className=""
                  >
                    help@karlycorp.com
                  </a>
                </span>
              </div>
            </div>

            <div role="complementary" className="">
              <ul className="flex flex-row mb-6">
                <li style={{ margin: "0 0.8rem 0 0" }}>
                  <a
                    href="#"
                    style={{
                      fontSize: "14px",
                      color: "#333333"
                    }}
                  >
                    칼리소개
                  </a>
                </li>
                <li style={{ margin: "0 0.8rem 0 0" }}>
                  <a
                    href="#"
                    style={{
                      fontSize: "14px",
                      color: "#333333"
                    }}
                  >
                    칼리소개영상
                  </a>
                </li>
                <li style={{ margin: "0 0.8rem 0 0" }}>
                  <a
                    href="#"
                    style={{
                      fontSize: "14px",
                      color: "#333333"
                    }}
                  >
                    투자정보
                  </a>
                </li>
                <li style={{ margin: "0 0.8rem 0 0" }}>
                  <a
                    href="#"
                    style={{
                      fontSize: "14px",
                      color: "#333333"
                    }}
                  >
                    인재채용
                  </a>
                </li>
                <li style={{ margin: "0 0.8rem 0 0" }}>
                  <a
                    href="#"
                    style={{
                      fontSize: "14px",
                      color: "#333333"
                    }}
                  >
                    이용약관
                  </a>
                </li>
                <li style={{ margin: "0 0.8rem 0 0" }}>
                  <a
                    href="#"
                    style={{
                      fontSize: "14px",
                      color: "#333333"
                    }}
                  >
                    개인정보처리방침
                  </a>
                </li>
                <li style={{ margin: "0 0.8rem 0 0" }}>
                  <a
                    href="#"
                    style={{
                      fontSize: "14px",
                      color: "#333333"
                    }}
                  >
                    이용안내
                  </a>
                </li>
              </ul>

              <div
                style={{
                  fontSize: "12px",
                  color: "#999999"
                }}
              >
                <p>
                  <span>법인명 (상호) : 주식회사 컬리</span> |{" "}
                  <span>사업자등록번호 : 261-81-23567</span> |{" "}
                  <span
                    style={{
                      color: "#5F0080"
                    }}
                  >
                    <a href="#">사업자정보 확인</a>
                  </span>
                </p>
                <p>
                  <span>통신판매업 : 제 2018-서울강남-01646 호</span>
                </p>
                <p>
                  <span>
                    주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)
                  </span>{" "}
                  | <span>대표이사 : 김슬아</span>
                </p>
                <p>
                  <span>
                    채용문의 :{" "}
                    <a
                      style={{
                        color: "#5F0080"
                      }}
                      href="mailto:recruit@karlycorp.com"
                    >
                      recruit@karlycorp.com
                    </a>
                  </span>
                </p>
                <p>
                  <span>팩스 : 070 - 7500 - 6098</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        style={{
          width: "100%",
          backgroundColor: "#F6F7F7",
          color: "#999999", // Tailwind CSS의 text-gray-600 색상 코드
          fontSize: "12px"
        }}
      >
        <div className="container mx-auto text-center py-4 ">
          <span className="block">
            마켓칼리에서 판매되는 상품 중에는 마켓칼리에 입점한 개별 판매자가
            판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
          </span>
          <span className="block mb-2">
            마켓플레이스(오픈마켓) 상품의 경우 칼리는 통신판매중개자로서
            통신판매의 당사자가 아닙니다. 칼리는 해당 상품의 주문, 품질,
            교환/환불 등 의무와 책임을 부담하지 않습니다.
          </span>
          <span>&copy; KARLY CORP. ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
