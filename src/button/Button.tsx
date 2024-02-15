import styled from 'styled-components';
import type { ButtonHTMLAttributes } from 'react';

type ButtonThemeProps = {
    revers: boolean;
    animationStyle: 'block' | 'circle';
    variant: boolean;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & Partial<ButtonThemeProps>;

const StyledCircleButton = styled.button<Omit<ButtonThemeProps, 'animationStyle'>>`
    padding: 12px;
    background-color: #dee2e6;
    transition-duration: 0.25s;
    border: none;
    border-left: solid 2px rgba(0, 255, 255, 0.75);
    border-right: solid 2px rgba(0, 255, 255, 0.75);
    clip-path: ${(props) => {
        const size = !props.variant ? '24' : '12';
        if (!props.revers) {
            return `polygon(${size}px 0%, 100% 0%, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0% 100%, 0% ${size}px)`;
        }
        return `polygon(calc(100% - ${size}px) 0%, 100% ${size}px, 100% 100%, ${size}px 100%, 0% calc(100% - ${size}px), 0% 0%)`;
    }};
    &:hover,
    &:focus {
        background-color: #d3d9de;
        ${(props) => {
            if (props.disabled) {
                return;
            }
            const size = !props.variant ? '24' : '12';
            if (!props.revers) {
                return `clip-path: polygon(calc(100% - ${size}px) 0%, 100% ${size}px, 100% 100%, ${size}px 100%, 0% calc(100% - ${size}px), 0% 0%)`;
            }
            return `clip-path: polygon(${size}px 0%, 100% 0%, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0% 100%, 0% ${size}px)`;
        }};
    }
    &:active {
        transition-duration: 0.05s;
        background-color: #b6bfc8;
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 0%);
    }
`;

const StyledBlockButton = styled.button<Omit<ButtonThemeProps, 'animationStyle'>>`
    padding: 12px;
    background-color: #dee2e6;
    transition-duration: 0.25s;
    border: none;
    border-left: solid 2px rgba(0, 255, 255, 0.75);
    border-right: solid 2px rgba(0, 255, 255, 0.75);
    clip-path: ${(props) => {
        const size = !props.variant ? '24' : '12';
        if (!props.revers) {
            return `polygon(${size}px 0%, 100% 0%, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0% 100%, 0% ${size}px)`;
        }
        return `polygon(calc(100% - ${size}px) 0%, 100% ${size}px, 100% 100%, ${size}px 100%, 0% calc(100% - ${size}px), 0% 0%)`;
    }};
    &:hover,
    &:focus {
        background-color: #d3d9de;
        ${(props) => {
            if (props.disabled) {
                return;
            }
            if (!props.revers) {
                return 'clip-path: polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)';
            }
            return 'clip-path: calc(100% - 8px) 0%, 100% 8px, 100% 100%, 8px 100%, 0% calc(100% - 8px), 0% 0%';
        }};
    }
    &:active {
        transition-duration: 0.05s;
        background-color: #b6bfc8;
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 0%);
    }
`;

const Button = ({ animationStyle = 'block', variant = false, revers = false, children, ...props }: ButtonProps) => {
    if (animationStyle === 'circle') {
        return (
            <StyledCircleButton variant={variant} revers={revers} {...props}>
                {children}
            </StyledCircleButton>
        );
    }

    return (
        <StyledBlockButton variant={variant} revers={revers} {...props}>
            {children}
        </StyledBlockButton>
    );
};

export default Button;
