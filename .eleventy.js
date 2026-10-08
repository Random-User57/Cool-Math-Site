module.exports = function(eleventyConfig) {
  // Directly passes your games folder through to the build output
  eleventyConfig.addPassthroughCopy("games");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
