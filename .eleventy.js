const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {

  eleventyConfig.setServerOptions({
    // Default values are shown:

    // Whether the live reload snippet is used
    liveReload: true,

    // Whether DOM diffing updates are applied where possible instead of page reloads
    domDiff: true,

    // The starting port number
    // Will increment up to (configurable) 10 times if a port is already in use.
    port: 4000, // 8080,

    // Additional files to watch that will trigger server updates
    // Accepts an Array of file paths or globs (passed to `chokidar.watch`).
    // Works great with a separate bundler writing files to your output folder.
    // e.g. `watch: ["_site/**/*.css"]`
    watch: [],

    // Show local network IP addresses for device testing
    showAllHosts: false,

    // Use a local key/certificate to opt-in to local HTTP/2 with https
    https: {
      // key: "./localhost.key",
      // cert: "./localhost.cert",
    },

    // Change the default file encoding for reading/serving files
    encoding: "utf-8",

    // Show the dev server version number on the command line
    showVersion: false,
  });


  ///////////////////////////////////////////////////
  // add plugins
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