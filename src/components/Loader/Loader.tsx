import React from "react";
import { StyledLoader } from "./styles/Loader.style";

interface LoaderProps {
  color?: string;
  size?: "lg" | "md" | "sm";
  standalone?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ color, size, standalone }) => {
  return <StyledLoader color={color} size={size} standalone={standalone} />;
};

export default Loader;
