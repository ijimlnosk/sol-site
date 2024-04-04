import { useForm } from "react-hook-form";
import Box from "../components/commons/box";
import Input from "../components/commons/input";
import styled from "styled-components";
import Button from "../components/commons/button";
import { colors } from "../constants/design-token/color";
import Spacer from "../components/commons/spacer";
import spacing from "../constants/design-token/spacing";
import { BsPlusLg } from "react-icons/bs";
import { useState } from "react";

const AddProject = () => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const [participants, setParticipants] = useState([]);

    const participantName = watch("participantName");

    const addParticipant = () => {
        if (participantName) {
            setParticipants([...participants, participantName]);
            setValue("participantName", "");
        }
    };

    const removeParticipant = (RemoveIndex) => {
        setParticipants(
            participants.filter((_, index) => index !== RemoveIndex)
        );
    };

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
                        registerKey="participantName"
                        errors={errors}
                    />
                    <Spacer width={spacing.small} height={spacing.small} />
                    <ParticipantWrapper>
                        {participants.map((participant, index) => (
                            <ParticipantNameDiv key={index}>
                                {participant}
                                <Button
                                    type={"button"}
                                    onClick={() => removeParticipant(index)}
                                >
                                    X
                                </Button>
                            </ParticipantNameDiv>
                        ))}
                    </ParticipantWrapper>
                    <Spacer width={spacing.medium} height={spacing.medium} />
                    <Button
                        theme={"firstTheme"}
                        size={"xsmall"}
                        onClick={addParticipant}
                        type="button"
                    >
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
    background-color: ${colors.WHITE.cream};
`;

const AppProjectBox = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ParticipantWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const ParticipantNameDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid ${colors.GRAY.mediumLightGray};
    border-radius: 8px;
    padding: 4px;
`;
