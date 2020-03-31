const fs = require('fs');
const path = require("path");
const pug = require('pug');
const tree = require('./tree');

let pages = {};
function extractMethods(object, property, pageName) {
  if (!object.hasOwnProperty('params')) {
    for (let prop in object) {
      if(object.hasOwnProperty(prop)) {
        let pn = pageName + '_' + prop;
        extractMethods(object[prop], prop, pn);
      }
    }
    return;
  }
  // let link = pageName.slice(1);
  object.name = property;
  pages[pageName.slice(1)] = object;
}

extractMethods(tree, '', '');

// Compile static pages
let html = pug.renderFile(path.join(__dirname, './views/index.pug'), { menu: tree });
fs.writeFile(path.join(__dirname, './public/index.html'), html, function (err) {
  if (err) throw err;
  // console.log('index');
});

html = pug.renderFile(path.join(__dirname, './views/installation.pug'), { menu: tree });
fs.writeFile(path.join(__dirname, './public/installation.html'), html, function (err) {
  if (err) throw err;
  // console.log('index');
});

for (let pageName in pages) {
  if(pages.hasOwnProperty(pageName)) {
    html = pug.renderFile(path.join(__dirname, './views/_documentation.pug'), { menu:tree, doc: pages[pageName] });
    fs.writeFile(path.join(__dirname, './public/' + pageName + '.html'), html, function (err) {
      if (err) throw err;
      // console.log(pageName);
    });
  }
}