const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("assets");
  // eleventyConfig.addPassthroughCopy("assets/css");
  // eleventyConfig.addPassthroughCopy("assets/images/prints");

  // Get only content that matches a tag - https://www.11ty.dev/docs/collections/ (bottom half of page)
  eleventyConfig.addCollection("cvExhibitions", function(collection) {
    return collection.getFilteredByTag("exhibitions");
  });
  eleventyConfig.addCollection("cvUpcoming", function(collection) {
    return collection.getFilteredByTag("upcoming");
  });
  eleventyConfig.addCollection("cvDobbeltDagger", function(collection) {
    return collection.getFilteredByTag("dobbeltdagger");
  });  
  eleventyConfig.addCollection("cvNotNull", function(collection) {
    return collection.getFilteredByTag("notnull");
  });
  eleventyConfig.addCollection("cvCurating", function(collection) {
    return collection.getFilteredByTag("curating");
  });
  eleventyConfig.addCollection("cvBibliography", function(collection) {
    return collection.getFilteredByTag("bibliography");
  });
  eleventyConfig.addCollection("cvGrants", function(collection) {
    return collection.getFilteredByTag("grants");
  });
  eleventyConfig.addCollection("cvOther", function(collection) {
    return collection.getFilteredByTag("other");
  });  

  
  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      output: "_site",
      includes: "includes"
    }
  }
}