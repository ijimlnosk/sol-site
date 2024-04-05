import styled from "styled-components";
import { colors } from "../../constants/design-token/color";
import Button from "../commons/button";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isAddProjectPage = location.pathname === "/addProject";

    const onAddProjectNavi = () => {
        if (!isAddProjectPage) {
            navigate("/addProject");
        }
    };

    const onNavi = () => {
        navigate("");
    };

    return (
        <Wrapper>
            <LogoBox>
                <a
                    href="https://github.com/ijimlnosk"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LogoImg src="https://i.ibb.co/82V9Y1K/image.webp" />
                </a>
            </LogoBox>
            <Title onClick={() => onNavi()}>Jinsol&rsquo;s Page</Title>
            <AddProject>
                <Button
                    size={"small"}
                    theme={"secondTheme"}
                    onClick={() => onAddProjectNavi()}
                    disabled={isAddProjectPage}
                >
                    추가하기
                </Button>
            </AddProject>
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
    top: 0;
    border: 1px solid ${colors.GRAY.mediumDarkGray};
    background-color: ${colors.WHITE.cream};
    z-index: 999;
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
    cursor: pointer;
`;

const AddProject = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 20px;
`;
