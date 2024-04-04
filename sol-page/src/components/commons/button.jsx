import { SButton } from "../../style/button.style";

const Button = ({ theme, size, disabled, $isActive, onClick, children }) => {
    const disabledTheme = "firstTheme";

    const buttonTheme = disabled ? disabledTheme : theme;

    return (
        <SButton
            theme={buttonTheme}
            size={size}
            onClick={onClick}
            disabled={disabled}
            isActive={$isActive}
        >
            {children}
        </SButton>
    );
};
export default Button;
