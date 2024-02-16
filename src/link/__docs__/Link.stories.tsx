import LinkExample from './Link.example';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LinkExample> = {
    title: 'Link',
    component: LinkExample,
};

export default meta;
type Story = StoryObj<typeof LinkExample>;

export const Primary: Story = { args: {} };
