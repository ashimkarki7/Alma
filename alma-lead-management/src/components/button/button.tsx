import React, { MouseEvent } from "react";
import styles from "./button.module.css";

type ButtonProps = {
  title: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  title,
  onClickHandler,
  className = "",
                                           disabled = false,
}) => {
  return (
    <>
      <button
          disabled={disabled}
        className={` ${className ? styles[`${className}`] : styles.buttonLink}`}
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
