const fs = require('fs');
const path = require("path");
const pug = require('pug');
const docTree = require('./tree.json');
const examplesTree = require('./examples');
const hljs = require("highlight.js/lib/core");  // require only the core library
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript')); // separately require languages
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash')); // separately require languages

let methods = {};
function extractMethods(object, method) {
  if (!object.hasOwnProperty('params')) {
    for (let prop in object) {
      if(object.hasOwnProperty(prop) && prop !== 'path') {
        let pn = method ? method + '_' + prop : prop;
        extractMethods(object[prop], pn);
      }
    }
    return;
  }
  methods[method] = object;
}

function createDocTree(object, property, method) {
  if(method) {
    object.path = method;
  }
  if (!object.hasOwnProperty('params')) {
    for (let prop in object) {
      if(object.hasOwnProperty(prop) && prop !== 'path') {
        let pn = method ? method + '_' + prop : prop;
        createDocTree(object[prop], prop, pn);
      }
    }
    return;
  }
  object.name = property;
  // object.display = true;
  createDocpages(object);
}

function createMethodsArray(object, property) {
  if (!object.hasOwnProperty('params')) {
    // if (property) {
      let array = getObjectMethods(property);
      object.methods = array;
    // }
    for (let prop in object) {
      if(object.hasOwnProperty(prop) && prop !== 'methods' && prop !== 'path') {
        createMethodsArray(object[prop], prop);
      }
    }
  }
  return;
}

function getObjectMethods(property) {
  let array = [];
  for (let prop in methods) {
    if(methods.hasOwnProperty(prop) && methods[prop].hasOwnProperty('path')) {
      if (searchExpression(methods[prop].path, property)){
        array.push(methods[prop].path);
      }
    }
  }
  // console.log('array', array);
  return array;
}

function createDocpages(method) {
  fs.readFile(path.join(__dirname, './js/usage/' + method.path + '.js'), 'utf8', function(err, content) {
    let highlightedCode = '';
    if (content)
      highlightedCode = hljs.highlight('javascript', content).value;
    html = pug.renderFile(path.join(__dirname, './views/_documentation.pug'),
                          { root: '../',
                            docFolder: 'doc/',
                            examplesFolder: 'examples/',
                            examplesMenu: examplesMenu,
                            docTree: docTree,
                            doc: method,
                            pageName: method.path,
                            usage:highlightedCode
                          });
    fs.writeFileSync(path.join(__dirname, './public/doc/' + method.path + '.html'), html);
  });
}

function buildExamplesMenu(){
  let examples = {};
  for (let folder in examplesTree) {
    if(examplesTree.hasOwnProperty(folder)) {
      examples[folder] = [];
      for (let example of examplesTree[folder]) {
        let spaceToUnderscore = example.replace(/\s+/g, '_').toLowerCase();
        examples[folder].push({
          id : 'examples_' + folder + '_' + spaceToUnderscore,
          name : example,
          htmlPath : 'examples_' + folder + '_' + spaceToUnderscore + '.html',
          jsPath : folder + '/' + spaceToUnderscore + '.js'
        })
      }
    }
  }
  return examples;
}

function searchExpression(string, substring) {
	return string.indexOf(substring) !== -1;
}

createDocTree(docTree,'','');
extractMethods(docTree, '', '');

let examplesMenu = buildExamplesMenu();

for (let folder in examplesMenu) {
  if(examplesMenu.hasOwnProperty(folder)) {
    for (let example of examplesMenu[folder]) {
      let html = pug.renderFile(path.join(__dirname, './views/_example.pug'),
                            { root: '../',
                              docFolder: 'doc/',
                              examplesFolder: 'examples/',
                              examplesMenu: examplesMenu,
                              docTree: docTree,
                              jsPath: example.jsPath,
                              name: example.id
                            });
      fs.writeFileSync(path.join(__dirname, './public/examples/' + example.id + '.html'), html);
    }
  }
}

let html = pug.renderFile(path.join(__dirname, './views/index.pug'),
                          { root: './', 
                            docFolder: 'doc/',
                            examplesFolder: 'examples/',
                            examplesMenu: examplesMenu,
                            docTree: docTree,
                            name:'Introduction' 
                          });
fs.writeFileSync(path.join(__dirname, './public/index.html'), html);

html = pug.renderFile(path.join(__dirname, './views/license.pug'),
                          { root: './', 
                            docFolder: 'doc/',
                            examplesFolder: 'examples/',
                            examplesMenu: examplesMenu,
                            docTree: docTree,
                            name:'License' 
                          });
fs.writeFileSync(path.join(__dirname, './public/license.html'), html);

let content = fs.readFileSync(path.join(__dirname, './js/installation-es6.js'), 'utf8');
let highlightedCodeEs6 = '';
if (content){
  highlightedCodeEs6 = hljs.highlight('javascript', content).value;
}
content = fs.readFileSync(path.join(__dirname, './js/installation-iife.js'), 'utf8');
let highlightedCodeIife = '';
if (content){
  highlightedCodeIife = hljs.highlight('javascript', content).value;
}
let npmHighlightedCode = hljs.highlight('bash', 'npm install @lcluber/type6js').value;
let yarnHighlightedCode = hljs.highlight('bash', 'yarn install @lcluber/type6js').value;
html = pug.renderFile(path.join(__dirname, './views/installation.pug'),
                          { root: './',
                            docFolder: 'doc/',
                            examplesFolder: 'examples/',
                            examplesMenu: examplesMenu,
                            docTree: docTree,
                            name:'Installation',
                            npmHighlightedCode: npmHighlightedCode,
                            yarnHighlightedCode: yarnHighlightedCode,
                            usageEs6:highlightedCodeEs6,
                            usageIife:highlightedCodeIife,
                          });
fs.writeFileSync(path.join(__dirname, './public/installation.html'), html);

setTimeout(() => {
  createMethodsArray(docTree, '');
  // console.log(docTree);
  let treeContent = "var docTree = " + JSON.stringify(docTree) + ";";
  fs.writeFileSync(path.join(__dirname, './public/js/tree.js'), treeContent );
}, 1000);