module.exports = {
  "extends": "@snowpack/app-scripts-react",
  "plugins": [
    ["@snowpack/plugin-run-script", {"cmd": "sass src:src --no-source-map", "watch": "$1 --watch"}],
    // ["@snowpack/plugin-webpack"]
  ],
  "buildOptions": {
    "sourceMaps": true
  }
}
