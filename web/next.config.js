const path = require('path');
const withTM = require('next-transpile-modules')(['../library'])

module.exports = withTM({
    webpack(config) {

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config.resolve.alias = {
            ...config.resolve.alias,
            'antd': path.resolve(__dirname, 'node_modules/antd'),
            'react': path.resolve(__dirname, 'node_modules/react'),
            '@ux-react': path.resolve(__dirname, '../library')
        };

        return config;
    },
});
