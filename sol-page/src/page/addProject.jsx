import { useForm } from "react-hook-form";
import Box from "../components/commons/box";
import Input from "../components/commons/input";
import styled from "styled-components";
import Button from "../components/commons/button";
import { colors } from "../constants/design-token/color";
import Spacer from "../components/commons/spacer";
import spacing from "../constants/design-token/spacing";
import { BsPlusLg } from "react-icons/bs";

const AddProject = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    return (
        <Box>
            <Wrapper>
                <div>프로젝트 추가 페이지</div>
                <AppProjectBox onSubmit={handleSubmit}>
                    <Spacer width={spacing.medium} height={spacing.medium} />
                    <Input
                        theme={"creamWhite"}
                        size={"small"}
                        title="프로젝트 이름"
                        type="text"
                        register={register}
                        registerKey="projectName"
                        errors={errors}
                    />
                    <Spacer width={spacing.medium} height={spacing.medium} />
                    <P>상품 포스터 추가하기</P>
                    <AddImgBox>
                        <BsPlusLg
                            size={"100px"}
                            color={colors.GRAY.mediumGray}
                        />
                    </AddImgBox>
                    <Spacer width={spacing.medium} height={spacing.medium} />
                    <Input
                        theme={"creamWhite"}
                        size={"small"}
                        title="참여자"
                        type="text"
                        register={register}
                        registerKey="projectName"
                        errors={errors}
                    />
                    <Spacer width={spacing.medium} height={spacing.medium} />
                    <Button theme={"firstTheme"} size={"xsmall"}>
                        추가
                    </Button>
                    <Spacer width={spacing.medium} height={spacing.medium} />
                </AppProjectBox>
            </Wrapper>
        </Box>
    );
};
export default AddProject;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const P = styled.p`
    padding: 10px 0;
`;

const AddImgBox = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid ${colors.GRAY.mediumLightGray};
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const AppProjectBox = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
