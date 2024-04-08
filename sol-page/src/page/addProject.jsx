import FristForm from "../components/addProject/firstForm";
import Box from "../components/commons/box";
import styled from "styled-components";

const AddProject = () => {
    return (
        <Box>
            <Wrapper>
                <div>프로젝트 추가 페이지</div>
                <FristForm />
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
