import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
// import pkg from './package.json';

export default {
    plugins: [
        babel({
            sourceMap: true,
            exclude: 'node_modules/**',
            babelrc: false,
            presets: ['es2015-rollup']
        }),
        json(),
        nodeResolve()
    ],
    // banner: `/*! ${pkg.name} v${pkg.version} | (c) ${new Date().getFullYear()} ${pkg.author} | ${pkg.homepage} */`
};
