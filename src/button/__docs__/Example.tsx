import Button from '../Button';
import type { ButtonProps } from '../Button';
import type { FC } from 'react';

const Example: FC<ButtonProps> = ({ disabled = false, onClick = () => {}, variant, revers, animationStyle }) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
            }}
        >
            <Button
                animationStyle={animationStyle}
                variant={variant}
                revers={revers}
                disabled={disabled}
                onClick={onClick}
            >
                Button
            </Button>
        </div>
    );
};

export default Example;
