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
  eleventyConfig.addCollection("cvEducation", function(collection) {
    return collection.getFilteredByTag("education");
  });
  eleventyConfig.addCollection("cvUpcoming", function(collection) {
    return collection.getFilteredByTag("upcoming");
  });
  eleventyConfig.addCollection("cvSolo", function(collection) {
    return collection.getFilteredByTag("solo");
  });
  eleventyConfig.addCollection("cvGroup", function(collection) {
    return collection.getFilteredByTag("group");
  });
  eleventyConfig.addCollection("cvBibliography", function(collection) {
    return collection.getFilteredByTag("bibliography");
  });
  eleventyConfig.addCollection("cvCommissions", function(collection) {
    return collection.getFilteredByTag("commissions");
  });
  eleventyConfig.addCollection("cvArtFairs", function(collection) {
    return collection.getFilteredByTag("artFair");
  });
  eleventyConfig.addCollection("cvPermanentCollections", function(collection) {
    return collection.getFilteredByTag("permanentCollection");
  });
  eleventyConfig.addCollection("cvFlatFiles", function(collection) {
    return collection.getFilteredByTag("flatFile");
  });
  eleventyConfig.addCollection("cvSelectedPress", function(collection) {
    return collection.getFilteredByTag("press");
  });
  eleventyConfig.addCollection("cvGrants", function(collection) {
    return collection.getFilteredByTag("grant");
  });
  eleventyConfig.addCollection("cvResidencies", function(collection) {
    return collection.getFilteredByTag("residency");
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