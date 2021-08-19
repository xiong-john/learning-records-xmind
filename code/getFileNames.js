const fs = require("fs");
const { resolve } = require("path");

async function getFileNames() {
  return new Promise((res, rej) => {
    fs.readdir(resolve(__dirname, "../"), (err, data) => {
      if (err) {
        rej(err);
      }
      data = data
        .filter((i) => i.match(/.*\.xmind$/))
        .map((i) => i.split(".xmind")[0]);
      res(data);
    });
  });
}

module.exports = getFileNames;
