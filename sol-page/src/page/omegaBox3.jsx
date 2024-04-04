import styled from "styled-components";
import { colors } from "../constants/design-token/color";
import { BsArrowDownShort } from "react-icons/bs";

const OmegaBox3 = () => {
    return (
        <BannerBox>
            <A
                href="https://omegabox3.soljk.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <IconWrapper>
                    <BsArrowDownShort />
                </IconWrapper>
            </A>
        </BannerBox>
    );
};
export default OmegaBox3;

const A = styled.a`
    width: 100%;
    height: 100px;
    text-decoration: none;
    color: ${colors.BLACK.default};
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

const BannerBox = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 0;
`;
