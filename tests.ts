// eslint-disable-next-line import/no-namespace
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

declare module 'vitest' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type Assertion<T = any> = jest.Matchers<void, T> & NonNullable<unknown> & TestingLibraryMatchers<T, void>;
}
expect.extend(matchers);
