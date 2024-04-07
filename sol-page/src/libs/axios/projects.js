import { axiosInstance } from "./axios-instance";

// 프로젝트 생성
export const createProject = async (projectData) => {
    try {
        const response = await axiosInstance.post("/projects", projectData);
        return response.data;
    } catch (error) {
        console.error("프로젝트 생성 오류: ", error);
        throw error;
    }
};

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

// 프로젝트 멤버 데이터 추가하기
export const addProjectMembers = async (projectId, members) => {
    try {
        const response = await axiosInstance.post(
            `/projects/${projectId}/members`,
            { members }
        );
        return response.data;
    } catch (error) {
        console.error("프로젝트 멤버 데이터 추가 오류: ", error);
        throw error;
    }
};

// 멤버 삭제
export const deleteProjectMembers = async (projectId, memberId) => {
    try {
        const response = await axiosInstance.delete(
            `/project/${projectId}/members/${memberId}`
        );
        return response.data;
    } catch (error) {
        console.error("멤버 삭제 오류: ", error);
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

// 프로젝트 기술 스택 데이터 추가
export const addProjectSkills = async (projectId, skills) => {
    try {
        const response = await axiosInstance.post(
            `/projects/${projectId}/skills`,
            { skills }
        );
        return response.data;
    } catch (error) {
        console.error("프로젝트 기술 스택 데이터 추가 오류: ", error);
        throw error;
    }
};

// 기술 스택 삭제
export const deleteProjectSkills = async (projectId, skillId) => {
    try {
        const response = await axiosInstance.delete(
            `/project/${projectId}/members/${skillId}`
        );
        return response.data;
    } catch (error) {
        console.error("기술 스택 삭제 오류: ", error);
        throw error;
    }
};
