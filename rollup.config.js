import typescript from "rollup-plugin-typescript2";

export default {
    input: "./src/index.ts",
    output: [{
        format: "iife",
        file: "./dist/index.iife.js"
    },
    {
        file: './dist/index.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true
    },
    {
        file: './dist/index.es.mjs',
        format: 'es',
        exports: 'named',
        sourcemap: true
    },
    {
        file: './dist/index.umd.js',
        format: 'umd',
        name: '--name-umd--',
        sourcemap: true
    }],
    plugins: [
        typescript({
            tsconfig: "./tsconfig.json"
        })
    ]
};