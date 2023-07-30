const path = require('path');

const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

const outputConfig = {
    destPath: "./dist"
};

// Entry points
// https://webpack.js.org/concepts/entry-points/ 
const entryConfig = [
    "./src/App.ts",
    "./src/assets/stylesheets/app.scss",
];


// Copy files from src to dist
// https://webpack.js.org/plugins/copy-webpack-plugin/
const copyPluginPatterns = {
    patterns: [
        { from: "./src/assets/images", to: "images" },
        { from: "./src/assets/fonts", to: "fonts" },
        { from: "./src/assets/vendor", to: "js" },
        { from: "./src/assets/tileset", to: "tileset" },
        { from: "node_modules/cesium/Build/Cesium/Workers", to: "Workers" },
        { from: "node_modules/cesium/Build/Cesium/ThirdParty", to: "ThirdParty" },
        { from: "node_modules/cesium/Build/Cesium/Assets", to: "Assets" },
        { from: "node_modules/cesium/Build/Cesium/Widgets", to: "Widgets" },
    ]
};

const definePluginOpts = {
    CESIUM_BASE_URL: JSON.stringify('./'),
};




// Dev server setup
// https://webpack.js.org/configuration/dev-server/
const devServer = {
    static: {
        directory: path.join(__dirname, outputConfig.destPath),
    },
    // https: true,
    port: "5000",
    // host: "0.0.0.0",
    // disableHostCheck: true
};


// SCSS compile
const scssConfig = {
    destFileName: "css/app.min.css"
};


// Production terser config options
// https://webpack.js.org/plugins/terser-webpack-plugin/#terseroptions
const terserPluginConfig = {
    extractComments: false,
    terserOptions: {
        compress: {
            drop_console: true,
        },
    }
};

module.exports.copyPluginPatterns = copyPluginPatterns;
module.exports.entryConfig = entryConfig;
module.exports.scssConfig = scssConfig;
module.exports.devServer = devServer;
module.exports.terserPluginConfig = terserPluginConfig;
module.exports.outputConfig = outputConfig;
module.exports.definePluginOpts = definePluginOpts;