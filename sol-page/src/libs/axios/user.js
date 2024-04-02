import { axiosInstance } from "./axios-instance";

export const getUserInfo = async () => {
    const response = await axiosInstance.get("/userinfo");
    return response.data;
};

export const postSignin = async ({ email, password }) => {
    const response = await axiosInstance.post("/signin", {
        email,
        password,
    });
    return response.data;
};
