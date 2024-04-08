import { BsPlusLg } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { colors } from "../../constants/design-token/color";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeImage, setImage } from "../../libs/redux/action/action";

const AddImage = () => {
    const dispatch = useDispatch();

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const newImage = e.target.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                const base64String = e.target.result;
                dispatch(setImage(base64String));
            };

            reader.readAsDataURL(newImage);
        }
    };

    const handleRemoveImage = () => {
        dispatch(removeImage());
    };

    const image = useSelector((state) => state.image);

    return (
        <div>
            <P>상품 포스터 추가하기</P>
            {!image && (
                <AddImgBox>
                    <label htmlFor="imgSrc">
                        <BsPlusLg
                            size={"100px"}
                            color={colors.GRAY.mediumGray}
                        />
                    </label>
                    <input
                        id="imgSrc"
                        type="file"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                    />
                </AddImgBox>
            )}
            {image && (
                <ImageContainer>
                    <Img src={image} alt="Uploaded" />
                    <RemoveBtn onClick={handleRemoveImage}>
                        <BsX size={"30px"} color={colors.SYSTEM.error} />
                    </RemoveBtn>
                </ImageContainer>
            )}
        </div>
    );
};

export default AddImage;

const P = styled.p`
    padding: 10px 0;
`;

const AddImgBox = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid ${colors.GRAY.mediumLightGray};
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${colors.WHITE.cream};
`;

const Img = styled.img`
    width: 200px;
    height: 200px;
    padding-top: 10px;
`;

const ImageContainer = styled.div`
    position: relative;
`;

const RemoveBtn = styled.button`
    position: absolute;
    top: 10px;
    right: -4px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;
