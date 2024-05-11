const { CracoAliasPlugin } = require("react-app-rewire-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        source: "tsconfig",
        baseUrl: "./",
        alias: {
          "@atom": "./src/component/atom",
          "@molecules": "./src/component/molecules",
          "@organisms": "./src/component/organisms",
          "@templates": "./src/component/Template",
          "@page": "./src/page",
          "@asset": "./src/asset",
          "@type": "./src/type",
          "@utils": "./src/utils",
        },
        tsConfigPath: "tsconfig.paths.json",
      },
    },
  ],
};
