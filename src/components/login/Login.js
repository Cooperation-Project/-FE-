import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authState } from "../../state/authAtom";
import Swal from "sweetalert2";
import "./Login.css";
import OauthGoogle from "./OauthGoogle";

const API_URL = "http://43.202.22.78:8080";

function generateCaptcha() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const setAuth = useSetRecoilState(authState);
  const navigate = useNavigate();

  const handleFindLogin = () => {
    navigate("/reset-username");
  };

  const handleFindPassword = () => {
    navigate("/reset-password");
  };

  const handleSignUp = async () => {
    navigate("/account");
  };

  const handleLogin = async () => {
    try {
      if (loginAttempts >= 2) {
        if (captchaInput !== captcha) {
          Swal.fire({
            icon: "error",
            title: "인증 실패",
            text: "인증번호를 정확하게 입력해주세요!",
            confirmButtonText: "확인",
          });
          return;
        }
      }

      const response = await fetch(API_URL + "/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: userId, password }),
      });

      if (!response.ok) {
        throw new Error("로그인 실패!");
      }

      const token = response.headers.get("token");

      if (!token) {
        throw new Error("토큰을 찾을 수 없습니다");
      }

      const user = { id: userId };

      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));

      setAuth({
        isAuthenticated: true,
        token,
        user,
      });

      Swal.fire({
        icon: "success",
        title: "로그인 성공",
        text: "로그인에 성공하였습니다!",
        confirmButtonText: "확인",
      }).then(() => {
        navigate("/");
      });
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
      setLoginAttempts((prev) => prev + 1);
      Swal.fire({
        icon: "error",
        title: "오류",
        text:
          "로그인 중 오류가 발생했습니다. 다시 시도해주세요! " + error.message,
        confirmButtonText: "확인",
      });
    }
  };

  return (
    <main className="flex items-start justify-center my-20">
      <div className="p-8 bg-white w-96">
        <h2 className="font-bold text-2xl text-center mb-4 text-black-800">
          로그인
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="text-right text-sm text-gray-500 mb-4">
          <button onClick={handleFindLogin} className="mr-2">
            아이디 찾기
          </button>{" "}
          |
          <button onClick={handleFindPassword} className="ml-2">
            비밀번호 찾기
          </button>
        </div>

        {loginAttempts >= 2 && (
          <div className="captcha-container">
            <div className="captcha-header">인증번호를 입력하세요</div>
            <div className="captcha-box">
              <span className="captcha-code">{captcha}</span>
            </div>
            <input
              type="text"
              placeholder="인증번호 입력"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              className="captcha-input"
            />
          </div>
        )}

        <button
          onClick={handleLogin}
          className="mb-3 w-full h-14 bg-[#5f0080] text-white text-base rounded font-bold"
        >
          로그인
        </button>
        <button
          onClick={handleSignUp}
          className="mt-1 w-full h-14 bg-white text-[#5f0080] border border-[#5f0080] text-base rounded"
        >
          회원가입
        </button>
        <OauthGoogle />
      </div>
    </main>
  );
}

export default Login;
