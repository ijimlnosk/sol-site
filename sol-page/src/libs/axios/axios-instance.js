import axios from "axios";
import { getSessionToken } from "../auth/storage-manager";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_PEA_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

const token = getSessionToken();

// 이미지 업로드 인스턴스
export const imgAxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_PEA_BASE_URL,
    headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
});

// 모든 요청을 시작하기 전에 실행됨
axiosInstance.interceptors.request.use(
    (config) => {
        const token = getSessionToken(); // 세션에서 토큰을 가져옴.
        if (token) {
            // 토큰이 존재하면, 요청 헤더에 Authorization 추가합니다.
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config; // 수정된 설정으로 요청을 계속 진행
    },
    (error) => {
        // 요청 설정 시 오류가 발생하면, 호출하는 쪽으로 오류를 전달
        return Promise.reject(error);
    }
);
