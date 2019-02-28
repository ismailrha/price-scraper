const mongoose = require("mongoose");

module.exports = function saveData(scraps) {
  mongoose.connect("mongodb://localhost/myDb");
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    const scrapSchema = new mongoose.Schema({
      name: String,
      price: String
    });
    const scrap = mongoose.model("scrap", scrapSchema);
    scraps.map(value => {
      let data = new scrap(value);
      data.save(err => {
        if (err) console.error(err);
      });
    });
  });
};
