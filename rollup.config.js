import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";

export default [
  {
    input: 'index.ts',
    output: {
      dir: 'dist',
      format: 'module'
    },
    plugins: [typescript()]
  },
  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
