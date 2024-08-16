import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authState } from "../../state/authAtom";
import {
  burger,
  cart,
  heart,
  logo,
  magnifyingGlass,
  map,
} from "../../assets/images";

function Header() {
  const [auth, setAuth] = useRecoilState(authState);
  const isLoggedIn = !!auth.token;
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({
      isAuthenticated: false,
      token: null,
      user: null,
    });
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <>
      <header className="bg-white">
        <div className="container w-1050 mx-auto min-w-1050 flex flex-col relative">
          {/* 상단 회원가입, 로그인, 고객센터 */}
          <div className="flex justify-between items-center mt-2 mb-3">
            <div className="flex-grow"></div>
            <div className="flex space-x-2 items-center">
              {isLoggedIn ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="text-xs"
                    style={{ fontSize: "12px" }}
                  >
                    로그아웃
                  </button>
                  <span className="" aria-hidden="true">
                    ㅣ
                  </span>
                  <a
                    className="text-xs"
                    href="/userprofile"
                    style={{ fontSize: "12px" }}
                  >
                    마이페이지
                  </a>
                </>
              ) : (
                <>
                  <div className="text-xs" style={{ fontSize: "12px" }}>
                    <a href="/account">회원가입</a>
                  </div>
                  <span className="" aria-hidden="true">
                    ㅣ
                  </span>
                  <a
                    className="text-xs"
                    href="/login"
                    style={{ fontSize: "12px" }}
                  >
                    로그인
                  </a>
                  <span className="" aria-hidden="true">
                    ㅣ
                  </span>
                  <a
                    className="text-xs"
                    href="/userprofile"
                    style={{ fontSize: "12px" }}
                  >
                    마이페이지
                  </a>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between mt-2 mb-2">
            <div className="flex items-center">
              <div className="mr-4">
                <a href="/">
                  <img className="w-20" src={logo} alt="마켓컬리 로고" />
                </a>
              </div>

              <div>
                <ul className="flex items-center space-x-1">
                  <li>
                    <a
                      style={{ color: "#5E0080" }}
                      className="text-lg font-semibold"
                      href="#"
                    >
                      마켓컬리
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span
                      style={{ color: "#B5B5B5" }}
                      className="mx-1"
                      aria-hidden="true"
                    >
                      ㅣ
                    </span>
                    <a
                      style={{ color: "#B5B5B5" }}
                      className="text-lg "
                      href="#"
                    >
                      뷰티컬리
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* 검색 폼 */}
            <form
              action="/"
              method="POST"
              className="flex-grow flex items-center"
            >
              <fieldset className="border-none w-full">
                <legend className="sr-only">검색 폼</legend>
                <div
                  className="flex items-center border rounded-md justify-between"
                  style={{
                    maxWidth: "400px",
                    marginLeft: "5rem",
                    marginRight: "3rem",
                    borderColor: "#5E0080",
                    borderWidth: "1.8px",
                    height: "48px",
                  }}
                >
                  <input
                    type="search"
                    id="search"
                    name="search"
                    required
                    className="font-semibold flex-grow appearance-none outline-none"
                    placeholder="검색어를 입력해주세요"
                    style={{ paddingLeft: "12px", border: "none" }}
                  />
                  <button type="submit" className="flex items-center">
                    <img
                      className=""
                      src={magnifyingGlass}
                      alt="검색 아이콘"
                      style={{
                        width: "22px",
                        height: "22px",
                        marginRight: "12px",
                      }}
                    />
                  </button>
                </div>
              </fieldset>
            </form>

            {/* 아이콘들 */}
            <div className="flex items-center space-x-6">
              <a href="/">
                <img
                  className="w-[30px] h-[30px]"
                  src={map}
                  alt="지도 아이콘"
                />
              </a>
              <a href="/">
                <img
                  className="w-[30px] h-[30px]"
                  src={heart}
                  alt="하트 아이콘"
                />
              </a>
              <a href="/cart">
                <img
                  className="w-[30px] h-[30px]"
                  src={cart}
                  alt="장바구니 아이콘"
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white shadow-sm z-40 container w-1050 mx-auto min-w-1050 flex flex-col relative">
        <div className="container mx-auto max-w-[1050px]">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img className="w-6 h-6" src={burger} alt="햄버거 버튼" />
              <span className="text-lg font-semibold">카테고리</span>
            </div>
            <ul className="flex space-x-24">
              <li>
                <a href="#" className="text-gray text-base font-medium">
                  신상품
                </a>
              </li>
              <li>
                <a href="#" className="text-gray text-base font-medium">
                  베스트
                </a>
              </li>
              <li>
                <a href="#" className="text-gray text-base font-medium">
                  알뜰쇼핑
                </a>
              </li>
              <li>
                <a href="#" className="text-gray text-base font-medium">
                  특가/혜택
                </a>
              </li>
            </ul>
            <div>
              <a
                href="#"
                className="text-sm text-purple-500 border border-gray-200 p-2 rounded-3xl"
              >
                <span style={{ color: "#5E0080" }} className="font-semibold ">
                  샛별·하루
                </span>
                <span className="font-semibold text-black"> 배송안내</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
