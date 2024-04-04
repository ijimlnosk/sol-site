import styled from "styled-components";
import spacing from "../../constants/design-token/spacing";
import { sizes } from "../../constants/design-token/size";
import { colors } from "../../constants/design-token/color";

/**
 *
 * @param {string} title - 보여줄 프로젝트의 제목
 * @param {string} imgSrc - 보여줄 프로젝트의 포스터
 * @param {Array} members - 보여줄 프로젝트의 참여자
 * @param {string} period - 보여줄 프로젝트의 기간
 * @param {string} content - 보여줄 프로젝트의 간략한 내용
 * @param {string} url - 이동할 외부 링크 url
 * @returns
 */

const PageCard = ({ title, imgSrc, members, period, content, url }) => {
    const NaviToUrl = () => {
        window.open(url, "_blank");
    };

    return (
        <>
            <Wrapper>
                <Title>{title}</Title>
                <SecondBanner>
                    <ImgBox>
                        <Img src={imgSrc} />
                    </ImgBox>
                    <TextBox>
                        <TextWrpper>
                            참여자 : <br />
                            {members.map((member, index) => (
                                <Span key={index}> {member}</Span>
                            ))}
                        </TextWrpper>
                        <P>
                            프로젝트 기간 : <br />
                            {period}
                        </P>
                    </TextBox>
                </SecondBanner>
                <BottomBox>
                    <ContentText>{content}</ContentText>
                </BottomBox>
                <Button onClick={() => NaviToUrl()}>이동하기</Button>
            </Wrapper>
        </>
    );
};

export default PageCard;

const Wrapper = styled.div`
    width: 400px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    box-shadow: 2px 2px 4px #000;
    padding: ${spacing.small};
`;

const Title = styled.h2`
    padding-bottom: ${spacing.medium};
`;

const SecondBanner = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const ImgBox = styled.div`
    width: 200px;
    height: 300px;
`;

const Img = styled.img`
    width: 200px;
    height: 300px;
    border-radius: 8px;
    border: 1px solid ${colors.BLACK.deepBlack};
`;

const TextBox = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
`;

const TextWrpper = styled.div`
    padding: ${spacing.large} ${spacing.medium};
`;

const Span = styled.span``;

const P = styled.p`
    padding: ${spacing.large} ${spacing.medium};
    font-size: ${sizes.fontSize.default};
`;

const BottomBox = styled.div``;

const ContentText = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    width: 80%;
    height: 30px;
    border-radius: 8px;
    cursor: pointer;
`;
