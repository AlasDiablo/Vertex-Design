import Example from './Example';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Example> = {
    title: 'Button',
    component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
    args: {
        disabled: false,
        animationStyle: 'block',
        variant: false,
        revers: false,
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
        revers: false,
        onClick: () => {
            console.log('Button');
        },
    },
};
