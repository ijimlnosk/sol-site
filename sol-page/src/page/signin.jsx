import { useForm } from "react-hook-form";
import Input from "../components/commons/input";
import { postSignin } from "../libs/axios/user";
import { setSessionToken } from "../libs/auth/storage-manager";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignInPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const authData = {
            email: data.email,
            password: data.password,
        };

        try {
            const response = await postSignin({
                email: authData.email,
                password: authData.password,
            });

            const accessToken = response.token;

            if (response.message === "로그인 성공") {
                setSessionToken(accessToken);
                navigate("/");
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <SignInForm onSubmit={handleSubmit(onSubmit)}>
                <Input
                    register={register}
                    registerKey="email"
                    title="email"
                    errors={errors}
                    placeholder="이메일을 입력하세요"
                />
                <Input
                    register={register}
                    registerKey="password"
                    title="password"
                    type="password"
                    errors={errors}
                    placeholder="비밀번호를 입력하세요"
                />
                <button type="submit">로그인</button>
            </SignInForm>
        </>
    );
};
export default SignInPage;

const SignInForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
