import styled, { css } from "styled-components";
import { colors } from "../constants/design-token/color";
import { sizes } from "../constants/design-token/size";

const ColorCss = {
    firstTheme: {
        css: css`
            color: ${colors.BLACK.deepGrayBlack};
            background-color: ${colors.WHITE.offWhite};
            border: 1px solid ${colors.BLACK.richGrayBlack};
        `,
        activeBackground: `${colors.WHITE.paleGray}cc`,
    },
    secondTheme: {
        css: css`
            color: ${colors.WHITE.lightSilver};
            background-color: ${colors.BLACK.nearlyBlack};
            border: 1px solid ${colors.GRAY.veryLightGray};
        `,
        activeBackground: `${colors.WHITE.lightGray}cc`,
    },
};

const SizeCss = {
    xsmall: css`
        width: ${sizes.button.xsmall.width};
        height: ${sizes.button.xsmall.height};
        font-size: ${sizes.fontSize.small};
    `,
    small: css`
        width: ${sizes.button.small.width};
        height: ${sizes.button.small.height};
        font-size: ${sizes.fontSize.small};
    `,
    medium: css`
        width: ${sizes.button.medium.width};
        height: ${sizes.button.medium.height};
        font-size: ${sizes.fontSize.medium};
    `,
    large: css`
        width: ${sizes.button.large.width};
        height: ${sizes.button.large.height};
        font-size: ${sizes.fontSize.large};
    `,
};

export const SButton = styled.button`
    border-radius: 4px;
    cursor: pointer;

    ${({ theme }) => ColorCss[theme]?.css}
    ${({ size }) => SizeCss[size]}

    &:active {
        transform: scale(0.98);
        background-color: ${({ theme }) => ColorCss[theme]?.activeBackground};
    }
    &:hover {
        background-color: ${colors.GRAY.mediumGray};
    }
`;
