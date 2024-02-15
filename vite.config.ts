/// <reference types="vitest" />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [dts()],
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'vertex-design',
            fileName: (format) => `index.${format}.js`,
            formats: ['cjs', 'es'],
        },
        rollupOptions: {
            external: ['react', 'react/jsx-runtime', 'styled-components'],
        },
        sourcemap: true,
        emptyOutDir: true,
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './tests.ts',
    },
});
