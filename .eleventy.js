const { EleventyI18nPlugin } = require("@11ty/eleventy");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig){

    // addPassThroughCopy method creates a file/folder copy in the output directory
    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/img");
    eleventyConfig.addPassthroughCopy("src/assets/js");

    //filters
    // postDate filter
    eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    //shortcodes
    // get the current year
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    
    //Collections
    // collection of pages in english
    eleventyConfig.addCollection("page_en", function (collection) {
      return collection.getFilteredByGlob("src/en/page/**/*.md");
    });
    // collection of pages in czech
    eleventyConfig.addCollection("page_cs", function (collection) {
      return collection.getFilteredByGlob("src/cs/page/**/*.md");
    });
    // collection of notes in english
    eleventyConfig.addCollection("note_en", function (collection) {
      return collection.getFilteredByGlob("src/en/note/**/*.md");
    });
    // collection of notes in czech
    eleventyConfig.addCollection("note_cs", function (collection) {
      return collection.getFilteredByGlob("src/cs/note/**/*.md");
    });
    // collection of all content in english
    eleventyConfig.addCollection("all_en", function (collection) {
      return collection.getFilteredByGlob("src/en/**/*.md");
    });
    // collection of all comtent in czech
    eleventyConfig.addCollection("all_cs", function (collection) {
      return collection.getFilteredByGlob("src/cs/**/*.md");
    });


    //Plugins
    // i18n
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        // any valid BCP 47-compatible language tag is supported
        defaultLanguage: "cs", // Required
      });
    // Eleventy Navigation
    eleventyConfig.addPlugin(eleventyNavigationPlugin); 
    // Syntax Highlighting
    eleventyConfig.addPlugin(syntaxHighlight); 
    // Markdown-it - override the default Markdown library used for `.md` files with markdown-it
    let markdownLibrary = markdownIt({
      html: true, // Enable HTML tags in source
      breaks: true, // Convert '\n' in paragraphs into <br>
      linkify: true // Autoconvert URL-like text to links
    // You can add more options here based on your needs
    });
    // Markdown-it - tell Eleventy to use this instance of markdown-it
    eleventyConfig.setLibrary("md", markdownLibrary);
    
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