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
    transition-duration: var(--vertex-normal-animation-speed);
    border: none;
    border-left: solid var(--vertex-border-size) var(--vertex-border-color);
    border-right: solid var(--vertex-border-size) var(--vertex-border-color);
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
        transition-duration: var(--vertex-action-animation-speed);
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
    transition-duration: var(--vertex-normal-animation-speed);
    border: none;
    border-left: solid var(--vertex-border-size) var(--vertex-border-color);
    border-right: solid var(--vertex-border-size) var(--vertex-border-color);
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
        transition-duration: var(--vertex-action-animation-speed);
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
 * @param props
 * @constructor
 */
const Button = (props: ButtonProps) => {
    const { animationStyle = 'block', variant = false, reverse = false, children, ...rest } = props;

    if (animationStyle === 'circle') {
        return (
            <StyledCircleButton variant={variant} reverse={reverse} {...rest}>
                {children}
            </StyledCircleButton>
        );
    }

    return (
        <StyledBlockButton variant={variant} reverse={reverse} {...rest}>
            {children}
        </StyledBlockButton>
    );
};

export default Button;
