
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
          return : { 
            type: 'Vector2',
            description : '' 
          } 
        },
        copy : {
          description:"Copy the values of the vector given as parameter",
          params: [
            { name: 'v',
              type: 'Vector2',
              description : 'A vector to copy'
            }
          ],
          return : { 
            type: 'Vector2',
            description : '' 
          }
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
          return : { 
            type: 'Vector2',
            description : '' 
          }
        },
        setFromAngle : {
          description:"Set the x and y values of the vector from the angle given as parameter",
          params: [
            { name: 'angle',
              type: 'number',
              description : ''
            }
          ],
          return : { 
            type: 'Vector2',
            description : '' 
          }
        },
        origin : {
          description:"Set the x and y values of this vector to zero",
          params: [
          ],
          return : { 
            type: 'Vector2',
            description : '' 
          }
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
          return : { 
            type: 'Vector2',
            description : '' 
          }
        }
      },
      getters : {
        getAngle : {
          description:"Compute and return the angle of the vector",
          params: [
          ],
          return : { 
            type: 'number',
            description : '' 
          }
        },
        getMagnitude : {
          description:"Compute and return the magnitude of the vector",
          params: [
            { name: 'square',
              type: 'boolean',
              description : ''
            }
          ],
          return : { 
            type: 'number',
            description : '' 
          }
        },
        getDistance : {
          description:"Compute and returns the distance between this vector and the vector given as parameter",
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
          return : { 
            type: 'number',
            description : '' 
          }
        },
        getMaxAxis : {
          description:"Return the name of the axis with the highest value",
          params: [
          ],
          return : { 
            type: 'AxisNames2d',
            description : '' 
          }
        },
        getMinAxis : {
          description:"Return the name of the axis with the lowest value",
          params: [ 
          ],
          return : { 
            type: 'AxisNames2d',
            description : '' 
          }
        }
      },
      export : {
        clone : {
          description:"Return a new vector identical to this vector",
          params: [
          ],
          return : { 
            type: 'Vector2',
            description : '' 
          }
        },
        toArray : {
          description:"Exports the vector as an array with two values",
          params: [
          ],
          return : { 
            type: 'number[]',
            description : '' 
          }
        },
        toString : {
          description:"Return a string containing values of each axis (x = 1; y = 1)",
          params: [
          ],
          return : { 
            type: 'String',
            description : '' 
          }
        }
      },
      check : {
        isOrigin : {
          description:"Return true if this vector is equal to (0,0) or false otherwise",
          params: [
          ],
          return : { 
            type: 'boolean',
            description : '' 
          }
        },
        isPositive : {
          description:"return true if this vector is greater than or equal to (0,0) or false otherwise",
          params: [ 
          ],
          return : { 
            type: 'boolean',
            description : '' 
          }
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
            return : { 
              type: 'Vector2',
              description : 'Value of the Y axis' 
            }
          },
          addScalar : {
            description:"Add a scalar number to each component of this vector",
            params: [
              { name: 'scalar',
                type: 'number',
                description : ''
              } 
            ],
            return : { 
              type: 'Vector2',
              description : 'Value of the Y axis' 
            }
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
            return : { 
              type: 'Vector2',
              description : 'Value of the Y axis' 
            }
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
            return : { 
              type: 'Vector2',
              description : 'Value of the Y axis' 
            }
          },
          subtractScalar : {
            description:"Subtract a scalar number from each component of this vector",
            params: [
              { name: 'scalar',
                type: 'number',
                description : ''
              }  
            ],
            return : { 
              type: 'Vector2',
              description : 'Value of the Y axis' 
            }
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
            return : { 
              type: 'Vector2',
              description : 'Value of the Y axis' 
            }
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
            return : { 
              type: 'Vector2',
              description : 'Value of the Y axis' 
            }
          },
          multiply : {
            description:"Multiply a vector by this vector",
            params: [
              { name: 'v',
                type: 'Vector2',
                description : ''
              }
            ],
            return : { 
              type: 'Vector2',
              description : 'Value of the Y axis' 
            }
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
            return : { 
              type: 'Vector2',
              description : 'Value of the Y axis' 
            }
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
            return : { 
              type: 'Vector2',
              description : 'Value of the Y axis' 
            }
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
            return : { 
              type: 'Vector2',
              description : 'Value of the Y axis' 
            }
          },
          halve : {
            description:"Divide this vector by 2",
            params: [
            ],
            return : { 
              type: 'Vector2',
              description : 'Value of the Y axis' 
            }
          },
          normalize : {
            description:"Reduce the vector to a unit vector of length 1",
            params: [
            ],
            return : { 
              type: 'Vector2',
              description : 'Value of the Y axis' 
            }
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
          return : { 
            type: 'Vector2',
            description : '' 
          }
        },
        min : {
          description:"Compare this vector to the vector given as parameter and set the lowest value of each axis to this vector",
          params: [
            { name: 'v',
              type: 'Vector2',
              description : ''
            }  
          ],
          return : { 
            type: 'Vector2',
            description : '' 
          }
        },
        maxScalar : {
          description:"Compare each axis of this vector to the scalar given as parameter and apply the scalar if the value of the axis is lower",
          params: [
            { name: 'scalar',
              type: 'number',
              description : ''
            } 
          ],
          return : { 
            type: 'Vector2',
            description : '' 
          }
        },
        minScalar : {
          description:"Compare each axis of this vector to the scalar given as parameter and apply the scalar if the value of the axis is higher",
          params: [
            { name: 'scalar',
              type: 'number',
              description : ''
            }
          ],
          return : { 
            type: 'Vector2',
            description : '' 
          }
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
          return : { 
            type: 'Vector2',
            description : '' 
          }
        },
        opposite : {
          description:"Set each axis of this vector to its opposite value",
          params: [
          ],
          return : { 
            type: 'Vector2',
            description : '' 
          }
        },
        clamp : {
          description:"clamp each axis of this vector so it stays within the boundaries of the given rectangle",
          params: [
            { name: 'rectangle',
              type: 'Rectangle',
              description : ''
            } 
          ],
          return : { 
            type: 'Vector2',
            description : '' 
          }
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
          return : { 
            type: 'Vector2',
            description : '' 
          }
        },
        dotProduct : {
          description:"Return the dot product of this vector",
          params: [
            { name: 'v',
              type: 'Vector2',
              description : ''
            }  
          ],
          return : { 
            type: 'number',
            description : '' 
          }
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
          return : { 
            type: 'Vector2',
            description : '' 
          }
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
          return : { 
            type: 'Vector2',
            description : '' 
          }
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
          return : { 
            type: 'Vector3',
            description : '' 
          }
        },
        copy : {
          description:"Copy the values of the vector given as parameter",
          params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            }  
          ],
          return : { 
            type: 'Vector3',
            description : '' 
          }
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
          return : { 
            type: 'Vector3',
            description : '' 
          }
        },
        origin : {
          description:"Set the x, y and z values of this vector to zero",
          params: [ 
          ],
          return : { 
            type: 'Vector3',
            description : '' 
          }
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
          return : { 
            type: 'number',
            description : '' 
          }
        },
        getDistance : {
          description:"Compute and returns the distance between this vector and the vector given as parameter",
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
          return : { 
            type: 'number',
            description : '' 
          }
        }
      },
      export : {
        clone : {
          description:"Return a new vector identical to this vector",
          params: [ 
          ],
          return : { 
            type: 'Vector3',
            description : '' 
          }
        },
        toArray : {
          description:"Exports the vector as an array with two values",
          params: [  
          ],
          return : { 
            type: 'number[]',
            description : '' 
          }
        },
        toString : {
          description:"Return a string containing values of each axis (x = 1; y = 1; z = 1)",
          params: [
          ],
          return : { 
          type: 'String',
          description : '' 
        }
        }
      },
      check : {
        isOrigin : {
          description:"Return true if this vector is equal to (0,0,0) or false otherwise",
          params: [
          ],
          return : { 
            type: 'boolean',
            description : '' 
          }
        },
        isPositive : {
          description:"Return true if this vector is greater than or equal to (0,0,0) or false otherwise",
          params: [
          ],
          return : { 
            type: 'boolean',
            description : '' 
          }
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
            return : { 
            type: 'Vector3',
            description : '' 
          }
          },
          addScalar : {
            description:"Add a scalar number to each component of this vector",
            params: [
            { name: 'scalar',
              type: 'number',
              description : ''
            } 
          ],
            return : { 
            type: 'Vector3',
            description : '' 
          }
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
            return : { 
            type: 'Vector3',
            description : '' 
          }
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
            return : { 
            type: 'Vector3',
            description : '' 
          }
          },
          subtractScalar : {
            description:"Subtract a scalar number from each component of this vector",
            params: [
            { name: 'scalar',
              type: 'number',
              description : ''
            }  
          ],
            return : { 
            type: 'Vector3',
            description : '' 
          }
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
            return : { 
            type: 'Vector3',
            description : '' 
          }
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
            return : { 
            type: 'Vector3',
            description : '' 
          }
          },
          multiply : {
            description:"Multiply a vector by this vector",
            params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            }  
          ],
            return : { 
            type: 'Vector3',
            description : '' 
          }
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
            return : { 
            type: 'Vector3',
            description : '' 
          }
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
            return : { 
            type: 'Vector3',
            description : '' 
          }
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
            return : { 
            type: 'Vector3',
            description : '' 
          }
          },
          halve : {
            description:"Divide this vector by 2",
            params: [ 
            ],
            return : { 
            type: 'Vector3',
            description : '' 
          }
          },
          normalize : {
            description:"Reduce the vector to a unit vector of length 1",
            params: [ 
            ],
            return : { 
            type: 'Vector3',
            description : '' 
          }
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
          return : { 
            type: 'Vector3',
            description : '' 
          }
        },
        min : {
          description:"Compare this vector to the vector given as parameter and set the lowest value of each axis to this vector",
          params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            }  
          ],
          return : { 
            type: 'Vector3',
            description : '' 
          }
        },
        maxScalar : {
          description:"Compare each axis of this vector to the scalar given as parameter and apply the scalar if the value of the axis is lower",
          params: [
            { name: 'scalar',
              type: 'number',
              description : ''
            }  
          ],
          return : { 
            type: 'Vector3',
            description : '' 
          }
        },
        minScalar : {
          description:"Compare each axis of this vector to the scalar given as parameter and apply the scalar if the value of the axis is higher",
          params: [
            { name: 'scalar',
              type: 'number',
              description : ''
            }  
          ],
          return : { 
            type: 'Vector3',
            description : '' 
          }
        },
        absolute : {
          description:"Set each axis of this vector to its absolut value",
          params: [ 
          ],
          return : { 
            type: 'Vector3',
            description : '' 
          }
        },
        opposite : {
          description:"Set each axis of this vector to its opposite value",
          params: [ 
          ],
          return : { 
            type: 'Vector3',
            description : '' 
          }
        },
        dotProduct : {
          description:"Return the dot product of this vector",
          params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            }  
          ],
          return : { 
            type: 'number',
            description : '' 
          }
        },
        cross : {
          description:"Return the cross product of this vector and the vector given as parameter",
          params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            }  
          ],
          return : { 
            type: 'Vector3',
            description : '' 
          }
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
      return : { 
            type: 'number',
            description : '' 
          }
      },
      setCosinePrecision : {
        description:"Sets the precision of the cosine computation by setting the number of loops to do to estimate the value",
        params: [
          { name: 'value',
            type: 'number',
            description : ''
          }  
        ],
        return : { 
            type: 'number',
            description : '' 
          }
      },
      setArctanPrecision : {
        description:"Sets the precision of the arctan computation by setting the number of loops to do to estimate the value",
        params: [
          { name: 'value',
            type: 'number',
            description : ''
          }  
        ],
        return : { 
            type: 'number',
            description : '' 
          }
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
      return : { 
            type: 'number',
            description : '' 
          }
    },
    cosine : {
      description:"Find the cosine of an angle",
      params: [
        { name: 'angle',
          type: 'number',
          description : ''
        }  
      ],
      return : { 
            type: 'number',
            description : '' 
          }
    },
    arctan : {
      description:"Estimate arctangent from an angle on 2 quadrants",
      params: [
        { name: 'angle',
          type: 'number',
          description : ''
        }  
      ],
      return : { 
            type: 'number',
            description : '' 
          }
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
      return : { 
        type: 'number|false',
        description : '' 
      }
    },
    arctan2Vector2 : {
      description:"Estimate arctangent on four quadrants from a vector Vec2",
      params: [
        { name: 'v',
          type: 'number',
          description : ''
        }
      ],
      return : { 
        type: 'number|false',
        description : '' 
      }
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
      return : { 
        type: 'number',
        description : '' 
      }
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
      return : { 
        type: 'number',
        description : '' 
      }
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
      return : { 
        type: 'number',
        description : '' 
      }
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
        return : { 
          type: 'number',
          description : '' 
        }
      },
      radianToDegree: {
        description:"",
        params: [
          { name: 'radian',
            type: 'number',
            description : ''
          } 
        ],
        return : { 
          type: 'number',
          description : '' 
        }
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
        return : { 
          type: 'number',
          description : '' 
        }
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
        return : { 
          type: 'Matrix4x3',
          description : '' 
        }
      },
      toArray : {
        description:"Return this matrix as an array",
        params: [
        ],
        return : { 
          type: 'Float32Array',
          description : '' 
        }
      },
      toString : {
        description:"Return a string describing the entire matrix",
        params: [
        ],
        return : { 
          type: 'String',
          description : '' 
        }
      },
      identity : {
        description:"Set this matrix as an identity matrix",
        params: [
        ],
        return : { 
          type: 'Matrix4x3',
          description : '' 
        }
      },
      scale : {
        description:"Scale this matrix by the Vector3 given as parameter",
        params: [
          { name: 'vector3',
            type: 'Vector3',
            description : ''
          }  
        ],
        return : { 
          type: 'Matrix4x3',
          description : '' 
        }
      },
      rotateX : {
        description:"Rotate this matrix on the X axis by the angle given as parameter",
        params: [
          { name: 'angle',
            type: 'number',
            description : ''
          }  
        ],
        return : { 
          type: 'Matrix4x3',
          description : '' 
        }
      },
      rotateY : {
        description:"Rotate this matrix on the Y axis by the angle given as parameter",
        params: [
          { name: 'angle',
            type: 'number',
            description : ''
          }  
        ],
        return : { 
          type: 'Matrix4x3',
          description : '' 
        }
      },
      rotateZ : {
        description:"Rotate this matrix on the Z axis by the angle given as parameter",
        params: [
          { name: 'angle',
            type: 'number',
            description : ''
          }  
        ],
        return : { 
          type: 'Matrix4x3',
          description : '' 
        }
      },
      translate : {
        description:"Translate this matrix by the Vector3 given as parameter",
        params: [
          { name: 'vector3',
            type: 'Vector3',
            description : ''
          }  
        ],
        return : { 
          type: 'Matrix4x3',
          description : '' 
        }
      },
      multiply : {
        description:"Multiply this matrix by the matrix given as parameter",
        params: [
          { name: 'matrix4x3',
            type: 'Matrix4x3',
            description : ''
          }  
        ],
        return : { 
          type: 'Matrix4x3',
          description : '' 
        }
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
        return : { 
          type: 'Matrix4x3',
          description : '' 
        }
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
        return : { 
          type: 'Matrix4x4',
          description : '' 
        }
      },
      toArray : {
        description:"Return this matrix as an array",
        params: [  
        ],
        return : { 
          type: 'Float32Array',
          description : '' 
        }
      },
      toString : {
        description:"Return a string describing the entire matrix",
        params: [  
        ],
        return : { 
          type: 'String',
          description : '' 
        }
      },
      identity : {
        description:"Set this matrix as an identity matrix",
        params: [  
        ],
        return : { 
          type: 'Matrix4x4',
          description : '' 
        }
      },
      scale : {
        description:"Scale this matrix by the Vector3 given as parameter",
        params: [
          { name: 'vector3',
            type: 'Vector3',
            description : ''
          }  
        ],
        return : { 
          type: 'Matrix4x4',
          description : '' 
        }
      },
      rotateX : {
        description:"Rotate this matrix on the X axis by the angle given as parameter",
        params: [
          { name: 'angle',
            type: 'number',
            description : ''
          }  
      ],
        return : { 
          type: 'Matrix4x4',
          description : '' 
        }
      },
      rotateY : {
        description:"Rotate this matrix on the Y axis by the angle given as parameter",
        params: [
          { name: 'angle',
            type: 'number',
            description : ''
          }  
      ],
        return : { 
          type: 'Matrix4x4',
          description : '' 
        }
      },
      rotateZ : {
        description:"Rotate this matrix on the Z axis by the angle given as parameter",
        params: [
          { name: 'angle',
            type: 'number',
            description : ''
          }  
      ],
        return : { 
          type: 'Matrix4x4',
          description : '' 
        }
      },
      translate : {
        description:"Translate this matrix by the Vector3 given as parameter",
        params: [
          { name: 'vector3',
            type: 'Vector3',
            description : ''
          }  
      ],
        return : { 
          type: 'Matrix4x4',
          description : '' 
        }
      },
      multiply : {
        description:"Multiply this matrix by the matrix given as parameter",
        params: [
          { name: 'matrix4x4',
            type: 'Matrix4x4',
            description : ''
          }  
      ],
        return : { 
          type: 'Matrix4x4',
          description : '' 
        }
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
        return : { 
          type: 'Matrix4x4',
          description : '' 
        }
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
        return : { 
          type: 'Matrix4x4',
          description : '' 
        }
      }
    }
  },
  geometry : {
    circle : {
      clone : {
        description:"Return a new circle with the same properties as this circle",
        params: [ 
        ],
        return : { 
          type: 'Circle',
          description : '' 
        }
      },
      copy : {
        description:"Copy the values of the circle given as parameter into this circle",
        params: [
          { name: 'cirle',
            type: 'Circle',
            description : ''
          }  
        ],
        return : { 
          type: 'void',
          description : '' 
        }
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
        return : { 
          type: 'void',
          description : '' 
        }
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
        return : { 
          type: 'void',
          description : '' 
        }
      },
      setPositionFromVector : {
        description:"Set the position of the circle using a vector2",
        params: [
          { name: 'position',
            type: 'Vector2',
            description : ''
          } 
        ],
        return : { 
          type: 'void',
          description : '' 
        }
      },
      scale : {
        description:"Scale the radius of the circle by the number given as parameter",
        params: [
          { name: 'scalar',
            type: 'number',
            description : ''
          }  
        ],
        return : { 
          type: 'void',
          description : '' 
        }
      },
      isIn : {
        description:"Check if the vector given as parameter is in this circle",
        params: [
          { name: 'v',
            type: 'Vector2',
            description : ''
          }  
        ],
        return : { 
          type: 'void',
          description : '' 
        }
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
        return : { 
          type: 'void',
          description : '' 
        }
      }
    },
    rectangle : {
      clone : {
        description:"Return a new rectangle with the same properties as this rectangle",
        params: [ 
        ],
        return : { 
          type: 'Rectangle',
          description : '' 
        }
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
        return : { 
          type: 'void',
          description : '' 
        }
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
        return : { 
          type: 'void',
          description : '' 
        }
      },
      setPositionX : {
        description:"Set the position of the rectangle on the X axis",
        params: [
          { name: 'x',
            type: 'number',
            description : ''
          } 
        ],
        return : { 
          type: 'void',
          description : '' 
        }
      },
      setPositionY : {
        description:"Set the position of the rectangle on the Y axis",
        params: [
          { name: 'y',
            type: 'number',
            description : ''
          }  
        ],
        return : { 
          type: 'void',
          description : '' 
        }
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
        return : { 
          type: 'void',
          description : '' 
        }
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
        return : { 
          type: 'void',
          description : '' 
        }
      },
      setSizeX : {
        description:"Set the width of this rectangle",
        params: [
          { name: 'width',
            type: 'number',
            description : ''
          }  
        ],
        return : { 
          type: 'void',
          description : '' 
        }
      },
      setSizeY : {
        description:"Set the height of this rectangle",
        params: [
          { name: 'height',
            type: 'number',
            description : ''
          }  
        ],
        return : { 
          type: 'void',
          description : '' 
        }
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
        return : { 
          type: 'void',
          description : '' 
        }
      },
      setSizeFromVector : {
        description:"Set the size of the rectangle with the Vector2 given as parameter",
        params: [
          { name: 'size',
            type: 'Vector2',
            description : ''
          }  
        ],
        return : { 
          type: 'void',
          description : '' 
        }
      },
      isIn : {
        description:"Check if the vector given as parameter is in this rectangle",
        params: [
          { name: 'vector',
            type: 'Vector2',
            description : ''
          } 
        ],
        return : { 
            type: 'boolean',
            description : '' 
          }
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
        return : { 
          type: 'void',
          description : '' 
        }
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
      return : { 
            type: 'number',
            description : '' 
          }
    },
    secToMillisec : {
      description:"Convert seconds to milliseconds",
      params: [
        { name: 'second',
          type: 'number',
          description : ''
        }  
      ],
      return : { 
            type: 'number',
            description : '' 
          }
    },
    millisecToFps : {
      description:"Convert milliseconds to frames per second",
      params: [
        { name: 'millisecond',
          type: 'number',
          description : ''
        }  
      ],
      return : { 
            type: 'number',
            description : '' 
          }
    },
    fpsToMillisec : {
      description:"Convert frame per second to millisecond",
      params: [
        { name: 'refreshRate',
          type: 'number',
          description : ''
        }  
      ],
      return : { 
            type: 'number',
            description : '' 
          }
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
      return : { 
            type: 'number',
            description : '' 
          }
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
      return : { 
            type: 'number',
            description : '' 
          }
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
      return : { 
            type: 'number',
            description : '' 
          }
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
      return : { 
            type: 'number',
            description : '' 
          }
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
      return : { 
            type: 'number',
            description : '' 
          }
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
      return : { 
            type: 'number',
            description : '' 
          }
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
      return : { 
            type: 'number',
            description : '' 
          }
    },
    max : {
      description:"Return the highest number of the array",
      params: [
        { name: 'array',
          type: 'number[]',
          description : ''
        }
      ],
      return : { 
            type: 'number',
            description : '' 
          }
    },
    sum : {
      description:"Return the sum of all numbers of the array",
      params: [
        { name: 'array',
          type: 'number[]',
          description : ''
        } 
      ],
      return : { 
            type: 'number',
            description : '' 
          }
    },
    multiply : {
      description:"Return the product of all numbers of the array",
      params: [
        { name: 'array',
          type: 'number[]',
          description : ''
        }
      ],
      return : { 
            type: 'number',
            description : '' 
          }
    },
    average : {
      description:"Return the average of all numbers of the array",
      params: [
        { name: 'array',
          type: 'number[]',
          description : ''
        }
      ],
      return : { 
            type: 'number',
            description : '' 
          }
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
      return : { 
            type: 'number',
            description : '' 
          }
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
      return : { 
            type: 'number',
            description : '' 
          }
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
      return : { 
            type: 'number',
            description : '' 
          }
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
      return : { 
            type: 'number',
            description : '' 
          }
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
      return : { 
            type: 'number',
            description : '' 
          }
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
      return : { 
            type: 'number',
            description : '' 
          }
    },
    getSign : {
      description:"Return the sign (-1, 1 or 0) of the number given as parameter",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        }
      ],
      return : { 
            type: 'number',
            description : '' 
          }
    },
    opposite : {
      description:"Return the opposite of the number given as parameter",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        }
      ],
      return : { 
            type: 'number',
            description : '' 
          }
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
      return : { 
            type: 'number',
            description : '' 
          }
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
      return : { 
            type: 'number',
            description : '' 
          }
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
      return : { 
            type: 'number',
            description : '' 
          }
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
      return : { 
            type: 'number',
            description : '' 
          }
    },
    isEven : {
      description:"Check if the number given a parameter is even",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        }
      ],
      return : { 
            type: 'boolean',
            description : '' 
          }
    },
    isOdd : {
      description:"Check if the number given a parameter is even",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        } 
      ],
      return : { 
            type: 'boolean',
            description : '' 
          }
    },
    isOrigin : {
      description:"Check if the number given as parameter is equal to zero",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        }
      ],
      return : { 
            type: 'boolean',
            description : '' 
          }
    },
    isPositive : {
      description:"Check if the number given as parameter is positive",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        }
      ],
      return : { 
            type: 'boolean',
            description : '' 
          }
    },
    isNegative : {
      description:"Check if the number given as parameter is negative",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        }
      ],
      return : { 
            type: 'boolean',
            description : '' 
          }
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
      return : { 
            type: 'boolean',
            description : '' 
          }
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
      return : { 
            type: 'boolean',
            description : '' 
          }
    }
  }
}