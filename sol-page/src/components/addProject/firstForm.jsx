import { useForm } from "react-hook-form";
import Box from "../commons/box";
import Spacer from "../commons/spacer";
import spacing from "../../constants/design-token/spacing";
import Input from "../commons/input";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import Button from "../commons/button";
import { createProject, imgUpload } from "../../libs/axios/projects";
import { colors } from "../../constants/design-token/color";
import { removeImage, setImage } from "../../libs/redux/action/action";
import { BsPlusLg, BsX } from "react-icons/bs";

const FristForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const image = useSelector((state) => state.image);

    const dispatch = useDispatch();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                const src = loadEvent.target.result;
                dispatch(setImage(src));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        dispatch(removeImage());
    };

    console.log(image, "image");

    const submitProject = async (data) => {
        try {
            const formData = new FormData();
            formData.append("title", data.title);
            formData.append("period", data.period);
            formData.append("content", data.content);

            if (typeof image === "string" && image.startsWith("data:image")) {
                const response = await fetch(image);
                const blob = await response.blob();
                formData.append("image", blob, "upload.webp");
            }

            const responseImg = await imgUpload(formData);
            const responseData = await createProject(formData);
            console.log(responseData);
            console.log(responseImg);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box>
            <AppProjectBox onSubmit={handleSubmit(submitProject)}>
                <Spacer width={spacing.medium} height={spacing.medium} />
                <Input
                    theme={"creamWhite"}
                    size={"small"}
                    title="프로젝트 이름"
                    type="text"
                    register={register}
                    registerKey="title"
                    errors={errors}
                />
                <Spacer width={spacing.medium} height={spacing.medium} />

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
                                <BsX
                                    size={"30px"}
                                    color={colors.SYSTEM.error}
                                />
                            </RemoveBtn>
                        </ImageContainer>
                    )}
                </div>

                <Spacer width={spacing.medium} height={spacing.medium} />

                <Input
                    theme={"creamWhite"}
                    size={"small"}
                    title="프로젝트 기간"
                    type="text"
                    register={register}
                    registerKey="period"
                    errors={errors}
                />
                <Spacer width={spacing.medium} height={spacing.medium} />

                <Input
                    theme={"creamWhite"}
                    size={"small"}
                    title="간단한 설명을 입력 해 주세요"
                    type="text"
                    register={register}
                    registerKey="content"
                    errors={errors}
                />
                <Spacer width={spacing.medium} height={spacing.medium} />

                <Button type={"submit"} size={"medium"} theme={"firstTheme"}>
                    저장하기
                </Button>
            </AppProjectBox>
        </Box>
    );
};
export default FristForm;

const AppProjectBox = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

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
