const cheerio = require("cheerio");

module.exports = function parser(html, schema) {
  const $ = cheerio.load(html);
  const products = [];
  $("#list-items li").each(function() {
    const name = $(this)
      .find('span[itemprop="name"]')
      .text();
    const price = $(this)
      .find('span[itemprop="price"]')
      .text();

    products.push({
      name,
      price
    });
  });
  return products;
};
