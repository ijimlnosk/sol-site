import styled from "styled-components";
import { colors } from "../../constants/design-token/color";

const Header = () => {
    return (
        <Wrapper>
            <LogoBox>
                <LogoImg src="https://i.ibb.co/82V9Y1K/image.webp" />
            </LogoBox>
            <Title>Jinsol&rsquo;s Page</Title>
            <div></div>
        </Wrapper>
    );
};
export default Header;

const Wrapper = styled.div`
    width: 100%;
    height: 80px;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    position: fixed;
    border: 1px solid ${colors.GRAY.mediumDarkGray};
`;

const LogoBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoImg = styled.img`
    width: 70px;
    height: 70px;
    border: 1px solid ${colors.BLACK.darkBlack};
    border-radius: 50%;
`;

const Title = styled.h1`
    text-align: center;
`;
