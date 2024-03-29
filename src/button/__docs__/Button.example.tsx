import VertexDesignThemeProvider from '../../provider/VertexDesignThemeProvider';
import Button from '../Button';
import type { ButtonProps } from '../Button';
import type { FC } from 'react';

const ButtonExample: FC<ButtonProps> = ({ disabled = false, onClick = () => {}, variant, reverse, animationStyle }) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
            }}
        >
            <VertexDesignThemeProvider>
                <Button
                    animationStyle={animationStyle}
                    variant={variant}
                    reverse={reverse}
                    disabled={disabled}
                    onClick={onClick}
                >
                    Button
                </Button>
            </VertexDesignThemeProvider>
        </div>
    );
};

export default ButtonExample;
