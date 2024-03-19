const { EleventyI18nPlugin } = require("@11ty/eleventy");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig){

    // addPassThroughCopy method creates a file/folder copy in the output directory
    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/img");
    eleventyConfig.addPassthroughCopy("src/assets/js");

    //Collections
    // collection of pages in english
    eleventyConfig.addCollection("page_en", function (collection) {
      return collection.getFilteredByGlob("src/en/page/*.md");
    });
    // collection of pages in czech
    eleventyConfig.addCollection("page_cs", function (collection) {
      return collection.getFilteredByGlob("src/cs/page/*.md");
    });
    // collection of notes in english
    eleventyConfig.addCollection("note_en", function (collection) {
      return collection.getFilteredByGlob("src/en/note/**/*.md");
    });
    // collection of notes in czech
    eleventyConfig.addCollection("note_cs", function (collection) {
      return collection.getFilteredByGlob("src/cs/note/**/*.md");
    });
    // collection of posts in english
    eleventyConfig.addCollection("post_en", function (collection) {
      return collection.getFilteredByGlob("src/en/post/**/*.md");
    });
    // collection of posts in czech
    eleventyConfig.addCollection("post_cs", function (collection) {
      return collection.getFilteredByGlob("src/cs/post/**/*.md");
    });


    //Plugins
    // i18n
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        // any valid BCP 47-compatible language tag is supported
        defaultLanguage: "cs", // Required
      });
    // Eleventy Navigation
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
      
    return {
    // markdown files, data files and html files will be processed by Nunjucks
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',  
    
    // overriding default directories
    dir: {
        input: "src",
        layouts: '_layouts'
      }
    };
  };