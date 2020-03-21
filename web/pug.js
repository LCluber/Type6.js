const fs = require('fs');
const path = require("path");
const pug = require('pug');

const menu = {
  vectors : {
    vector2 : {
      setters : {
        set : {
          params: {
            x:'number',
            y:'number'
          },
          return : 'Vector2'
        },
        copy : {
          params: {
            v:'Vector2'
          },
          return : 'Vector2'
        },
        setFromArray : {
          params: {
            array: 'number[]',
            offset: '?number'
          },
          return : 'Vector2'
        },
        setFromAngle : {
          params: {
            x:'number',
            y:'number'
          },
          return : 'Vector2'
        },
        origin : {
          params: {
            x:'number',
            y:'number'
          },
          return : 'Vector2'
        },
        setOppositeAxis : {
          params: {
            x:'number',
            y:'number'
          },
          return : 'Vector2'
        }
      },
      getters : {
        getAngle : {
          params: {
            x:'number',
            y:'number'
          },
          return : 'Vector2'
        },
        getMagnitude : {
          params: {
            x:'number',
            y:'number'
          },
          return : 'Vector2'
        },
        getDistance : {
          params: {
            x:'number',
            y:'number'
          },
          return : 'Vector2'
        },
        getMaxAxis : {
          params: {
            x:'number',
            y:'number'
          },
          return : 'Vector2'
        },
        getMinAxis : {
          params: {
            x:'number',
            y:'number'
          },
          return : 'Vector2'
        }
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

options = {
  menu: menu
};

// Compile the source code
const html = pug.renderFile(path.join(__dirname, './views/index.pug'), options);
fs.writeFile(path.join(__dirname, './public/index.html'), html, function (err) {
  if (err) throw err;
  console.log('File saved!');
});