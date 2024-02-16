import { createGlobalStyle } from 'styled-components';
import type { PropsWithChildren } from 'react';

export type VertexDesignThemeProviderProps = PropsWithChildren;

const GlobalStyle = createGlobalStyle`
    :root {
        --vertex-border-color: rgb(0 255 255 / 75%);
        --vertex-grey-89: #dee2e6;
        --vertex-grey-85: #d3d9de;
        --vertex-grey-75: #b6bfc8;
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
