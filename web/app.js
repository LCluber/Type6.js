var express       = require('express');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var fs            = require('fs');
//routes
var route_root    = require('./routes/root');
var route_examples= require('./routes/examples');
var route_doc     = require('./routes/doc');

data              = JSON.parse(fs.readFileSync(__dirname + '/config/data.json', 'utf-8'));

var app = express();

var environment = process.env.NODE_ENV;

// view engine setup
//app.locals.basedir = path.join(__dirname, 'views');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


const menu = {
  vectors : {
    vector2 : {
      setters : {
        set : {},
        copy : {},
        setFromArray : {},
        setFromAngle : {},
        origin : {},
        setOppositeAxis : {}
      },
      getters : {
        getAngle : {},
        getMagnitude : {},
        getDistance : {},
        getMaxAxis : {},
        getMinAxis : {}
      },
      export : {
        clone : {},
        toArray : {},
        toString : {}
      },
      check : {
        isOrigin : {},
        isNotOrigin : {},
        isPositive : {},
        isNegative : {}
      },
      operations : {
        additions : {
          add : {},
          addScalar : {},
          addScaledVector : {}
        },
        subtractions : {
          subtract : {},
          subtractScalar : {},
          subtractScaledVector : {}
        },
        multiplications : {
          scale : {},
          multiply : {},
          multiplyScaledVector : {}
        },
        divisions : {
          divide : {},
          divideScaledVector : {},
          halve : {},
          normalize : {}
        },
        max : {},
        min : {},
        maxScalar : {},
        minScalar : {},
        absolute : {},
        opposite : {},
        clamp : {},
        lerp : {},
        dotProduct : {},
        quadraticBezier : {},
        cubicBezier : {}
      }
    },
    vector3 : {
      setters : {
        set : {},
        copy : {},
        setFromArray : {},
        setFromAngle : {},
        origin : {},
        setOppositeAxis : {}
      },
      getters : {
        getAngle : {},
        getMagnitude : {},
        getDistance : {},
        getMaxAxis : {},
        getMinAxis : {}
      },
      export : {
        clone : {},
        toArray : {},
        toString : {}
      },
      check : {
        isOrigin : {},
        isNotOrigin : {},
        isPositive : {},
        isNegative : {}
      },
      operations : {
        additions : {
          add : {},
          addScalar : {},
          addScaledVector : {}
        },
        subtractions : {
          subtract : {},
          subtractScalar : {},
          subtractScaledVector : {}
        },
        multiplications : {
          scale : {},
          multiply : {},
          multiplyScaledVector : {}
        },
        divisions : {
          divide : {},
          divideScaledVector : {},
          halve : {},
          normalize : {}
        },
        max : {},
        min : {},
        maxScalar : {},
        minScalar : {},
        absolute : {},
        opposite : {},
        clamp : {},
        lerp : {},
        dotProduct : {},
        cross : {},
        quadraticBezier : {},
        cubicBezier : {}
      }
    }
  },
  trigonometry : {
    sine : {},
    cosine : {},
    arctan : {},
    arctan2 : {},
    sineEquation : {},
    cosineEquation : {},
    arctanEquation : {},
    helpers : {

    }
  },
  matrices : {
    matrix4x3 : {
      copy : {},
      toArray : {},
      toString : {},
      identity : {},
      scale : {},
      rotateX : {},
      rotateY : {},
      rotateZ : {},
      translate : {},
      multiply : {},
      lookAtRH : {}
    },
    matrix4x4 : {
      copy : {},
      toArray : {},
      toString : {},
      identity : {},
      scale : {},
      rotateX : {},
      rotateY : {},
      rotateZ : {},
      translate : {},
      multiply : {},
      perspective : {},
      orthographic : {}
    }
  },
  geometry : {
    circle : {
      clone : {},
      copy : {},
      set : {},
      setPositionXY : {},
      setPositionFromVector : {},
      scale : {},
      isIn : {},
      isOut : {},
      draw : {}
    },
    rectangle : {
      clone : {},
      copy : {},
      set : {},
      setPositionX : {},
      setPositionY : {},
      setPosition : {},
      setPositionXY : {},
      setPositionFromVector : {},
      setSizeX : {},
      setSizeY : {},
      setSize : {},
      setSizeXY : {},
      setSizeFromVector : {},
      setCorners : {},
      setHalfSize : {},
      isIn : {},
      draw : {}
    }
  },
  time : {
    millisecondToSecond : {},
    secondToMilliecond : {},
    millisecondToFramePerSecond : {},
    framePerSecondToMillisecond : {}
  },
  bezier : {
    quadratic : {},
    cubic : {}
  },
  random : {
    float : {},
    integer : {},
    distribution : {},
    pick : {}
  },
  array : {
    min : {},
    max : {},
    sum : {},
    multiply : {},
    average : {}
  },
  utils : {
    round : {},
    floor : {},
    ceil : {},
    trunc : {},
    roundToNearest : {},
    mix : {},
    getSign : {},
    opposite : {},
    clamp : {},
    normalize : {},
    lerp : {},
    map : {},
    isEven : {},
    isOdd : {},
    isOrigin : {},
    isPositive : {},
    isNegative : {},
    isIn : {},
    isOut : {}
  }


}

// uncomment after placing your favicon in /public/img/
app.use(favicon(path.join(__dirname, 'public/img', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));

// add <script src="//localhost:35729/livereload.js?snipver=1" async="" defer=""></script>
// for livereload of grunt-contrib-watch
if (environment === 'development')
  app.use(require('connect-livereload')({
    port: 35729
  }));

app.use('/examples', route_examples);
app.use('/doc', route_doc);
app.use('/', route_root);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (environment === 'development')
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('_error', {
      message: err.message,
      error: err
    });
  });

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('_error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
