import styled from "styled-components";
import Box from "../components/commons/box";
import { colors } from "../constants/design-token/color";
import { useNavigate } from "react-router-dom";
import { BsArrowDownShort } from "react-icons/bs";
import PageCard from "../components/commons/pageCard";
import { getProjectAll } from "../libs/axios/projects";
import { useEffect, useState } from "react";

const MainPage = () => {
    const [data, setData] = useState();
    const navigate = useNavigate();

    const fetchProject = async () => {
        try {
            const projects = await getProjectAll();
            console.log("프로젝트 데이터: ", projects);
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
                    <PageCard
                        title={"OMEGA BOX3"}
                        imgSrc={
                            "https://i.ibb.co/5ryt5n1/omegabox3-poster.webp"
                        }
                        members={["김진솔", "최하영", "허진욱"]}
                        period={"2023.12.17-2023.12.25"}
                        content={"TMDB API를 이용한 영화 소개 사이트"}
                        url={"https://omegabox3.soljk.com"}
                    />

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
