import { axiosInstance } from "./axios-instance";

// 모든 프로젝트 데이터 가져오기
export const getProjectAll = async () => {
    try {
        const response = await axiosInstance.get("/projects");
        return response.data;
    } catch (error) {
        console.error("프로젝트 데이터 가져오기 오류: ", error);
        throw error;
    }
};

// 특정 프로젝트 데이터 가져오기
export const getProjectById = async (projectId) => {
    try {
        const response = await axiosInstance.get(`/projects/${projectId}`);
        return response.data;
    } catch (error) {
        console.error("특정 프로젝트 데이터 가져오기 오류: ", error);
        throw error;
    }
};

// 프로젝트 멤버 데이터 가져오기
export const getProjectMembers = async (projectId) => {
    try {
        const response = await axiosInstance.get(
            `/projects/${projectId}/members`
        );
        return response.data;
    } catch (error) {
        console.error("프로젝트 멤버 데이터 가져오기 오류: ", error);
        throw error;
    }
};

// 프로젝트 기술 스택 데이터 가져오기
export const getProjectSkills = async (projectId) => {
    try {
        const response = await axiosInstance.get(
            `/projects/${projectId}/skills`
        );
        return response.data;
    } catch (error) {
        console.error("프로젝트 기술 스택 데이터 가져오기 오류: ", error);
        throw error;
    }
};
