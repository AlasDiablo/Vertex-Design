import styled from 'styled-components';
import type { ButtonHTMLAttributes } from 'react';

type ButtonThemeProps = {
    reverse: boolean;
    animationStyle: 'block' | 'circle';
    variant: boolean;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & Partial<ButtonThemeProps>;

const StyledCircleButton = styled.button<Omit<ButtonThemeProps, 'animationStyle'>>`
    padding: 12px;
    background-color: var(--vertex-grey-89);
    transition-duration: 0.25s;
    border: none;
    border-left: solid 2px var(--vertex-border-color);
    border-right: solid 2px var(--vertex-border-color);
    clip-path: ${(props) => {
        const size = !props.variant ? '24' : '12';
        if (!props.reverse) {
            return `polygon(${size}px 0%, 100% 0%, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0% 100%, 0% ${size}px)`;
        }
        return `polygon(calc(100% - ${size}px) 0%, 100% ${size}px, 100% 100%, ${size}px 100%, 0% calc(100% - ${size}px), 0% 0%)`;
    }};

    &:hover,
    &:focus {
        background-color: var(--vertex-grey-85);
        ${(props) => {
            if (props.disabled) {
                return;
            }
            const size = !props.variant ? '24' : '12';
            if (!props.reverse) {
                return `clip-path: polygon(calc(100% - ${size}px) 0%, 100% ${size}px, 100% 100%, ${size}px 100%, 0% calc(100% - ${size}px), 0% 0%)`;
            }
            return `clip-path: polygon(${size}px 0%, 100% 0%, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0% 100%, 0% ${size}px)`;
        }};
    }

    &:active {
        transition-duration: 0.05s;
        background-color: var(--vertex-grey-75);
        clip-path: ${(props) => {
            if (!props.reverse) {
                return 'polygon(100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)';
            }
            return 'polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 0%)';
        }};
    }
`;

const StyledBlockButton = styled.button<Omit<ButtonThemeProps, 'animationStyle'>>`
    padding: 12px;
    background-color: var(--vertex-grey-89);
    transition-duration: 0.25s;
    border: none;
    border-left: solid 2px var(--vertex-border-color);
    border-right: solid 2px var(--vertex-border-color);
    clip-path: ${(props) => {
        const size = !props.variant ? '24' : '12';
        if (!props.reverse) {
            return `polygon(${size}px 0%, 100% 0%, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0% 100%, 0% ${size}px)`;
        }
        return `polygon(calc(100% - ${size}px) 0%, 100% ${size}px, 100% 100%, ${size}px 100%, 0% calc(100% - ${size}px), 0% 0%)`;
    }};

    &:hover,
    &:focus {
        background-color: var(--vertex-grey-85);
        ${(props) => {
            if (props.disabled) {
                return;
            }
            if (!props.reverse) {
                return 'clip-path: polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)';
            }
            return 'clip-path: polygon(calc(100% - 8px) 0%, 100% 8px, 100% 100%, 8px 100%, 0% calc(100% - 8px), 0% 0%)';
        }};
    }

    &:active {
        transition-duration: 0.05s;
        background-color: var(--vertex-grey-75);
        clip-path: ${(props) => {
            if (!props.reverse) {
                return 'polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 0%)';
            }
            return 'polygon(100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)';
        }};
    }
`;

/**
 * Todo
 * @param animationStyle
 * @param variant
 * @param reverse
 * @param children
 * @param props
 * @constructor
 */
const Button = ({ animationStyle = 'block', variant = false, reverse = false, children, ...props }: ButtonProps) => {
    if (animationStyle === 'circle') {
        return (
            <StyledCircleButton variant={variant} reverse={reverse} {...props}>
                {children}
            </StyledCircleButton>
        );
    }

    return (
        <StyledBlockButton variant={variant} reverse={reverse} {...props}>
            {children}
        </StyledBlockButton>
    );
};

export default Button;
