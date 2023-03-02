import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from "@rollup/plugin-typescript";
import terser from '@rollup/plugin-terser';

export default {
    input: 'script.ts',
    output: {
        file: 'dist/bundle.js'
    },
    plugins: [
        nodeResolve({ browser: true }),
        typescript(),
        terser()
    ]
};
