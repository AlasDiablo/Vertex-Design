import { createGlobalStyle } from 'styled-components';
import type { PropsWithChildren } from 'react';

export type VertexDesignThemeProviderProps = PropsWithChildren;

const GlobalStyle = createGlobalStyle`
    :root {
        --vertex-border-size: 2px;
        --vertex-border-color: rgba(0, 255, 255, 0.75);
        --vertex-grey-89: #dee2e6;
        --vertex-grey-85: #d3d9de;
        --vertex-grey-75: #b6bfc8;
        --vertex-normal-animation-speed: 0.25s;
        --vertex-action-animation-speed: 0.05s;
        --vertex-text-primary: #161a1d;
        --vertex-text-link-underline: rgba(55, 64, 73, 0.5);
        --vertex-text-link: #006363;
        --vertex-text-link-visited: #79428A;
    }
`;

const VertexDesignThemeProvider = ({ children }: VertexDesignThemeProviderProps) => {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    );
};

export default VertexDesignThemeProvider;
