const fs = require('fs');
const path = require("path");
const pug = require('pug');
const docTree = require('./tree');
const examplesTree = require('./examples');
const hljs = require("highlight.js/lib/core");  // require only the core library
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript')); // separately require languages
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash')); // separately require languages

let methods = {};
let examples = {};
function extractMethods(object, property, method) {
  if (!object.hasOwnProperty('params')) {
    for (let prop in object) {
      if(object.hasOwnProperty(prop)) {
        let pn = method ? method + '_' + prop : prop;
        extractMethods(object[prop], prop, pn);
      }
    }
    return;
  }
  // let link = method.slice(1);
  object.name = property;
  object.path = method;
  methods[method] = object;
}

function buildExamplesMenu(){
  let examples = {};
  for (let folder in examplesTree) {
    if(examplesTree.hasOwnProperty(folder)) {
      examples[folder] = [];
      for (let example of examplesTree[folder]) {
        let underscore = example.replace(/\s+/g, '_').toLowerCase();
        examples[folder].push({
          id : 'examples_' + folder + '_' + underscore,
          name : example,
          htmlPath : 'examples_' + folder + '_' + underscore + '.html',
          jsPath : folder + '/' + underscore + '.js'
        })
      }
    }
  }
  return examples;
}

extractMethods(docTree, '', '');
let examplesMenu = buildExamplesMenu();
// Compile static pages

for (let folder in examplesMenu) {
  if(examplesMenu.hasOwnProperty(folder)) {
    for (let example of examplesMenu[folder]) {
      let html = pug.renderFile(path.join(__dirname, './views/_example.pug'),
                            { root: '../',
                              docFolder: 'doc/',
                              examplesFolder: 'examples/',
                              examplesMenu: examplesMenu,
                              docMenu: docTree,
                              jsPath: example.jsPath,
                              name: example.id
                            });
      fs.writeFile(path.join(__dirname, './public/examples/' + example.id + '.html'), html, function (err) {
        if (err) throw err;
      });
    }
  }
}

let html = pug.renderFile(path.join(__dirname, './views/index.pug'),
                          { root: './', 
                            docFolder: 'doc/',
                            examplesFolder: 'examples/',
                            examplesMenu: examplesMenu,
                            docMenu: docTree,
                            name:'Introduction' 
                          });
fs.writeFile(path.join(__dirname, './public/index.html'), html, function (err) {
  if (err) throw err;
  // console.log('index');
});

fs.readFile(path.join(__dirname, './js/installation.js'), 'utf8', function(err, content) {
  let highlightedCode = '';
  if (content)
    highlightedCode = hljs.highlight('javascript', content).value;
  let npmHighlightedCode = hljs.highlight('bash', 'npm install @lcluber/type6js').value;
  let yarnHighlightedCode = hljs.highlight('bash', 'yarn install @lcluber/type6js').value;
  html = pug.renderFile(path.join(__dirname, './views/installation.pug'),
                        { root: './',
                          docFolder: 'doc/',
                          examplesFolder: 'examples/',
                          examplesMenu: examplesMenu,
                          docMenu: docTree,
                          name:'Installation',
                          npmHighlightedCode: npmHighlightedCode,
                          yarnHighlightedCode: yarnHighlightedCode,
                          usage:highlightedCode
                        });
  fs.writeFile(path.join(__dirname, './public/installation.html'), html, function (err) {
    if (err) throw err;
    // console.log('index');
  });
});

for (let method in methods) {
  if(methods.hasOwnProperty(method)) {
    fs.readFile(path.join(__dirname, './js/usage/' + method + '.js'), 'utf8', function(err, content) {
      let highlightedCode = '';
      if (content)
        highlightedCode = hljs.highlight('javascript', content).value;
      html = pug.renderFile(path.join(__dirname, './views/_documentation.pug'),
                            { root: '../',
                              docFolder: 'doc/',
                              examplesFolder: 'examples/',
                              examplesMenu: examplesMenu,
                              docMenu: docTree,
                              doc: methods[method],
                              name:method,
                              usage:highlightedCode
                            });
      fs.writeFile(path.join(__dirname, './public/doc/' + method + '.html'), html, function (err) {
        if (err) throw err;
      });
    });
  }
}