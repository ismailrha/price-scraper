const { scraper, parser } = require("./lib");

const URL =
  "https://fr.aliexpress.com/category/205000143/cellphones-telecommunications.html";

scraper(URL).then(response => {
  const { data } = response;
  const products = parser(data);

  console.log(products);
});
