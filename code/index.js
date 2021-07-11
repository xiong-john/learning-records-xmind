const JSZip = require("jszip");
var fs = require("fs");
const { loadFromXMind, SnowbrushRenderer } = require( "xmind-viewer");
const { resolve } = require("path");
const { createSVGWindow } = require('svgdom')
const window = createSVGWindow()
const document = window.document
const { SVG, registerWindow } = require('@svgdotjs/svg.js')
    
  
registerWindow(window, document)

// read a zip file
fs.readFile(resolve(__dirname, '../虚拟dom.xmind'), function(err, data) {
    if (err) throw err;
    new JSZip().loadAsync(data).then(function (zip) {
        loadFromXMind(zip)
        .then((data) => {
            const renderer = new SnowbrushRenderer(data.sheets);
            return renderer.render({ sheetIndex: 0 });
        })
        .then((svg) => {
            const canvas  = SVG(svg)
            fs.writeFile(resolve(__dirname, '../虚拟dom.xmind.svg'), canvas.svg(), (err)=>{
                console.log(err);

            })
            // document.body.appendChild(svg)
        }).catch( e => {
            console.log(e, 'e')
        })
    });
});
