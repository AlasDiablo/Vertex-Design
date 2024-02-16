import ButtonExample from './Button.example';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ButtonExample> = {
    title: 'Button',
    component: ButtonExample,
};

export default meta;
type Story = StoryObj<typeof ButtonExample>;

export const Primary: Story = {
    args: {
        disabled: false,
        animationStyle: 'block',
        variant: false,
        reverse: false,
        onClick: () => {
            console.log('Button');
        },
    },
};
export const Secondary: Story = {
    args: {
        disabled: false,
        animationStyle: 'circle',
        variant: false,
        reverse: false,
        onClick: () => {
            console.log('Button');
        },
    },
};
