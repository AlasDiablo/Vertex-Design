import { peerDependencies } from './package.json';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';

const linter = process.env.VITE_ENV === 'prod' ? [] : [eslint(), stylelint()];

export default defineConfig({
    plugins: [dts(), ...linter],
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'vertex-design',
            fileName: (format) => `index.${format}.js`,
            formats: ['cjs', 'es'],
        },
        rollupOptions: {
            external: [...Object.keys(peerDependencies)],
        },
        sourcemap: true,
        emptyOutDir: true,
    },
});
