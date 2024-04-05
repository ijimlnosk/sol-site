import { useForm } from "react-hook-form";
import Box from "../components/commons/box";
import Input from "../components/commons/input";
import styled from "styled-components";
import Button from "../components/commons/button";
import { colors } from "../constants/design-token/color";
import Spacer from "../components/commons/spacer";
import spacing from "../constants/design-token/spacing";
import { useState } from "react";
import AddImage from "../components/addProject/addImage";

import {
    addProjectMembers,
    addProjectSkills,
    createProject,
} from "../libs/axios/projects";
import { useSelector } from "react-redux";

const AddProject = () => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const [participants, setParticipants] = useState([]);
    const [skills, setSkills] = useState([]);
    const image = useSelector((state) => state.image);

    const participantName = watch("participantName");
    const skillName = watch("skillName");

    const submitProject = async (data) => {
        try {
            const projectData = new FormData();
            projectData.append("title", data.title);
            projectData.append("period", data.period);
            projectData.append("content", data.content);
            projectData.append("requirements", data.requirements);
            projectData.append("url", data.url);

            // 이미지가 있으면 projectData에 추가
            if (image) {
                projectData.append("imgSrc", image);
            }

            console.log(projectData);

            // 참여자와 기술 스택은 별도의 API 호출로 처리될 수 있으므로 여기서는 무시
            const createdProject = await createProject(projectData);
            console.log("Created project: ", createdProject);

            // 프로젝트 생성 성공 후 ID를 사용하여 참여자와 기술 스택 추가
            const projectId = createdProject.id;
            console.log(projectId, "projectId");
            if (projectId) {
                await Promise.all([
                    addProjectMembers(projectId, participants),
                    addProjectSkills(projectId, skills),
                ]);
                console.log(participants, "participantName");
                console.log(skills, "skillName");
                console.log("Members and skills added to tje project");
            }
        } catch (error) {
            console.error("프로젝트 생성 실패: ", error);
        }
    };

    console.log(participants, "participantName");
    console.log(skills, "skillName");

    const addParticipant = (name, state, setState, fieldName) => {
        if (name) {
            setState([...state, name]);
            setValue(fieldName, "");
        }
    };

    const removeParticipant = (RemoveIndex, state, setState) => {
        setState(state.filter((_, index) => index !== RemoveIndex));
    };

    return (
        <Box>
            <Wrapper>
                <div>프로젝트 추가 페이지</div>
                <AppProjectBox onSubmit={handleSubmit(submitProject)}>
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

                    <AddImage />

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
                    <AddWrapper>
                        {participants.map((participant, index) => (
                            <ToggleNameDiv key={index}>
                                {participant}
                                <Button
                                    type={"button"}
                                    onClick={() =>
                                        removeParticipant(
                                            index,
                                            participants,
                                            setParticipants
                                        )
                                    }
                                >
                                    X
                                </Button>
                            </ToggleNameDiv>
                        ))}
                    </AddWrapper>
                    <Spacer width={spacing.medium} height={spacing.medium} />
                    <Button
                        theme={"firstTheme"}
                        size={"xsmall"}
                        onClick={() =>
                            addParticipant(
                                participantName,
                                participants,
                                setParticipants,
                                "participantName"
                            )
                        }
                        type="button"
                    >
                        추가
                    </Button>
                    <Spacer width={spacing.medium} height={spacing.medium} />

                    <Input
                        theme={"creamWhite"}
                        size={"small"}
                        title="기술 스택"
                        type="text"
                        register={register}
                        registerKey="skillName"
                        errors={errors}
                    />
                    <Spacer width={spacing.medium} height={spacing.medium} />
                    <AddWrapper>
                        {skills.map((participant, index) => (
                            <ToggleNameDiv key={index}>
                                {participant}
                                <Button
                                    type={"button"}
                                    onClick={() =>
                                        removeParticipant(
                                            index,
                                            skills,
                                            setSkills
                                        )
                                    }
                                >
                                    X
                                </Button>
                            </ToggleNameDiv>
                        ))}
                    </AddWrapper>
                    <Spacer width={spacing.medium} height={spacing.medium} />
                    <Button
                        theme={"firstTheme"}
                        size={"xsmall"}
                        onClick={() =>
                            addParticipant(
                                skillName,
                                skills,
                                setSkills,
                                "skillName"
                            )
                        }
                        type="button"
                    >
                        추가
                    </Button>

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

                    <Button
                        type={"submit"}
                        size={"medium"}
                        theme={"firstTheme"}
                    >
                        저장하기
                    </Button>
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

const AppProjectBox = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const AddWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const ToggleNameDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid ${colors.WHITE.offWhite};
    background-color: ${colors.GRAY.mediumGray};
    border-radius: 8px;
    padding: 4px;
`;
