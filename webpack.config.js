const webpack = require("webpack");
const path = require("path");

module.exports = env => ({
    mode: env,
    externals: {
        jquery: 'jQuery',
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-bootstrap/Button':       ['ReactBootstrap', 'Button'],
        'react-bootstrap/Col':          ['ReactBootstrap', 'Col'],
        'react-bootstrap/Row':          ['ReactBootstrap', 'Row'],
        'react-bootstrap/Form':         ['ReactBootstrap', 'Form'],
        'react-bootstrap/Container':    ['ReactBootstrap', 'Container'],
        'react-bootstrap/Modal':        ['ReactBootstrap', 'Modal'],
        'react-bootstrap/Table':        ['ReactBootstrap', 'Table'],
        'react-bootstrap/Spinner':      ['ReactBootstrap', 'Spinner'],
        'react-bootstrap/Alert':        ['ReactBootstrap', 'Alert'],
        'lodash': '_',
    },
    resolve: {
        roots: [
            path.resolve('./src'),
        ],
    },
    entry: {
        "main"              : '/js/pages/main.jsx',
    },
    output: {
        path: path.resolve("docs", "static", "js-bundle"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    }
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    devtool: env=="production"?undefined:'#inline-source-map'
});
