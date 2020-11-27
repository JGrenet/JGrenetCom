module.exports = {
  "extends": "@snowpack/app-scripts-react",
  "plugins": [
    ["@snowpack/plugin-run-script", {"cmd": "sass src:src --no-source-map", "watch": "$1 --watch"}],
    // ["@snowpack/plugin-webpack", {
    //   extendConfig: (config) => {
    //     // console.log(config.module.rules[1]);

    //     config.module.rules[1].use.push({loader: "postcss-loader", options: {
    //       postcssOptions: {
    //         plugins: [
    //           [
    //             "autoprefixer",
    //             {
    //               // Options
    //             },
    //           ],
    //         ],
    //       },
    //     }});
    //     return config;
    //   },
    // }]
  ],
  "buildOptions": {
    "sourceMaps": true
  }
}
