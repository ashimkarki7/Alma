import React from "react";
import styles from "./button.module.css";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <>
      <button className={`${styles.buttonLink} ${className}`}>{title}</button>
    </>
  );
};

export default Button;
