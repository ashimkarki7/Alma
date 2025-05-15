import React, { MouseEvent } from "react";
import styles from "./button.module.css";

type ButtonProps = {
  title: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  title,
  onClickHandler,
  type = "button",
  className = "",
}) => {
  return (
    <>
      <button
        className={`${styles.buttonLink} ${className}`}
        onClick={(event: MouseEvent<HTMLButtonElement>) =>
          onClickHandler(event)
        }
      >
        {title}
      </button>
    </>
  );
};

export default Button;
