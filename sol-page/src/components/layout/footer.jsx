import styled from "styled-components";
import { colors } from "../../constants/design-token/color";

const Footer = () => {
    return <Wrapper>Footer</Wrapper>;
};
export default Footer;

const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 0;
    border: 1px solid ${colors.BLACK.darkBlack};
`;
