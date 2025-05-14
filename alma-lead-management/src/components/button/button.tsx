import React from 'react';
import './button.scss';

type ButtonProps = {
    title: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
};


const Button: React.FC<ButtonProps> = ({ title,
                              onClick,
                              type = 'button',
                              className = ''}) => {
    return (
        <div className={`custom-button ${className}`}>
       <button>{title}</button>
        </div>
    );
};

export default Button;