module.exports = function (eleventyConfig) {
  // Copia la carpeta assets (CSS e imágenes) tal cual a la web final
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",    // aquí escribimos nosotras
      output: "_site", // aquí Eleventy deja la web terminada
    },
  };
};