const fs = require('fs');
const path = require("path");
const pug = require('pug');
const tree = require('./tree');
const hljs = require("highlight.js/lib/core");  // require only the core library
// separately require languages
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));


let pages = {};
function extractMethods(object, property, pageName) {
  if (!object.hasOwnProperty('params')) {
    for (let prop in object) {
      if(object.hasOwnProperty(prop)) {
        let pn = pageName ? pageName + '_' + prop : prop;
        extractMethods(object[prop], prop, pn);
      }
    }
    return;
  }
  // let link = pageName.slice(1);
  object.name = property;
  object.path = pageName;
  pages[pageName] = object;
}

extractMethods(tree, '', '');

// Compile static pages
let html = pug.renderFile(path.join(__dirname, './views/index.pug'), { menu: tree, name:'Introduction'  });
fs.writeFile(path.join(__dirname, './public/index.html'), html, function (err) {
  if (err) throw err;
  // console.log('index');
});

html = pug.renderFile(path.join(__dirname, './views/installation.pug'), { menu: tree, name:'Installation'  });
fs.writeFile(path.join(__dirname, './public/installation.html'), html, function (err) {
  if (err) throw err;
  // console.log('index');
});

for (let pageName in pages) {
  if(pages.hasOwnProperty(pageName)) {
    fs.readFile(path.join(__dirname, './js/usage/' + pageName + '.js'), 'utf8', function(err, content) {
      let highlightedCode = '';
      if (content)
        highlightedCode = hljs.highlight('javascript', content).value;
      html = pug.renderFile(path.join(__dirname, './views/_documentation.pug'), { menu:tree, doc: pages[pageName], name:pageName, usage:highlightedCode });
      fs.writeFile(path.join(__dirname, './public/' + pageName + '.html'), html, function (err) {
        if (err) throw err;
      });
    });
  }
}