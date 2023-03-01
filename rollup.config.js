import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from "@rollup/plugin-typescript";

export default {
    input: 'script.ts',
    output: {
        file: 'dist/bundle.js'
    },
    plugins: [
        typescript(),
        nodeResolve({ browser: true })
    ]
};
