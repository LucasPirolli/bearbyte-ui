import styled, { css } from "styled-components";

interface ButtonProps {
  color?: string;
  backgroundcolor?: string;
  fontWeight?: string | number;
  borderRadius?: string | number;
  variant?: "ghost" | "outline" | "solid";
  size?: "lg" | "md" | "sm";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
}

const sizeStyles = {
  lg: css`
    height: 3rem;
    padding: 0 1rem;
    font-size: 1rem;
  `,
  md: css`
    height: 2.5rem;
    padding: 0 1rem;
    font-size: 0.875rem;
  `,
  sm: css`
    height: 2rem;
    padding: 0 0.75rem;
    font-size: 0.75rem;
  `,
};

const variantStyles = {
  solid: css<ButtonProps>`
    background-color: ${(props) => props.backgroundcolor || "#000"};
    color: ${(props) => props.color || "#fff"};
    border: none;
  `,
  outline: css<ButtonProps>`
    background-color: transparent;
    color: ${(props) => props.color || "#000"};
    border: 1px solid ${(props) => props.color || "#000"};
  `,
  ghost: css<ButtonProps>`
    background-color: transparent;
    color: ${(props) => props.color || "#000"};
    border: none;
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  font-weight: ${(props) => props.fontWeight || 450};
  border-radius: ${(props) => props.borderRadius || "0rem"};
  display: inline-flex;
  align-items: center;
  .left-icon {
    margin-right: 0.5rem;
    display: inline-flex;
    align-self: center;
  }
  .right-icon {
    margin-left: 0.5rem;
    display: inline-flex;
    align-self: center;
  }
  .bearbyte-button-spinner {
    display: inline-flex;
    &.start {
      margin-right: 0.5rem;
    }
    &.end {
      margin-left: 0.5rem;
    }
  }
  ${({ size }) => size && sizeStyles[size]}
  ${({ variant }) => variant && variantStyles[variant || "solid"]}
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}
`;


// ${(props) =>
//     props.leftIcon &&
//     !props.isLoading &&
//     css<ButtonProps>`
//       padding-left: ${props.size === "lg" || props.size === "md"
//         ? "0.75rem"
//         : "0.5rem"};
//       padding-right: 1rem;
//     `}
//     ${(props) =>
//     props.rightIcon &&
//     !props.isLoading &&
//     css`
//       padding-left: ${props.size === "lg" || props.size === "md"
//         ? "1rem"
//         : "0.75rem"};
//       padding-right: ${props.size === "lg" || props.size === "md"
//         ? "0.75rem"
//         : "0.5rem"};
//     `}
//     ${(props) =>
//     props.leftIcon &&
//     props.rightIcon &&
//     !props.isLoading &&
//     css`
//       padding-left: ${props.size === "sm" ? "0.5rem" : "0.75rem"};
//       padding-right: ${props.size === "sm" ? "0.5rem" : "0.75rem"};
//     `}
