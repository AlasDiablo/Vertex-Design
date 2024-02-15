import Button from '../Button';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

describe('Button component', () => {
    it('Button should render correctly', () => {
        render(<Button />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });
});
