import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authState } from "../../state/authAtom";

const OauthGoogle = () => {
  const setAuth = useSetRecoilState(authState);
  const navigate = useNavigate();

  const handleSuccess = async (response) => {
    try {
      const res = await fetch("http://43.202.22.78:8080/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: response.credential })
      });

      if (!res.ok) {
        throw new Error(
          "서버에서 문제가 발생했습니다. 나중에 다시 시도해 주세요."
        );
      }

      const data = await res.json();
      const user = data.user || { id: "unknown_user" }; // 백엔드에서 받은 사용자 정보 사용

      setAuth({
        isAuthenticated: true,
        token: data.token,
        user
      });

      localStorage.setItem("authToken", data.token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/");
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  const handleError = (error) => {
    console.error("로그인 실패:", error);
  };

  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  return (
    <div className="flex flex-col mt-6 mb-3 items-center">
      <div className="flex items-center w-full max-w-sm mb-6">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-2 text-gray-400 text-sm">또는</span>
        <hr className="flex-grow border-gray-300" />
      </div>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Google Login
            </button>
          )}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default OauthGoogle;
