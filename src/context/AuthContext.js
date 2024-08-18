// import React, { createContext, useState, useEffect } from "react";

// // API URL을 설정합니다.
// const API_URL = "http://43.202.22.78:8080";

// // AuthContext를 생성합니다.
// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({ token: null, user: null });

//   // 사용자 프로필 정보를 서버에서 가져오는 함수입니다.
//   const fetchUserProfile = async (token) => {
//     try {
//       const response = await fetch(`${API_URL}/me`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const userData = await response.json();
//       return userData;
//     } catch (error) {
//       console.error("사용자 프로필 정보를 가져오는 중 오류 발생:", error);
//       return null;
//     }
//   };

//   // 애플리케이션 시작 시 세션 스토리지를 확인합니다.
//   useEffect(() => {
//     const token = sessionStorage.getItem("authToken");
//     if (token) {
//       fetchUserProfile(token).then((user) => {
//         if (user) {
//           setAuth({ token, user });
//         } else {
//           // 토큰이 유효하지 않다면 세션 스토리지에서 제거합니다.
//           sessionStorage.removeItem("authToken");
//         }
//       });
//     }
//   }, []);

//   // 로그인 함수입니다.
//   const login = async (token) => {
//     const user = await fetchUserProfile(token);
//     if (user) {
//       setAuth({ token, user });
//       sessionStorage.setItem("authToken", token);
//     } else {
//       console.error("로그인 실패: 유효하지 않은 토큰");
//     }
//   };

//   // 로그아웃 함수입니다.
//   const logout = () => {
//     setAuth({ token: null, user: null });
//     sessionStorage.removeItem("authToken");
//   };

//   return (
//     <AuthContext.Provider value={{ auth, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthProvider, AuthContext };
