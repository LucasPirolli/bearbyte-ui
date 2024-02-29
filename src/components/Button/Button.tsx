import React from "react";
import { StyledButton } from "./styles/Button.style";
import Loader from "../Loader/Loader";

interface ButtonProps {
  color?: string;
  bgColor?: string;
  fontWeight?: string | number;
  borderRadius?: string;
  size?: "lg" | "md" | "sm";
  variant?: "ghost" | "outline" | "solid";
  disabled?: boolean;
  children?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  spinnerPlacement?: "start" | "end";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  color,
  bgColor,
  fontWeight,
  borderRadius,
  size = "md",
  variant = "solid",
  disabled = false,
  leftIcon,
  rightIcon,
  isLoading = false,
  spinnerPlacement = "start",
  onClick,
  children,
}) => {
  return (
    <StyledButton
      className="bearbyte-button"
      color={color}
      backgroundcolor={bgColor}
      fontWeight={fontWeight}
      borderRadius={borderRadius}
      size={size}
      variant={variant}
      disabled={disabled || isLoading}
      isLoading={isLoading}
      // leftIcon={leftIcon}
      // rightIcon={rightIcon}
      onClick={onClick}
    >
      {isLoading && spinnerPlacement === "start" ? (
        <div className="bearbyte-button-spinner start">
          <Loader color={color} size={size} />
        </div>
      ) : (
        !isLoading && leftIcon && <span className="left-icon">{leftIcon}</span>
      )}
      {children}
      {isLoading && spinnerPlacement === "end" ? (
        <div className="bearbyte-button-spinner end">
          <Loader color={color} size={size} />
        </div>
      ) : (
        !isLoading &&
        rightIcon && <span className="right-icon">{rightIcon}</span>
      )}
    </StyledButton>
  );
};

export default Button;
