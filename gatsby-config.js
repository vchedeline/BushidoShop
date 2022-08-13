require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `BushidoShop`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [`gatsby-plugin-sass`],
};
