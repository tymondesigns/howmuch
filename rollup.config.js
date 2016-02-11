import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
// import pkg from './package.json';

export default {
    // banner: `/*! ${pkg.name} v${pkg.version} | (c) ${new Date().getFullYear()} ${pkg.author} | ${pkg.homepage} */`,
    plugins: [
        babel({
            sourceMap: true,
            exclude: 'node_modules/**',
            babelrc: false,
            presets: ['es2015-rollup']
        }),
        nodeResolve()
    ]
};
