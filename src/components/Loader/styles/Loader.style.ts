import styled, { keyframes } from "styled-components";

interface LoaderProps {
  color?: string;
  size?: "lg" | "md" | "sm";
  standalone?: boolean;
}

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.span<LoaderProps>`
  width: ${(props) => {
    if (props.standalone) {
      switch (props.size) {
        case "lg":
          return "30px";
        case "md":
          return "20px";
        case "sm":
          return "10px";
        default:
          return "20px";
      }
    } else {
      // Futuramente, criar uma props para identificar se é botão, etc...
      switch (props.size) {
        case "lg":
          return "20px";
        case "md":
          return "20px";
        case "sm":
          return "16px";
      }
    }
  }};
  height: ${(props) => {
    if (props.standalone) {
      switch (props.size) {
        case "lg":
          return "30px";
        case "md":
          return "20px";
        case "sm":
          return "10px";
        default:
          return "20px";
      }
    } else {
      switch (props.size) {
        case "lg":
          return "20px";
        case "md":
          return "20px";
        case "sm":
          return "20px";
      }
    }
  }};
  border-radius: 50%;
  border-top: 3px solid ${(props) => props.color || "#000"}; 
  border-right: 3px solid transparent;
  animation: ${spinAnimation} 1s linear infinite;
  display: inline-flex;
`;
