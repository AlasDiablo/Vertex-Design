import { useEffect } from 'react';
import type { PropsWithChildren } from 'react';

export type VertexDesignThemeProviderProps = PropsWithChildren;

const CssVariableInjector = () => {
    useEffect(() => {
        const style = document.documentElement.style;
        style.setProperty('--vertex-border-color', 'rgba(0, 255, 255, 0.75)');
        style.setProperty('--vertex-grey-89', '#dee2e6');
        style.setProperty('--vertex-grey-85', '#d3d9de');
        style.setProperty('--vertex-grey-75', '#b6bfc8');
    }, []);
    return null;
};

const VertexDesignThemeProvider = ({ children }: VertexDesignThemeProviderProps) => {
    return (
        <>
            <CssVariableInjector />
            {children}
        </>
    );
};

export default VertexDesignThemeProvider;
