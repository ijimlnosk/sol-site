import styled from "styled-components";
import layout from "../../constants/design-token/layout";

const Box = ({ children }) => {
    return (
        <Wrapper>
            <Container>{children}</Container>
        </Wrapper>
    );
};
export default Box;

const Wrapper = styled.div`
    width: 100%;
    padding-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: ${layout.container};
    display: flex;
    justify-content: center;
    align-items: center;
`;
