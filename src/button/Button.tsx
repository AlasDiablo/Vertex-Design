import './Button.scss';
import type { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    Partial<{
        revers: boolean;
        animationStyle: 'block' | 'circle';
        variant: boolean;
    }>;

const Button = ({ revers = false, animationStyle = 'block', variant = false, children, ...props }: ButtonProps) => {
    return (
        <button vertex-button={`revers:${revers} animationStyle:${animationStyle} variant:${variant}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
