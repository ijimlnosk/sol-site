import { useForm } from "react-hook-form";
import Box from "../commons/box";
import Spacer from "../commons/spacer";
import spacing from "../../constants/design-token/spacing";
import Input from "../commons/input";
import styled from "styled-components";
import AddImage from "./addImage";
import { useSelector } from "react-redux";
import Button from "../commons/button";
import { createProject } from "../../libs/axios/projects";

const FristForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const image = useSelector((state) => state.image);

    console.log(image, "image");

    const submitProject = async (data) => {
        try {
            const projectData = {
                ...data,
                imgSrc: image,
            };

            console.log(projectData, "projectData");

            const responseData = await createProject(projectData);

            console.log(responseData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box>
            <AppProjectBox onSubmit={handleSubmit(submitProject)}>
                <Spacer width={spacing.medium} height={spacing.medium} />
                <Input
                    theme={"creamWhite"}
                    size={"small"}
                    title="프로젝트 이름"
                    type="text"
                    register={register}
                    registerKey="title"
                    errors={errors}
                />
                <Spacer width={spacing.medium} height={spacing.medium} />

                <AddImage />

                <Spacer width={spacing.medium} height={spacing.medium} />

                <Input
                    theme={"creamWhite"}
                    size={"small"}
                    title="프로젝트 기간"
                    type="text"
                    register={register}
                    registerKey="period"
                    errors={errors}
                />
                <Spacer width={spacing.medium} height={spacing.medium} />

                <Input
                    theme={"creamWhite"}
                    size={"small"}
                    title="간단한 설명을 입력 해 주세요"
                    type="text"
                    register={register}
                    registerKey="content"
                    errors={errors}
                />
                <Spacer width={spacing.medium} height={spacing.medium} />

                <Button type={"submit"} size={"medium"} theme={"firstTheme"}>
                    저장하기
                </Button>
            </AppProjectBox>
        </Box>
    );
};
export default FristForm;

const AppProjectBox = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
