import styled from 'styled-components';
import type { LinkHTMLAttributes } from 'react';

export type LinkProps = LinkHTMLAttributes<HTMLLinkElement>;

const StyledDiv = styled.div`
    display: inline;
    box-shadow:
        inset 0 -2px 0 var(--vertex-text-link-underline),
        0 0 0 var(--vertex-text-link-underline);
    transition: box-shadow var(--vertex-normal-animation-speed);
`;

const StyledLink = styled.a<LinkProps>`
    color: var(--vertex-text-link);
    text-decoration: none;
    background: linear-gradient(var(--vertex-border-color), var(--vertex-border-color)) no-repeat 0 100%;
    background-size: 0 2px;
    transition: background-size var(--vertex-normal-animation-speed) ease;

    &:hover,
    &:focus {
        background-size: 100% 2px;
    }

    &:visited {
        color: var(--vertex-text-link-visited);
    }
`;

const Link = (props: LinkProps) => {
    const { children, ...rest } = props;
    return (
        <StyledDiv>
            <StyledLink {...rest}>{children}</StyledLink>
        </StyledDiv>
    );
};

export default Link;
