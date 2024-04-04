import styled from "styled-components";
import Box from "../components/commons/box";
import { colors } from "../constants/design-token/color";
import { useNavigate } from "react-router-dom";
import { BsArrowDownShort } from "react-icons/bs";
import PageCard from "../components/commons/pageCard";
import { getProjectAll, getProjectMembers } from "../libs/axios/projects";
import { useEffect, useState } from "react";

const MainPage = () => {
    const [data, setData] = useState();
    const navigate = useNavigate();

    const fetchProject = async () => {
        try {
            const projects = await getProjectAll();
            const projectWithMembers = await Promise.all(
                projects.map(async (project) => {
                    const members = await getProjectMembers(project.id);
                    return { ...project, members };
                })
            );
            console.log("프로젝트 데이터: ", projectWithMembers);
            setData(projectWithMembers);
        } catch (error) {
            console.error("데이터를 가져오는데 실패했습니다. ", error);
        }
    };

    useEffect(() => {
        fetchProject();
    }, []);

    const onNavi = (url) => {
        navigate(url);
    };

    return (
        <>
            <Box>
                <Container>
                    {data?.map((item) => (
                        <PageCard
                            key={item.id}
                            title={item.title}
                            imgSrc={item.imgSrc}
                            members={item.members?.map((member) => member.name)}
                            period={item.period}
                            content={item.content}
                            url={item.url}
                        />
                    ))}
                    <BannerBox>
                        <Wrapper onClick={() => onNavi("/mobi")}>
                            MOBI로 이동
                            <IconWrapper>
                                <BsArrowDownShort />
                            </IconWrapper>
                        </Wrapper>
                    </BannerBox>
                </Container>
            </Box>
        </>
    );
};
export default MainPage;

const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    background-color: ${colors.GRAY.veryLightGray};
    transform-origin: left center;
    cursor: pointer;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const BannerBox = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 0;
`;

const IconWrapper = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        transform: translateY(10px);
        transition: 0.5s ease-in-out;
    }
`;
