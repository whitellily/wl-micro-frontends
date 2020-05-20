module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  // presets : [
  //   ["env",{
  //     "targets": {
  //       "browsers": ["last 2 versions","ie >= 11"]
  //     }
  //   }],],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
};
