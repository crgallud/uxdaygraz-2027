module.exports = function (eleventyConfig) {
  // Copy the assets folder (CSS and images) unchanged to the final site
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",    // source files we write
      output: "_site", // finished website created by the build
    },
  };
};
