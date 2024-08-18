module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 21.7
            }
        }]
    ],
    plugins: ['@babel/plugin-transform-private-methods']
};
