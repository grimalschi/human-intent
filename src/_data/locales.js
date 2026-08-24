const fs = require("fs");
const path = require("path");

module.exports = function () {
  const dir = path.join(__dirname, "locales");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")))
    .sort((a, b) => {
      if (a.code === "en") return -1;
      if (b.code === "en") return 1;
      return a.code.localeCompare(b.code);
    });
};
