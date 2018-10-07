var express = require('express');
//var path = require('path');
var router = express.Router();
//var app = express();
var folder = 'examples/';
//app.use(express.static('examples'));

// router.get('/trigonometry', function(req, res, next) {
//   var prms = req.params;
//   res.render(folder + 'trigonometry/sine-cosine-arctan', { title: 'Express', jsPath:'/js/' + folder + 'trigonometry/'  });
// });

router.get('/:folder/:page', function(req, res) {
  var prms = req.params;
  //console.log(prms);
  res.render(folder + prms.folder + '/' + prms.page, {
    title     : prms.page,
    type6Path : '/dist/type6.iife.min.js',
    jsPath    : '/public/js/' + folder + prms.folder + '/' + prms.page + '.js',
    cssPath   : '/public/css/examples.min.css',
    examples  : data.examples
   });
});

// // catch 404 and forward to error handler
// router.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// router.use(function(err, req, res, next) {
//   var prms = req.params;
//   res.render(folder + 'trigonometry/sine-cosine-arctan', { title: 'Express', jsPath:'/js/' + folder + 'trigonometry/'  });
// });

// router.get('/:page', function(req, res) {
//   var prms = req.params;
//   //console.log(prms);
//   res.render(prms.page, {
//     title     : 'Express',
//     linksTrigo: data.linksTrigo,
//     linksVec2 : data.linksVec2 });
// });

module.exports = router;
