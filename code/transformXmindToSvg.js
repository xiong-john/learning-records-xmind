const JSZip = require("jszip");
var fs = require("fs-extra");
const { loadFromXMind, SnowbrushRenderer } = require("xmind-viewer");
const { resolve } = require("path");
const { createSVGWindow } = require("svgdom");
const window = createSVGWindow();
const document = window.document;
const { SVG, registerWindow } = require("@svgdotjs/svg.js");

registerWindow(window, document);
module.exports = async function transformXmindToSvg(name) {
  return new Promise((res, rej) => {
    fs.readFile(resolve(__dirname, `../${name}.xmind`), function (err, data) {
      if (err) {
        return rej(err);
      }
      new JSZip().loadAsync(data).then(function (zip) {
        loadFromXMind(zip)
          .then((data) => {
            const renderer = new SnowbrushRenderer(data.sheets);
            return renderer.render({ sheetIndex: 0 });
          })
          .then(async (svg) => {
            const canvas = SVG(svg);
            await fs.ensureDir(resolve(__dirname, `../svgs`));
            fs.writeFile(
              resolve(__dirname, `../svgs/${name}.svg`),
              canvas.svg(),
              (err) => {
                rej(err);
                console.log(err);
              }
            );
            res("done");
            console.log('转换成功:=========', name)
            // document.body.appendChild(svg)
          })
          .catch((e) => {
            console.log(e, "e");
            rej(e);
          });
      });
    });
  });
}

// read a zip file
