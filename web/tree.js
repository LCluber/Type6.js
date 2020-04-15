
module.exports = {
  vectors : {
    vector2 : {
      setters : {
        set : {
          description:"Set the x and y values of the vector",
          params: [
            { name: 'x',
              type: 'number',
              description : 'Value of the X axis'
            },
            { name: 'y',
              type: 'number',
              description : 'Value of the Y axis'
            }  
          ],
          return : 'Vector2'
        },
        copy : {
          description:"Copy the values of the vector given as parameter",
          params: [
            { name: 'v',
              type: 'Vector2',
              description : 'A vector to copy'
            }
          ],
          return : 'Vector2'
        },
        setFromArray : {
          description:"Set the x and y values of the vector from the array given as parameter. array[0] for x, array[1] for y",
          params: [
            { name: 'array',
              type: 'number[]',
              description : 'The array containing values for X and Y axis'
            },
            { name: 'offset',
              type: '?number',
              description : 'the offset between X and Y values within the array'
            }  
          ],
          return : 'Vector2'
        },
        setFromAngle : {
          description:"Set the x and y values of the vector from the angle given as parameter",
          params: [
            { name: 'angle',
              type: 'number',
              description : ''
            }
          ],
          return : 'Vector2'
        },
        origin : {
          description:"Set the x and y values of this vector to zero",
          params: [
          ],
          return : 'Vector2'
        },
        setOppositeAxis : {
          description:"Read the axis given as parameter and set the other one with value given as parameter",
          params: [
            { name: 'axis',
              type: 'AxisNames2d',
              description : "The name of the axis. either 'x' or 'y'"
            },
            { name: 'value',
              type: 'number',
              description : ''
            }  
          ],
          return : 'Vector2'
        }
      },
      getters : {
        getAngle : {
          description:"Compute and return the angle of the vector",
          params: [
          ],
          return : 'number'
        },
        getMagnitude : {
          description:"Compute and return the magnitude of the vector",
          params: [
            { name: 'square',
              type: 'boolean',
              description : ''
            }
          ],
          return : 'number'
        },
        getDistance : {
          description:"Compute and returns the distance between this vector and the vector given as parameters",
          params: [
            { name: 'v',
              type: 'Vector2',
              description : ''
            },
            { name: 'square',
              type: 'boolean',
              description : ''
            } 
          ],
          return : 'number'
        },
        getMaxAxis : {
          description:"Return the name of the axis with the highest value",
          params: [
          ],
          return : 'AxisNames2d'
        },
        getMinAxis : {
          description:"Return the name of the axis with the lowest value",
          params: [ 
          ],
          return : 'AxisNames2d'
        }
      },
      export : {
        clone : {
          description:"Return a new vector identical to this vector",
          params: [
          ],
          return : 'Vector2'
        },
        toArray : {
          description:"Exports the vector as an array with two values",
          params: [
          ],
          return : 'number[]'
        },
        toString : {
          description:"Return a string containing values of each axis (x = 1; y = 1)",
          params: [
          ],
          return : 'string'
        }
      },
      check : {
        isOrigin : {
          description:"Return true if this vector is equal to (0,0) or false otherwise",
          params: [
          ],
          return : 'boolean'
        },
        isPositive : {
          description:"return true if this vector is greater than or equal to (0,0) or false otherwise",
          params: [ 
          ],
          return : 'boolean'
        }
      },
      operations : {
        additions : {
          add : {
            description:"Add a vector to this vector",
            params: [
              { name: 'v',
                type: 'Vector2',
                description : ''
              }  
            ],
            return : 'Vector2'
          },
          addScalar : {
            description:"Add a scalar number to each component of this vector",
            params: [
              { name: 'scalar',
                type: 'number',
                description : ''
              } 
            ],
            return : 'Vector2'
          },
          addScaledVector : {
            description:"Scale the vector given as first parameter with the scalar number given as second parameter then add the result to this vector",
            params: [
              { name: 'v',
                type: 'Vector2',
                description : ''
              },
              { name: 'scalar',
                type: 'number',
                description : ''
              }  
            ],
            return : 'Vector2'
          }
        },
        subtractions : {
          subtract : {
            description:"Subtract a vector from this vector",
            params: [
              { name: 'v',
                type: 'vector2',
                description : ''
              }
            ],
            return : 'Vector2'
          },
          subtractScalar : {
            description:"Subtract a scalar number from each component of this vector",
            params: [
              { name: 'scalar',
                type: 'number',
                description : ''
              }  
            ],
            return : 'Vector2'
          },
          subtractScaledVector : {
            description:"Scale the vector given as first parameter with the scalar number given as second parameter then subract the result from this vector",
            params: [
              { name: 'v',
                type: 'Vector2',
                description : ''
              },
              { name: 'scalar',
                type: 'number',
                description : ''
              }  
            ],
            return : 'Vector2'
          }
        },
        multiplications : {
          scale : {
            description:"Scale a vector by the scalar number given as parameter",
            params: [
              { name: 'value',
                type: 'number',
                description : ''
              } 
            ],
            return : 'Vector2'
          },
          multiply : {
            description:"Multiply a vector by this vector",
            params: [
              { name: 'v',
                type: 'Vector2',
                description : ''
              }
            ],
            return : 'Vector2'
          },
          multiplyScaledVector : {
            description:"Scale the vector given as first parameter with the scalar number given as second parameter then multiply the result by this vector",
            params: [
              { name: 'v',
                type: 'Vector2',
                description : ''
              },
              { name: 'scalar',
                type: 'number',
                description : ''
              }  
            ],
            return : 'Vector2'
          }
        },
        divisions : {
          divide : {
            description:"Divide a vector by this vector",
            params: [
              { name: 'v',
                type: 'Vector2',
                description : ''
              }
            ],
            return : 'Vector2'
          },
          divideScaledVector : {
            description:"Scale the vector given as first parameter with the scalar number given as second parameter then divide the result by this vector",
            params: [
              { name: 'v',
                type: 'Vector2',
                description : ''
              },
              { name: 'scalar',
                type: 'number',
                description : ''
              }  
            ],
            return : 'Vector2'
          },
          halve : {
            description:"Divide this vector by 2",
            params: [
            ],
            return : 'Vector2'
          },
          normalize : {
            description:"Reduce the vector to a unit vector of length 1",
            params: [
            ],
            return : 'Vector2'
          }
        },
        max : {
          description:"Compare this vector to the vector given as parameter and set the highest value of each axis to this vector",
          params: [
            { name: 'v',
              type: 'Vector2',
              description : ''
            } 
          ],
          return : 'Vector2'
        },
        min : {
          description:"Compare this vector to the vector given as parameter and set the lowest value of each axis to this vector",
          params: [
            { name: 'v',
              type: 'Vector2',
              description : ''
            }  
          ],
          return : 'Vector2'
        },
        maxScalar : {
          description:"Compare each axis of this vector to the scalar given as parameter and apply the scalar if the value of the axis is lower",
          params: [
            { name: 'scalar',
              type: 'number',
              description : ''
            } 
          ],
          return : 'Vector2'
        },
        minScalar : {
          description:"Compare each axis of this vector to the scalar given as parameter and apply the scalar if the value of the axis is higher",
          params: [
            { name: 'scalar',
              type: 'number',
              description : ''
            }
          ],
          return : 'Vector2'
        },
        absolute : {
          description:"Set each axis of this vector to its absolut value",
          params: [
            { name: 'x',
              type: 'number',
              description : ''
            },
            { name: 'y',
              type: 'number',
              description : ''
            }  
          ],
          return : 'Vector2'
        },
        opposite : {
          description:"Set each axis of this vector to its opposite value",
          params: [
          ],
          return : 'Vector2'
        },
        clamp : {
          description:"clamp each axis of this vector so it stays within the boundaries of the given rectangle",
          params: [
            { name: 'rectangle',
              type: 'Rectangle',
              description : ''
            } 
          ],
          return : 'Vector2'
        },
        lerp : {
          description:"Set the interpolation point between the two vectors given as first and second parameters using the normalized amount given as third parameter",
          params: [
            { name: 'min',
              type: 'Vector2',
              description : ''
            },
            { name: 'max',
              type: 'Vector2',
              description : ''
            },
            { name: 'amount',
              type: 'number',
              description : 'the amount of interpolation; some value between 0.0 (old vector) and 1.0 (new vector). 0.9 is very near the new vector. 0.5 is halfway in between.'
            }
          ],
          return : 'Vector2'
        },
        dotProduct : {
          description:"Return the dot product of this vector",
          params: [
            { name: 'v',
              type: 'Vector2',
              description : ''
            }  
          ],
          return : 'number'
        },
        quadraticBezier : {
          description:"Set the interpolation point between the three vectors given as first, second and third parameters using the normalized amount given as fourth parameter",
          params: [
            { name: 'p0',
              type: 'Vector2',
              description : ''
            },
            { name: 'p1',
              type: 'Vector2',
              description : ''
            },
            { name: 'p2',
              type: 'Vector2',
              description : ''
            },
            { name: 't',
              type: 'number',
              description : ''
            }
          ],
          return : 'Vector2'
        },
        cubicBezier : {
          description:"Set the interpolation point between the four vectors given as first, second, third and fourth parameters using the normalized amount given as fifth parameter",
          params: [
            { name: 'p0',
              type: 'Vector2',
              description : ''
            },
            { name: 'p1',
              type: 'Vector2',
              description : ''
            },
            { name: 'p2',
              type: 'Vector2',
              description : ''
            },
            { name: 'p3',
              type: 'Vector2',
              description : ''
            },
            { name: 't',
              type: 'number',
              description : ''
            } 
          ],
          return : 'Vector2'
        }
      }
    },
    vector3 : {
      setters : {
        set : {
          description:"Set the x, y and z values of the vector",
          params: [
            { name: 'x',
              type: 'number',
              description : ''
            },
            { name: 'y',
              type: 'number',
              description : ''
            },
            { name: 'z',
              type: 'number',
              description : ''
            } 
          ],
          return : 'Vector3'
        },
        copy : {
          description:"Copy the values of the vector given as parameter",
          params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            }  
          ],
          return : 'Vector3'
        },
        setFromArray : {
          description:"Set the x, y and z values of the vector from the array given as parameter. array[0] for x, array[1] for y",
          params: [
            { name: 'x',
              type: 'number',
              description : ''
            },
            { name: 'y',
              type: 'number',
              description : ''
            },
            { name: 'z',
              type: 'number',
              description : ''
            }
          ],
          return : 'Vector3'
        },
        origin : {
          description:"Set the x, y and z values of this vector to zero",
          params: [ 
          ],
          return : 'Vector3'
        }
      },
      getters : {
        getMagnitude : {
          description:"Compute and return the magnitude of the vector",
          params: [
            { name: 'square',
              type: 'boolean',
              description : ''
            } 
          ],
          return : 'number'
        },
        getDistance : {
          description:"Compute and returns the distance between this vector and the vector given as parameters",
          params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            },
            { name: 'square',
              type: 'boolean',
              description : ''
            }  
          ],
          return : 'number'
        }
      },
      export : {
        clone : {
          description:"Return a new vector identical to this vector",
          params: [ 
          ],
          return : 'Vector3'
        },
        toArray : {
          description:"Exports the vector as an array with two values",
          params: [  
          ],
          return : 'number[]'
        },
        toString : {
          description:"Return a string containing values of each axis (x = 1; y = 1; z = 1)",
          params: [
          ],
          return : 'string'
        }
      },
      check : {
        isOrigin : {
          description:"Return true if this vector is equal to (0,0,0) or false otherwise",
          params: [
          ],
          return : 'boolean'
        },
        isPositive : {
          description:"Return true if this vector is greater than or equal to (0,0,0) or false otherwise",
          params: [
          ],
          return : 'boolean'
        }
      },
      operations : {
        additions : {
          add : {
            description:"Add a vector to this vector",
            params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            }  
          ],
            return : 'Vector3'
          },
          addScalar : {
            description:"Add a scalar number to each component of this vector",
            params: [
            { name: 'scalar',
              type: 'number',
              description : ''
            } 
          ],
            return : 'Vector3'
          },
          addScaledVector : {
            description:"Scale the vector given as first parameter with the scalar number given as second parameter then add the result to this vector",
            params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            },
            { name: 'scalar',
              type: 'number',
              description : ''
            }  
          ],
            return : 'Vector3'
          }
        },
        subtractions : {
          subtract : {
            description:"Subtract a vector from this vector",
            params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            }  
          ],
            return : 'Vector3'
          },
          subtractScalar : {
            description:"Subtract a scalar number from each component of this vector",
            params: [
            { name: 'scalar',
              type: 'number',
              description : ''
            }  
          ],
            return : 'Vector3'
          },
          subtractScaledVector : {
            description:"Scale the vector given as first parameter with the scalar number given as second parameter then subract the result from this vector",
            params: [
            { name: 'V',
              type: 'Vector3',
              description : ''
            },
            { name: 'scalar',
              type: 'number',
              description : ''
            }  
          ],
            return : 'Vector3'
          }
        },
        multiplications : {
          scale : {
            description:"",
            params: [
            { name: 'value',
              type: 'number',
              description : ''
            }  
          ],
            return : 'Vector3'
          },
          multiply : {
            description:"Multiply a vector by this vector",
            params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            }  
          ],
            return : 'Vector3'
          },
          multiplyScaledVector : {
            description:"Scale the vector given as first parameter with the scalar number given as second parameter then multiply the result by this vector",
            params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            },
            { name: 'scalar',
              type: 'number',
              description : ''
            }  
          ],
            return : 'Vector3'
          }
        },
        divisions : {
          divide : {
            description:"Divide a vector by this vector",
            params: [
              { name: 'v',
                type: 'Vector3',
                description : ''
              }  
            ],
            return : 'Vector3'
          },
          divideScaledVector : {
            description:"Scale the vector given as first parameter with the scalar number given as second parameter then divide the result by this vector",
            params: [
              { name: 'v',
                type: 'Vector3',
                description : ''
              },
              { name: 'scalar',
                type: 'number',
                description : ''
              }  
            ],
            return : 'Vector3'
          },
          halve : {
            description:"Divide this vector by 2",
            params: [ 
            ],
            return : 'Vector3'
          },
          normalize : {
            description:"Reduce the vector to a unit vector of length 1",
            params: [ 
            ],
            return : 'Vector3'
          }
        },
        max : {
          description:"Compare this vector to the vector given as parameter and set the highest value of each axis to this vector",
          params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            } 
          ],
          return : 'Vector3'
        },
        min : {
          description:"Compare this vector to the vector given as parameter and set the lowest value of each axis to this vector",
          params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            }  
          ],
          return : 'Vector3'
        },
        maxScalar : {
          description:"Compare each axis of this vector to the scalar given as parameter and apply the scalar if the value of the axis is lower",
          params: [
            { name: 'scalar',
              type: 'number',
              description : ''
            }  
          ],
          return : 'Vector3'
        },
        minScalar : {
          description:"Compare each axis of this vector to the scalar given as parameter and apply the scalar if the value of the axis is higher",
          params: [
            { name: 'scalar',
              type: 'number',
              description : ''
            }  
          ],
          return : 'Vector3'
        },
        absolute : {
          description:"Set each axis of this vector to its absolut value",
          params: [ 
          ],
          return : 'Vector3'
        },
        opposite : {
          description:"Set each axis of this vector to its opposite value",
          params: [ 
          ],
          return : 'Vector3'
        },
        dotProduct : {
          description:"Return the dot product of this vector",
          params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            }  
          ],
          return : 'number'
        },
        cross : {
          description:"Return the cross product of this vector and the vector given as parameter",
          params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            }  
          ],
          return : 'Vector3'
        }
      }
    }
  },
  trigonometry : {
    setters : {
      setSinePrecision : {
        description:"Sets the precision of the sine computation by setting the number of loops to do to estimate the value",
        params: [
          { name: 'value',
            type: 'number',
            description : ''
          } 
        ],
      return : 'number'
      },
      setCosinePrecision : {
        description:"Sets the precision of the cosine computation by setting the number of loops to do to estimate the value",
        params: [
          { name: 'value',
            type: 'number',
            description : ''
          }  
        ],
        return : 'number'
      },
      setArctanPrecision : {
        description:"Sets the precision of the arctan computation by setting the number of loops to do to estimate the value",
        params: [
          { name: 'value',
            type: 'number',
            description : ''
          }  
        ],
        return : 'number'
      }
    },
    sine : {
      description:"Find the sine of an angle",
      params: [
        { name: 'angle',
          type: 'number',
          description : ''
        } 
      ],
      return : 'number'
    },
    cosine : {
      description:"Find the cosine of an angle",
      params: [
        { name: 'angle',
          type: 'number',
          description : ''
        }  
      ],
      return : 'number'
    },
    arctan : {
      description:"Estimate arctangent from an angle on 2 quadrants",
      params: [
        { name: 'angle',
          type: 'number',
          description : ''
        }  
      ],
      return : 'number'
    },
    arctan2 : {
      description:"Estimate arctangent on four quadrants",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        },
        { name: 'y',
          type: 'number',
          description : ''
        }  
      ],
      return : 'number|false'
    },
    arctan2Vector2 : {
      description:"Estimate arctangent on four quadrants from a vector Vec2",
      params: [
        { name: 'v',
          type: 'number',
          description : ''
        }
      ],
      return : 'number|false'
    },
    sineEquation : {
      description:"Compute a classic sine equation of type amplitude * sine( period + shiftX ) + shiftY",
      params: [
        { name: 'amplitude',
          type: 'number',
          description : ''
        },
        { name: 'period',
          type: 'number',
          description : ''
        },
        { name: 'shiftX',
          type: 'number',
          description : ''
        },
        { name: 'shiftY',
          type: 'number',
          description : ''
        }  
      ],
      return : 'number'
    },
    cosineEquation : {
      description:"Compute a classic cosine equation of type amplitude * cosine( period + shiftX ) + shiftY",
      params: [
        { name: 'amplitude',
          type: 'number',
          description : ''
        },
        { name: 'period',
          type: 'number',
          description : ''
        },
        { name: 'shiftX',
          type: 'number',
          description : ''
        },
        { name: 'shiftY',
          type: 'number',
          description : ''
        }  
      ],
      return : 'number'
    },
    arctanEquation : {
      description:"Compute a classic arctan equation of type amplitude * arctan( period + shiftX ) + shiftY",
      params: [
        { name: 'amplitude',
          type: 'number',
          description : ''
        },
        { name: 'period',
          type: 'number',
          description : ''
        },
        { name: 'shiftX',
          type: 'number',
          description : ''
        },
        { name: 'shiftY',
          type: 'number',
          description : ''
        }    
      ],
      return : 'number'
    },
    helpers : {
      degreeToRadian: {
        description:"",
        params: [
          { name: 'degree',
            type: 'number',
            description : ''
          } 
        ],
        return : 'number'
      },
      radianToDegree: {
        description:"",
        params: [
          { name: 'radian',
            type: 'number',
            description : ''
          } 
        ],
        return : 'number'
      },
      normalizeRadian: {
        description:"Normalizes an angle in radians between -Pi an Pi",
        params: [
          { name: 'x',
            type: 'number',
            description : ''
          },
          { name: 'y',
            type: 'number',
            description : ''
          }  
        ],
        return : 'number'
      }
    }
  },
  matrices : {
    matrix4x3 : {
      copy : {
        description:"Copy the values of the matrix given as parameter to this matrix",
        params: [
          { name: 'matrix4x3',
            type: 'Matrix4x3',
            description : ''
          }  
        ],
        return : 'Matrix4x3'
      },
      toArray : {
        description:"Return this matrix as an array",
        params: [
        ],
        return : 'Float32Array'
      },
      toString : {
        description:"Return a string describing the entire matrix",
        params: [
        ],
        return : 'string'
      },
      identity : {
        description:"Set this matrix as an identity matrix",
        params: [
        ],
        return : 'Matrix4x3'
      },
      scale : {
        description:"Scale this matrix by the Vector3 given as parameter",
        params: [
          { name: 'vector3',
            type: 'Vector3',
            description : ''
          }  
        ],
        return : 'Matrix4x3'
      },
      rotateX : {
        description:"Rotate this matrix on the X axis by the angle given as parameter",
        params: [
          { name: 'angle',
            type: 'number',
            description : ''
          }  
        ],
        return : 'Matrix4x3'
      },
      rotateY : {
        description:"Rotate this matrix on the Y axis by the angle given as parameter",
        params: [
          { name: 'angle',
            type: 'number',
            description : ''
          }  
        ],
        return : 'Matrix4x3'
      },
      rotateZ : {
        description:"Rotate this matrix on the Z axis by the angle given as parameter",
        params: [
          { name: 'angle',
            type: 'number',
            description : ''
          }  
        ],
        return : 'Matrix4x3'
      },
      translate : {
        description:"Translate this matrix by the Vector3 given as parameter",
        params: [
          { name: 'vector3',
            type: 'Vector3',
            description : ''
          }  
        ],
        return : 'Matrix4x3'
      },
      multiply : {
        description:"Multiply this matrix by the matrix given as parameter",
        params: [
          { name: 'matrix4x3',
            type: 'Matrix4x3',
            description : ''
          }  
        ],
        return : 'Matrix4x3'
      },
      lookAtRH : {
        description:"Build a right-handed look-at matrix with the cameraPosition, cameraTarget and the cameraUp vectors given as parameter",
        params: [
          { name: 'eye',
            type: 'Vector3',
            description : ''
          },
          { name: 'target',
            type: 'Vector3',
            description : ''
          },
          { name: 'up',
            type: 'Vector3',
            description : ''
          }  
        ],
        return : 'Matrix4x3'
      }
    },
    matrix4x4 : {
      copy : {
        description:"Copy the values of the matrix given as parameter to this matrix",
        params: [
          { name: 'matrix4x4',
            type: 'Matrix4x4',
            description : ''
          }  
        ],
        return : 'Matrix4x4'
      },
      toArray : {
        description:"Return this matrix as an array",
        params: [  
        ],
        return : 'Float32Array'
      },
      toString : {
        description:"Return a string describing the entire matrix",
        params: [  
        ],
        return : 'String'
      },
      identity : {
        description:"Set this matrix as an identity matrix",
        params: [  
        ],
        return : 'Matrix4x4'
      },
      scale : {
        description:"Scale this matrix by the Vector3 given as parameter",
        params: [
          { name: 'vector3',
            type: 'Vector3',
            description : ''
          }  
        ],
        return : 'Matrix4x4'
      },
      rotateX : {
        description:"Rotate this matrix on the X axis by the angle given as parameter",
        params: [
          { name: 'angle',
            type: 'number',
            description : ''
          }  
      ],
        return : 'Matrix4x4'
      },
      rotateY : {
        description:"Rotate this matrix on the Y axis by the angle given as parameter",
        params: [
          { name: 'angle',
            type: 'number',
            description : ''
          }  
      ],
        return : 'Matrix4x4'
      },
      rotateZ : {
        description:"Rotate this matrix on the Z axis by the angle given as parameter",
        params: [
          { name: 'angle',
            type: 'number',
            description : ''
          }  
      ],
        return : 'Matrix4x4'
      },
      translate : {
        description:"Translate this matrix by the Vector3 given as parameter",
        params: [
          { name: 'vector3',
            type: 'Vector3',
            description : ''
          }  
      ],
        return : 'Matrix4x4'
      },
      multiply : {
        description:"Multiply this matrix by the matrix given as parameter",
        params: [
          { name: 'matrix4x4',
            type: 'Matrix4x4',
            description : ''
          }  
      ],
        return : 'Matrix4x4'
      },
      perspective : {
        description:"Build a perspective projection matrix",
        params: [
          { name: 'fovy',
            type: 'number',
            description : ''
          },
          { name: 'aspect',
            type: 'number',
            description : ''
          },
          { name: 'znear',
            type: 'number',
            description : ''
          },
          { name: 'zfar',
            type: 'number',
            description : ''
          }  
      ],
        return : 'Matrix4x4'
      },
      orthographic : {
        description:"Build an orthographic projection matrix",
        params: [
          { name: 'left',
            type: 'number',
            description : ''
          },
          { name: 'right',
            type: 'number',
            description : ''
          },
          { name: 'top',
            type: 'number',
            description : ''
          },
          { name: 'bottom',
            type: 'number',
            description : ''
          },
          { name: 'near',
            type: 'number',
            description : ''
          },
          { name: 'far',
            type: 'number',
            description : ''
          }  
      ],
        return : 'Matrix4x4'
      }
    }
  },
  geometry : {
    circle : {
      clone : {
        description:"Return a new circle with the same properties as this circle",
        params: [ 
        ],
        return : 'Circle'
      },
      copy : {
        description:"Copy the values of the circle given as parameter into this circle",
        params: [
          { name: 'cirle',
            type: 'Circle',
            description : ''
          }  
        ],
        return : 'void'
      },
      set : {
        description:"Set this circle with position and radius given as parameter",
        params: [
          { name: 'positionX',
            type: 'number',
            description : ''
          },
          { name: 'positionY',
            type: 'number',
            description : ''
          }  
        ],
        return : 'void'
      },
      setPositionXY : {
        description:"Set the position of this circle using two number for each axis",
        params: [
          { name: 'positionX',
            type: 'number',
            description : ''
          },
          { name: 'positionY',
            type: 'number',
            description : ''
          }   
        ],
        return : 'void'
      },
      setPositionFromVector : {
        description:"Set the position of the circle using a vector2",
        params: [
          { name: 'position',
            type: 'Vector2',
            description : ''
          } 
        ],
        return : 'void'
      },
      scale : {
        description:"Scale the radius of the circle by the number given as parameter",
        params: [
          { name: 'scalar',
            type: 'number',
            description : ''
          }  
        ],
        return : 'void'
      },
      isIn : {
        description:"Check if the vector given as parameter is in this circle",
        params: [
          { name: 'v',
            type: 'Vector2',
            description : ''
          }  
        ],
        return : 'void'
      },
      draw : {
        description:"Draw this circle onto a canvas",
        params: [
          { name: 'context',
            type: 'CanvasRenderingContext2D',
            description : ''
          },
          { name: 'fillColor',
            type: 'string',
            description : ''
          },
          { name: 'strokeColor',
            type: 'string',
            description : ''
          },
          { name: 'strokeWidth',
            type: 'number',
            description : ''
          }  
        ],
        return : 'void'
      }
    },
    rectangle : {
      clone : {
        description:"Return a new rectangle with the same properties as this rectangle",
        params: [ 
        ],
        return : 'Rectangle'
      },
      copy : {
        description:"Copy the values of the rectangle given as parameter into this rectangle",
        params: [
          { name: 'rectangle',
            type: 'Rectangle',
            description : ''
          },
          { name: 'y',
            type: 'number',
            description : ''
          }  
        ],
        return : 'void'
      },
      set : {
        description:"Set this rectangle with position and size given as parameter",
        params: [
          { name: 'positionX',
            type: 'number',
            description : ''
          },
          { name: 'positionY',
            type: 'number',
            description : ''
          },
          { name: 'sizeX',
            type: 'number',
            description : ''
          },
          { name: 'sizeY',
            type: 'number',
            description : ''
          }
        ],
        return : 'void'
      },
      setPositionX : {
        description:"Set the position of the rectangle on the X axis",
        params: [
          { name: 'x',
            type: 'number',
            description : ''
          } 
        ],
        return : 'void'
      },
      setPositionY : {
        description:"Set the position of the rectangle on the Y axis",
        params: [
          { name: 'y',
            type: 'number',
            description : ''
          }  
        ],
        return : 'void'
      },
      setPositionXY : {
        description:"Set the position of the rectangle",
        params: [
          { name: 'positionX',
            type: 'number',
            description : ''
          },
          { name: 'positionY',
            type: 'number',
            description : ''
          }  
        ],
        return : 'void'
      },
      setPositionFromVector : {
        description:"Set the position of the rectangle with the Vector2 given as parameter",
        params: [
          { name: 'position',
            type: 'Vector2',
            description : ''
          },
          { name: 'y',
            type: 'number',
            description : ''
          }  
        ],
        return : 'void'
      },
      setSizeX : {
        description:"Set the width of this rectangle",
        params: [
          { name: 'width',
            type: 'number',
            description : ''
          }  
        ],
        return : 'void'
      },
      setSizeY : {
        description:"Set the height of this rectangle",
        params: [
          { name: 'height',
            type: 'number',
            description : ''
          }  
        ],
        return : 'void'
      },
      setSizeXY : {
        description:"Set the size of the rectangle",
        params: [
          { name: 'width',
            type: 'number',
            description : ''
          },
          { name: 'height',
            type: 'number',
            description : ''
          }  
        ],
        return : 'void'
      },
      setSizeFromVector : {
        description:"Set the size of the rectangle with the Vector2 given as parameter",
        params: [
          { name: 'size',
            type: 'Vector2',
            description : ''
          }  
        ],
        return : 'void'
      },
      isIn : {
        description:"Check if the vector given as parameter is in this rectangle",
        params: [
          { name: 'vector',
            type: 'Vector2',
            description : ''
          } 
        ],
        return : 'boolean'
      },
      draw : {
        description:"Draw this circle onto a canvas",
        params: [
          { name: 'context',
            type: 'CanvasRenderingContext2D',
            description : ''
          },
          { name: 'fillColor',
            type: 'string',
            description : ''
          },
          { name: 'strokeColor',
            type: 'string',
            description : ''
          },
          { name: 'strokeWidth',
            type: 'number',
            description : ''
          }  
        ],
        return : 'void'
      }
    }
  },
  time : {
    millisecToSec : {
      description:"Convert milliseconds to seconds",
      params: [
        { name: 'millisecond',
          type: 'number',
          description : ''
        }  
      ],
      return : 'number'
    },
    secToMillisec : {
      description:"Convert seconds to milliseconds",
      params: [
        { name: 'second',
          type: 'number',
          description : ''
        }  
      ],
      return : 'number'
    },
    millisecToFps : {
      description:"Convert milliseconds to frames per second",
      params: [
        { name: 'millisecond',
          type: 'number',
          description : ''
        }  
      ],
      return : 'number'
    },
    fpsToMillisec : {
      description:"Convert frame per second to millisecond",
      params: [
        { name: 'refreshRate',
          type: 'number',
          description : ''
        }  
      ],
      return : 'number'
    }
  },
  bezier : {
    quadratic : {
      description:"Compute one dimension quadratic bezier curve",
      params: [
        { name: 'p0',
          type: 'number',
          description : ''
        },
        { name: 'p1',
          type: 'number',
          description : ''
        },
        { name: 'p2',
          type: 'number',
          description : ''
        },
        { name: 't',
          type: 'number',
          description : ''
        }
      ],
      return : 'number'
    },
    cubic : {
      description:"Compute one dimension cubic bezier",
      params: [
        { name: 'p0',
          type: 'number',
          description : ''
        },
        { name: 'p1',
          type: 'number',
          description : ''
        },
        { name: 'p2',
          type: 'number',
          description : ''
        },
        { name: 'p3',
          type: 'number',
          description : ''
        },
        { name: 't',
          type: 'number',
          description : ''
        }  
      ],
      return : 'number'
    }
  },
  random : {
    float : {
      description:"Return a random floating number between min and max numbers given as parameters",
      params: [
        { name: 'min',
          type: 'number',
          description : ''
        },
        { name: 'max',
          type: 'number',
          description : ''
        }  
      ],
      return : 'number'
    },
    integer : {
      description:"Return an integer floating number between min and max numbers given as parameters",
      params: [
        { name: 'min',
          type: 'number',
          description : ''
        },
        { name: 'max',
          type: 'number',
          description : ''
        }
      ],
      return : 'number'
    },
    distribution : {
      description:"Compute random distribution with min, max and iteration numbers given as parameters",
      params: [
        { name: 'min',
          type: 'number',
          description : ''
        },
        { name: 'max',
          type: 'number',
          description : ''
        },
        { name: 'iterations',
          type: 'number',
          description : ''
        }
      ],
      return : 'number'
    },
    pick : {
      description:"Pick randomly between the two numbers given as parameter",
      params: [
        { name: 'value1',
          type: 'number',
          description : ''
        },
        { name: 'value2',
          type: 'number',
          description : ''
        }
      ],
      return : 'number'
    }
  },
  array : {
    min : {
      description:"Return the lowest number of the array",
      params: [
        { name: 'array',
          type: 'number[]',
          description : ''
        }
      ],
      return : 'number'
    },
    max : {
      description:"Return the highest number of the array",
      params: [
        { name: 'array',
          type: 'number[]',
          description : ''
        }
      ],
      return : 'number'
    },
    sum : {
      description:"Return the sum of all numbers of the array",
      params: [
        { name: 'array',
          type: 'number[]',
          description : ''
        } 
      ],
      return : 'number'
    },
    multiply : {
      description:"Return the product of all numbers of the array",
      params: [
        { name: 'array',
          type: 'number[]',
          description : ''
        }
      ],
      return : 'number'
    },
    average : {
      description:"Return the average of all numbers of the array",
      params: [
        { name: 'array',
          type: 'number[]',
          description : ''
        }
      ],
      return : 'number'
    }
  },
  utils : {
    round : {
      description:"Return the number given as first parameter rounded with the number of decimals given as second parameter",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        },
        { name: 'decimals',
          type: 'number',
          description : ''
        }  
      ],
      return : 'number'
    },
    floor : {
      description:"Return the number given as first parameter floored with the number of decimals given as second parameter",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        },
        { name: 'decimals',
          type: 'number',
          description : ''
        }  
      ],
      return : 'number'
    },
    ceil : {
      description:"Return the number given as first parameter ceiled with the number of decimals given as second parameter",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        },
        { name: 'decimals',
          type: 'number',
          description : ''
        }  
      ],
      return : 'number'
    },
    trunc : {
      description:"Return the number given as first parameter truncated with the number of decimals given as second parameter",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        },
        { name: 'decimals',
          type: 'number',
          description : ''
        }  
      ],
      return : 'number'
    },
    roundToNearest : {
      description:"Return the number given as first parameter rounded to the nearest multiple of the number given as second parameter",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        },
        { name: 'nearest',
          type: 'number',
          description : ''
        }  
      ],
      return : 'number'
    },
    mix : {
      description:"Return the linear blend of x and y, i.e. the product of x and (1 - a) plus the product of y and a",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        },
        { name: 'y',
          type: 'number',
          description : ''
        },
        { name: 'ratio',
          type: 'number',
          description : ''
        }  
      ],
      return : 'number'
    },
    getSign : {
      description:"Return the sign (-1, 1 or 0) of the number given as parameter",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        }
      ],
      return : 'number'
    },
    opposite : {
      description:"Return the opposite of the number given as parameter",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        }
      ],
      return : 'number'
    },
    clamp : {
      description:"Clamp the number givens as first parameter into the limits of the min and max numbers given as second ans third parameters",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        },
        { name: 'min',
          type: 'number',
          description : ''
        },
        { name: 'max',
          type: 'number',
          description : ''
        }  
      ],
      return : 'number'
    },
    normalize : {
      description:"Convert the number given as first parameter to a number from zero to one that indicates where it lies in the range given as second and third parameters",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        },
        { name: 'min',
          type: 'number',
          description : ''
        },
        { name: 'max',
          type: 'number',
          description : ''
        }  
      ],
      return : 'number'
    },
    lerp : {
      description:"Return the interpolation value between the two numbers given as first and second parameters using the normalized amount given as third parameter",
      params: [
        { name: 'min',
          type: 'number',
          description : ''
        },
        { name: 'max',
          type: 'number',
          description : ''
        },
        { name: 'amount',
          type: 'number',
          description : ''
        }  
      ],
      return : 'number'
    },
    map : {
      description:"Interpolate the number given as first parameter between boundaies given as second and third parameter then map it to boundaries given as fourth and fifth parameters",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        },
        { name: 'sourceMin',
          type: 'number',
          description : ''
        },
        { name: 'sourceMax',
          type: 'number',
          description : ''
        },
        { name: 'destMin',
          type: 'number',
          description : ''
        },
        { name: 'destMax',
          type: 'number',
          description : ''
        } 
      ],
      return : 'number'
    },
    isEven : {
      description:"Check if the number given a parameter is even",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        }
      ],
      return : 'boolean'
    },
    isOdd : {
      description:"Check if the number given a parameter is even",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        } 
      ],
      return : 'boolean'
    },
    isOrigin : {
      description:"Check if the number given as parameter is equal to zero",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        }
      ],
      return : 'boolean'
    },
    isPositive : {
      description:"Check if the number given as parameter is positive",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        }
      ],
      return : 'boolean'
    },
    isNegative : {
      description:"Check if the number given as parameter is negative",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        }
      ],
      return : 'boolean'
    },
    isIn : {
      description:"Check if the number given as first parameter is within the boundaries given as second and third parameter",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        },
        { name: 'min',
          type: 'number',
          description : ''
        },
        { name: 'max',
          type: 'number',
          description : ''
        }
      ],
      return : 'boolean'
    },
    isOut : {
      description:"Check if the number given as first parameter is outside the boundaries given as second and third parameter",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        },
        { name: 'min',
          type: 'number',
          description : ''
        },
        { name: 'max',
          type: 'number',
          description : ''
        }
      ],
      return : 'boolean'
    }
  }
}