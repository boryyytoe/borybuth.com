const Card = require('./src/_includes/components/Card');

module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addPassthroughCopy("src/js/");
    eleventyConfig.addWatchTarget("src/css/");
    eleventyConfig.addWatchTarget("src/js/");

    eleventyConfig.addShortcode("Card", Card);

    return {
        templateFormats: [
            "md",
            "njk",
            "html",
        ],

        //pathPrefix: "/",
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        //dataTemplateEngine: false,

        dir: {
            input: "src",
            includes: "_includes",
            output: "docs",
        }
    };
}