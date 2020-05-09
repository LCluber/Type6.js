
module.exports = {
  vectors : {
    vector2 : {
      setters : {
        set : {
          class: 'Vector2',
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
            description : 'The vector with its new values' 
          }
        },
        copy : {
          class: 'Vector2',
          description:"Copy the values of the vector given as parameter",
          params: [
            { name: 'v',
              type: 'Vector2',
              description : 'A vector to copy'
            }
          ],
          return : { 
            type: 'Vector2',
            description : 'The vector with its new values' 
          }
        },
        setFromArray : {
          class: 'Vector2',
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
            description : 'The vector with its new values' 
          }
        },
        setFromAngle : {
          class: 'Vector2',
          description:"Set the x and y values of the vector from the angle given as parameter",
          params: [
            { name: 'angle',
              type: 'number',
              description : ''
            }
          ],
          return : { 
            type: 'Vector2',
            description : 'The vector with its new values' 
          }
        },
        origin : {
          class: 'Vector2',
          description:"Set the x and y values of this vector to zero",
          params: [
          ],
          return : { 
            type: 'Vector2',
            description : 'The vector with its new values' 
          }
        },
        setOppositeAxis : {
          class: 'Vector2',
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
            description : 'The vector with its new axis value' 
          }
        }
      },
      getters : {
        getAngle : {
          class: 'Vector2',
          description:"Compute and return the angle in the plane (in radians) between the positive x-axis and the ray from (0,0) to the point (x,y)",
          params: [
          ],
          return : { 
            type: 'number',
            description : 'The angle in radians (in [-π,π]) between the positive x-axis and the ray from (0,0) to the point' 
          }
        },
        getMagnitude : {
          class: 'Vector2',
          description:"Compute and return the magnitude of the vector",
          params: [
            { name: 'square',
              type: 'boolean',
              description : ''
            }
          ],
          return : { 
            type: 'number',
            description : 'The magnitude of the vector or the squared magnitude depending on the given parameter' 
          }
        },
        getDistance : {
          class: 'Vector2',
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
            description : 'The distance between the vectors' 
          }
        },
        getMaxAxis : {
          class: 'Vector2',
          description:"Return the name of the axis with the highest value",
          params: [
          ],
          return : { 
            type: 'AxisNames2d',
            description : 'The name of the axis' 
          }
        },
        getMinAxis : {
          class: 'Vector2',
          description:"Return the name of the axis with the lowest value",
          params: [ 
          ],
          return : { 
            type: 'AxisNames2d',
            description : 'The name of the axis' 
          }
        }
      },
      export : {
        clone : {
          class: 'Vector2',
          description:"Return a new vector identical to this vector",
          params: [
          ],
          return : { 
            type: 'Vector2',
            description : 'The new vector' 
          }
        },
        toArray : {
          class: 'Vector2',
          description:"Exports the vector as an array with two values",
          params: [
          ],
          return : { 
            type: 'number[]',
            description : 'The vector exported as an array' 
          }
        },
        toString : {
          class: 'Vector2',
          description:"Return a string containing values of each axis (x = 1; y = 1)",
          params: [
          ],
          return : { 
            type: 'String',
            description : 'The vector exported as a string' 
          }
        }
      },
      check : {
        isOrigin : {
          class: 'Vector2',
          description:"Test if the vector is at origin. Return true if this vector is equal to (0,0) or false otherwise",
          params: [
          ],
          return : { 
            type: 'boolean',
            description : 'The result of the test' 
          }
        },
        isPositive : {
          class: 'Vector2',
          description:"return true if this vector is greater than or equal to (0,0) or false otherwise",
          params: [ 
          ],
          return : { 
            type: 'boolean',
            description : 'The result of the test' 
          }
        }
      },
      operations : {
        additions : {
          add : {
            class: 'Vector2',
            description:"Add a vector to this vector",
            params: [
              { name: 'v',
                type: 'Vector2',
                description : ''
              }  
            ],
            return : { 
              type: 'Vector2',
              description : 'The vector with its new values' 
            }
          },
          addScalar : {
            class: 'Vector2',
            description:"Add a scalar number to each component of this vector",
            params: [
              { name: 'scalar',
                type: 'number',
                description : ''
              } 
            ],
            return : { 
              type: 'Vector2',
              description : 'The vector with its new values' 
            }
          },
          addScaledVector : {
            class: 'Vector2',
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
              description : 'The vector with its new values' 
            }
          }
        },
        subtractions : {
          subtract : {
            class: 'Vector2',
            description:"Subtract a vector from this vector",
            params: [
              { name: 'v',
                type: 'vector2',
                description : ''
              }
            ],
            return : { 
              type: 'Vector2',
              description : 'The vector with its new values' 
            }
          },
          subtractScalar : {
            class: 'Vector2',
            description:"Subtract a scalar number from each component of this vector",
            params: [
              { name: 'scalar',
                type: 'number',
                description : ''
              }  
            ],
            return : { 
              type: 'Vector2',
              description : 'The vector with its new values' 
            }
          },
          subtractScaledVector : {
            class: 'Vector2',
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
              description : 'The vector with its new values' 
            }
          }
        },
        multiplications : {
          scale : {
            class: 'Vector2',
            description:"Scale a vector by the scalar number given as parameter",
            params: [
              { name: 'value',
                type: 'number',
                description : ''
              } 
            ],
            return : { 
              type: 'Vector2',
              description : 'The vector with its new values' 
            }
          },
          multiply : {
            class: 'Vector2',
            description:"Multiply a vector by this vector",
            params: [
              { name: 'v',
                type: 'Vector2',
                description : ''
              }
            ],
            return : { 
              type: 'Vector2',
              description : 'The vector with its new values' 
            }
          },
          multiplyScaledVector : {
            class: 'Vector2',
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
              description : 'The vector with its new values' 
            }
          }
        },
        divisions : {
          divide : {
            class: 'Vector2',
            description:"Divide a vector by this vector",
            params: [
              { name: 'v',
                type: 'Vector2',
                description : ''
              }
            ],
            return : { 
              type: 'Vector2',
              description : 'The vector with its new values' 
            }
          },
          divideScaledVector : {
            class: 'Vector2',
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
              description : 'The vector with its new values' 
            }
          },
          halve : {
            class: 'Vector2',
            description:"Divide this vector by 2",
            params: [
            ],
            return : { 
              type: 'Vector2',
              description : 'The vector with its new values' 
            }
          },
          normalize : {
            class: 'Vector2',
            description:"Reduce the vector to a unit vector of length 1",
            params: [
            ],
            return : { 
              type: 'Vector2',
              description : 'The vector with its new values' 
            }
          }
        },
      },
      utility : {        
        max : {
          class: 'Vector2',
          description:"Compare this vector to the vector given as parameter and set the highest value of each axis to this vector",
          params: [
            { name: 'v',
              type: 'Vector2',
              description : ''
            } 
          ],
          return : { 
            type: 'Vector2',
            description : 'The vector with its new values' 
          }
        },
        min : {
          class: 'Vector2',
          description:"Compare this vector to the vector given as parameter and set the lowest value of each axis to this vector",
          params: [
            { name: 'v',
              type: 'Vector2',
              description : ''
            }  
          ],
          return : { 
            type: 'Vector2',
            description : 'The vector with its new values' 
          }
        },
        maxScalar : {
          class: 'Vector2',
          description:"Compare each axis of this vector to the scalar given as parameter and apply the scalar if the value of the axis is lower",
          params: [
            { name: 'scalar',
              type: 'number',
              description : ''
            } 
          ],
          return : { 
            type: 'Vector2',
            description : 'The vector with its new values' 
          }
        },
        minScalar : {
          class: 'Vector2',
          description:"Compare each axis of this vector to the scalar given as parameter and apply the scalar if the value of the axis is higher",
          params: [
            { name: 'scalar',
              type: 'number',
              description : ''
            }
          ],
          return : { 
            type: 'Vector2',
            description : 'The vector with its new values' 
          }
        },
        absolute : {
          class: 'Vector2',
          description:"Set each axis of this vector to its absolute value",
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
            description : 'The vector with its new values' 
          }
        },
        opposite : {
          class: 'Vector2',
          description:"Set each axis of this vector to its opposite value",
          params: [
          ],
          return : { 
            type: 'Vector2',
            description : 'The vector with its new values' 
          }
        },
        clamp : {
          class: 'Vector2',
          description:"clamp each axis of this vector so it stays within the boundaries of the given rectangle",
          params: [
            { name: 'rectangle',
              type: 'Rectangle',
              description : ''
            } 
          ],
          return : { 
            type: 'Vector2',
            description : 'The vector with its new values' 
          }
        },
        lerp : {
          class: 'Vector2',
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
            description : 'The vector with its new values' 
          }
        },
        dotProduct : {
          class: 'Vector2',
          description:"Return the dot product between this vector and the vector given as parameter",
          params: [
            { name: 'v',
              type: 'Vector2',
              description : ''
            }  
          ],
          return : { 
            type: 'number',
            description : 'the dot product' 
          }
        },
        quadraticBezier : {
          class: 'Vector2',
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
            description : 'The vector with its new values' 
          }
        },
        cubicBezier : {
          class: 'Vector2',
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
            description : 'The vector with its new values' 
          }
        }
      }
    },
    vector3 : {
      setters : {
        set : {
          class: 'Vector3',
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
              description : 'The vector with its new values'
            } 
          ],
          return : { 
            type: 'Vector3',
            description : '' 
          }
        },
        copy : {
          class: 'Vector3',
          description:"Copy the values of the vector given as parameter",
          params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            }  
          ],
          return : { 
            type: 'Vector3',
            description : 'The vector with its new values' 
          }
        },
        setFromArray : {
          class: 'Vector3',
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
              description : 'The vector with its new values'
            }
          ],
          return : { 
            type: 'Vector3',
            description : '' 
          }
        },
        origin : {
          class: 'Vector3',
          description:"Set the x, y and z values of this vector to zero",
          params: [ 
          ],
          return : { 
            type: 'Vector3',
            description : 'The vector with its new values' 
          }
        }
      },
      getters : {
        getMagnitude : {
          class: 'Vector3',
          description:"Compute and return the magnitude of the vector",
          params: [
            { name: 'square',
              type: 'boolean',
              description : ''
            } 
          ],
          return : { 
            type: 'number',
            description : 'The magnitude of the vector or the squared magnitude depending on the given parameter' 
          }
        },
        getDistance : {
          class: 'Vector3',
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
            description : 'the distance between the vectors' 
          }
        }
      },
      export : {
        clone : {
          class: 'Vector3',
          description:"Return a new vector identical to this vector",
          params: [ 
          ],
          return : { 
            type: 'Vector3',
            description : 'The new vector' 
          }
        },
        toArray : {
          class: 'Vector3',
          description:"Exports the vector as an array with two values",
          params: [  
          ],
          return : { 
            type: 'number[]',
            description : 'The vector as an array' 
          }
        },
        toString : {
          class: 'Vector3',
          description:"Return a string containing values of each axis (x = 1; y = 1; z = 1)",
          params: [
          ],
          return : { 
            type: 'String',
            description : 'The vector as a string'
          }
        }
      },
      check : {
        isOrigin : {
          class: 'Vector3',
          description:"Return true if this vector is equal to (0,0,0) or false otherwise",
          params: [
          ],
          return : { 
            type: 'boolean',
            description : 'The result of the test' 
          }
        },
        isPositive : {
          class: 'Vector3',
          description:"Return true if this vector is greater than or equal to (0,0,0) or false otherwise",
          params: [
          ],
          return : { 
            type: 'boolean',
            description : 'The result of the test' 
          }
        }
      },
      operations : {
        additions : {
          add : {
            class: 'Vector3',
            description:"Add a vector to this vector",
            params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            }  
          ],
            return : { 
              type: 'Vector3',
              description : 'The vector with its new values' 
            }
          },
          addScalar : {
            class: 'Vector3',
            description:"Add a scalar number to each component of this vector",
            params: [
            { name: 'scalar',
              type: 'number',
              description : ''
            } 
          ],
            return : { 
              type: 'Vector3',
              description : 'The vector with its new values' 
            }
          },
          addScaledVector : {
            class: 'Vector3',
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
              description : 'The vector with its new values' 
            }
          }
        },
        subtractions : {
          subtract : {
            class: 'Vector3',
            description:"Subtract a vector from this vector",
            params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            }  
          ],
            return : { 
            type: 'Vector3',
            description : 'The vector with its new values' 
          }
          },
          subtractScalar : {
            class: 'Vector3',
            description:"Subtract a scalar number from each component of this vector",
            params: [
            { name: 'scalar',
              type: 'number',
              description : ''
            }  
          ],
            return : { 
              type: 'Vector3',
              description : 'The vector with its new values' 
            }
          },
          subtractScaledVector : {
            class: 'Vector3',
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
              description : 'The vector with its new values' 
            }
          }
        },
        multiplications : {
          scale : {
            class: 'Vector3',
            description:"",
            params: [
            { name: 'value',
              type: 'number',
              description : ''
            }  
          ],
            return : { 
              type: 'Vector3',
              description : 'The vector with its new values' 
            }
          },
          multiply : {
            class: 'Vector3',
            description:"Multiply a vector by this vector",
            params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            }  
          ],
            return : { 
              type: 'Vector3',
              description : 'The vector with its new values' 
            }
          },
          multiplyScaledVector : {
            class: 'Vector3',
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
              description : 'The vector with its new values' 
            }
          }
        },
        divisions : {
          divide : {
            class: 'Vector3',
            description:"Divide a vector by this vector",
            params: [
              { name: 'v',
                type: 'Vector3',
                description : ''
              }  
            ],
            return : { 
              type: 'Vector3',
              description : 'The vector with its new values' 
            }
          },
          divideScaledVector : {
            class: 'Vector3',
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
              description : 'The vector with its new values' 
            }
          },
          halve : {
            class: 'Vector3',
            description:"Divide this vector by 2",
            params: [ 
            ],
            return : { 
              type: 'Vector3',
              description : 'The vector with its new values' 
            }
          },
          normalize : {
            class: 'Vector3',
            description:"Reduce the vector to a unit vector of length 1",
            params: [ 
            ],
            return : { 
              type: 'Vector3',
              description : 'The vector with its new values' 
            }
          }
        },
      },
      utility : { 
        max : {
          class: 'Vector3',
          description:"Compare this vector to the vector given as parameter and set the highest value of each axis to this vector",
          params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            } 
          ],
          return : { 
            type: 'Vector3',
            description : 'The vector with its new values' 
          }
        },
        min : {
          class: 'Vector3',
          description:"Compare this vector to the vector given as parameter and set the lowest value of each axis to this vector",
          params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            }  
          ],
          return : { 
            type: 'Vector3',
            description : 'The vector with its new values' 
          }
        },
        maxScalar : {
          class: 'Vector3',
          description:"Compare each axis of this vector to the scalar given as parameter and apply the scalar if the value of the axis is lower",
          params: [
            { name: 'scalar',
              type: 'number',
              description : ''
            }  
          ],
          return : { 
            type: 'Vector3',
            description : 'The vector with its new values' 
          }
        },
        minScalar : {
          class: 'Vector3',
          description:"Compare each axis of this vector to the scalar given as parameter and apply the scalar if the value of the axis is higher",
          params: [
            { name: 'scalar',
              type: 'number',
              description : ''
            }  
          ],
          return : { 
            type: 'Vector3',
            description : 'The vector with its new values' 
          }
        },
        absolute : {
          class: 'Vector3',
          description:"Set each axis of this vector to its absolute value",
          params: [ 
          ],
          return : { 
            type: 'Vector3',
            description : 'The vector with its new values' 
          }
        },
        opposite : {
          class: 'Vector3',
          description:"Set each axis of this vector to its opposite value",
          params: [ 
          ],
          return : { 
            type: 'Vector3',
            description : 'The vector with its new values' 
          }
        },
        dotProduct : {
          class: 'Vector3',
          description:"Return the dot product of this vector",
          params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            }  
          ],
          return : { 
            type: 'number',
            description : 'The dot product' 
          }
        },
        cross : {
          class: 'Vector3',
          description:"Return the cross product of this vector and the vector given as parameter",
          params: [
            { name: 'v',
              type: 'Vector3',
              description : ''
            }  
          ],
          return : { 
            type: 'Vector3',
            description : 'The vector with its new values' 
          }
        }
      }
    }
  },
  trigonometry : {
    setters : {
      setSinePrecision : {
        class: 'Trigonometry',
        description:"Sets the precision of the sine computation by setting the number of decimals you need",
        params: [
          { name: 'value',
            type: 'integer',
            description : 'an integer between 0 and 8'
          } 
        ],
      return : { 
            type: 'integer',
            description : 'the new precision' 
          }
      },
      setCosinePrecision : {
        class: 'Trigonometry',
        description:"Sets the precision of the cosine computation by setting the number of decimals you need",
        params: [
          { name: 'value',
            type: 'integer',
            description : 'an integer between 0 and 8'
          }  
        ],
        return : { 
            type: 'number',
            description : 'the new precision' 
          }
      },
      setArctanPrecision : {
        class: 'Trigonometry',
        description:"Sets the precision of the arctan computation by setting the number of decimals you need",
        params: [
          { name: 'value',
            type: 'number',
            description : 'an integer between 0 and 8'
          }  
        ],
        return : { 
            type: 'number',
            description : 'the new precision' 
          }
      }
    },
    sine : {
      class: 'Trigonometry',
      description:"Find the sine of an angle",
      params: [
        { name: 'angle',
          type: 'number',
          description : ''
        } 
      ],
      return : { 
            type: 'number',
            description : 'the sine of the angle' 
          }
    },
    cosine : {
      class: 'Trigonometry',
      description:"Find the cosine of an angle",
      params: [
        { name: 'angle',
          type: 'number',
          description : ''
        }  
      ],
      return : { 
            type: 'number',
            description : 'the cosine of the angle' 
          }
    },
    arctan : {
      class: 'Trigonometry',
      description:"Estimate arctangent from an angle on 2 quadrants",
      params: [
        { name: 'angle',
          type: 'number',
          description : ''
        }  
      ],
      return : { 
            type: 'number',
            description : 'the arctan of the angle' 
          }
    },
    arctan2 : {
      class: 'Trigonometry',
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
        description : 'the arctan2 of the angle or false' 
      }
    },
    sineEquation : {
      class: 'Trigonometry',
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
        description : 'the result of the equation' 
      }
    },
    cosineEquation : {
      class: 'Trigonometry',
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
        description : 'the result of the equation' 
      }
    },
    arctanEquation : {
      class: 'Trigonometry',
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
        description : 'the result of the equation' 
      }
    },
    helpers : {
      degreeToRadian: {
        class: 'Trigonometry',
        description:"Converts degree in radian",
        params: [
          { name: 'degree',
            type: 'number',
            description : ''
          } 
        ],
        return : { 
          type: 'number',
          description : 'the radian' 
        }
      },
      radianToDegree: {
        class: 'Trigonometry',
        description:"Converts radian in degree",
        params: [
          { name: 'radian',
            type: 'number',
            description : ''
          } 
        ],
        return : { 
          type: 'number',
          description : 'the degree' 
        }
      },
      normalizeRadian: {
        class: 'Trigonometry',
        description:"Normalizes an angle in radians between -Pi an Pi",
        params: [
          { name: 'angle',
            type: 'number',
            description : ''
          }
        ],
        return : { 
          type: 'number',
          description : 'the radian' 
        }
      }
    }
  },
  matrices : {
    matrix3x3 : {
      copy : {
        class: 'Matrix3x3',
        description:"Copy the values of the matrix given as parameter to this matrix",
        params: [
          { name: 'matrix3x3',
            type: 'Matrix3x3',
            description : ''
          }  
        ],
        return : { 
          type: 'Matrix3x3',
          description : 'the Matrix3x3 with its new values' 
        }
      },
      toArray : {
        class: 'Matrix3x3',
        description:"Return this matrix as an array",
        params: [
        ],
        return : { 
          type: 'Float32Array',
          description : 'the Matrix3x3 as an array' 
        }
      },
      toString : {
        class: 'Matrix3x3',
        description:"Return a string describing the entire matrix",
        params: [
        ],
        return : { 
          type: 'String',
          description : 'the Matrix3x3 as a string' 
        }
      },
      identity : {
        class: 'Matrix3x3',
        description:"Set this matrix as an identity matrix",
        params: [
        ],
        return : { 
          type: 'Matrix3x3',
          description : 'the Matrix3x3 with its new values' 
        }
      },
      scale : {
        class: 'Matrix3x3',
        description:"Scale this matrix by the Vector2 given as parameter",
        params: [
          { name: 'vector2',
            type: 'Vector2',
            description : ''
          }  
        ],
        return : { 
          type: 'Matrix3x3',
          description : 'the Matrix3x3 with its new values' 
        }
      },
      rotate : {
        class: 'Matrix3x3',
        description:"Rotate this matrix on the X axis by the angle given as parameter",
        params: [
          { name: 'angle',
            type: 'number',
            description : ''
          }  
        ],
        return : { 
          type: 'Matrix3x3',
          description : 'the Matrix3x3 with its new values' 
        }
      },
      translate : {
        class: 'Matrix3x3',
        description:"Translate this matrix by the Vector2 given as parameter",
        params: [
          { name: 'vector2',
            type: 'Vector2',
            description : ''
          }  
        ],
        return : { 
          type: 'Matrix3x3',
          description : 'the Matrix3x3 with its new values' 
        }
      },
      multiply : {
        class: 'Matrix3x3',
        description:"Multiply this matrix by the matrix given as parameter",
        params: [
          { name: 'matrix3x3',
            type: 'Matrix3x3',
            description : ''
          }  
        ],
        return : { 
          type: 'Matrix3x3',
          description : 'the Matrix3x3 with its new values' 
        }
      }
    },
    matrix4x3 : {
      copy : {
        class: 'Matrix4x3',
        description:"Copy the values of the matrix given as parameter to this matrix",
        params: [
          { name: 'matrix4x3',
            type: 'Matrix4x3',
            description : ''
          }  
        ],
        return : { 
          type: 'Matrix4x3',
          description : 'the Matrix4x3 with its new values' 
        }
      },
      toArray : {
        class: 'Matrix4x3',
        description:"Return this matrix as an array",
        params: [
        ],
        return : { 
          type: 'Float32Array',
          description : 'the Matrix4x3 as an array' 
        }
      },
      toString : {
        class: 'Matrix4x3',
        description:"Return a string describing the entire matrix",
        params: [
        ],
        return : { 
          type: 'String',
          description : 'the Matrix4x3 as a string' 
        }
      },
      identity : {
        class: 'Matrix4x3',
        description:"Set this matrix as an identity matrix",
        params: [
        ],
        return : { 
          type: 'Matrix4x3',
          description : 'the Matrix4x3 with its new values' 
        }
      },
      scale : {
        class: 'Matrix4x3',
        description:"Scale this matrix by the Vector3 given as parameter",
        params: [
          { name: 'vector3',
            type: 'Vector3',
            description : ''
          }  
        ],
        return : { 
          type: 'Matrix4x3',
          description : 'the Matrix4x3 with its new values' 
        }
      },
      rotateX : {
        class: 'Matrix4x3',
        description:"Rotate this matrix on the X axis by the angle given as parameter",
        params: [
          { name: 'angle',
            type: 'number',
            description : ''
          }  
        ],
        return : { 
          type: 'Matrix4x3',
          description : 'the Matrix4x3 with its new values' 
        }
      },
      rotateY : {
        class: 'Matrix4x3',
        description:"Rotate this matrix on the Y axis by the angle given as parameter",
        params: [
          { name: 'angle',
            type: 'number',
            description : ''
          }  
        ],
        return : { 
          type: 'Matrix4x3',
          description : 'the Matrix4x3 with its new values' 
        }
      },
      rotateZ : {
        class: 'Matrix4x3',
        description:"Rotate this matrix on the Z axis by the angle given as parameter",
        params: [
          { name: 'angle',
            type: 'number',
            description : ''
          }  
        ],
        return : { 
          type: 'Matrix4x3',
          description : 'the Matrix4x3 with its new values' 
        }
      },
      translate : {
        class: 'Matrix4x3',
        description:"Translate this matrix by the Vector3 given as parameter",
        params: [
          { name: 'vector3',
            type: 'Vector3',
            description : ''
          }  
        ],
        return : { 
          type: 'Matrix4x3',
          description : 'the Matrix4x3 with its new values' 
        }
      },
      multiply : {
        class: 'Matrix4x3',
        description:"Multiply this matrix by the matrix given as parameter",
        params: [
          { name: 'matrix4x3',
            type: 'Matrix4x3',
            description : ''
          }  
        ],
        return : { 
          type: 'Matrix4x3',
          description : 'the Matrix4x3 with its new values' 
        }
      },
      lookAtRH : {
        class: 'Matrix4x3',
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
          description : 'the Matrix4x3 with its new values' 
        }
      }
    },
    matrix4x4 : {
      copy : {
        class: 'Matrix4x4',
        description:"Copy the values of the matrix given as parameter to this matrix",
        params: [
          { name: 'matrix4x4',
            type: 'Matrix4x4',
            description : ''
          }  
        ],
        return : { 
          type: 'Matrix4x4',
          description : 'the Matrix4x4 with its new values' 
        }
      },
      toArray : {
        class: 'Matrix4x4',
        description:"Return this matrix as an array",
        params: [  
        ],
        return : { 
          type: 'Float32Array',
          description : 'the Matrix4x4 as an array' 
        }
      },
      toString : {
        class: 'Matrix4x4',
        description:"Return a string describing the entire matrix",
        params: [  
        ],
        return : { 
          type: 'String',
          description : 'the Matrix4x4 as a string' 
        }
      },
      identity : {
        class: 'Matrix4x4',
        description:"Set this matrix as an identity matrix",
        params: [  
        ],
        return : { 
          type: 'Matrix4x4',
          description : 'the Matrix4x4 with its new values' 
        }
      },
      scale : {
        class: 'Matrix4x4',
        description:"Scale this matrix by the Vector3 given as parameter",
        params: [
          { name: 'vector3',
            type: 'Vector3',
            description : ''
          }  
        ],
        return : { 
          type: 'Matrix4x4',
          description : 'the Matrix4x4 with its new values' 
        }
      },
      rotateX : {
        class: 'Matrix4x4',
        description:"Rotate this matrix on the X axis by the angle given as parameter",
        params: [
          { name: 'angle',
            type: 'number',
            description : ''
          }  
      ],
        return : { 
          type: 'Matrix4x4',
          description : 'the Matrix4x4 with its new values' 
        }
      },
      rotateY : {
        class: 'Matrix4x4',
        description:"Rotate this matrix on the Y axis by the angle given as parameter",
        params: [
          { name: 'angle',
            type: 'number',
            description : ''
          }  
      ],
        return : { 
          type: 'Matrix4x4',
          description : 'the Matrix4x4 with its new values' 
        }
      },
      rotateZ : {
        class: 'Matrix4x4',
        description:"Rotate this matrix on the Z axis by the angle given as parameter",
        params: [
          { name: 'angle',
            type: 'number',
            description : 'the Matrix4x4 with its new values'
          }  
      ],
        return : { 
          type: 'Matrix4x4',
          description : '' 
        }
      },
      translate : {
        class: 'Matrix4x4',
        description:"Translate this matrix by the Vector3 given as parameter",
        params: [
          { name: 'vector3',
            type: 'Vector3',
            description : ''
          }  
      ],
        return : { 
          type: 'Matrix4x4',
          description : 'the Matrix4x4 with its new values' 
        }
      },
      multiply : {
        class: 'Matrix4x4',
        description:"Multiply this matrix by the matrix given as parameter",
        params: [
          { name: 'matrix4x4',
            type: 'Matrix4x4',
            description : ''
          }  
      ],
        return : { 
          type: 'Matrix4x4',
          description : 'the Matrix4x4 with its new values' 
        }
      },
      perspective : {
        class: 'Matrix4x4',
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
          description : 'the Matrix4x4 with its new values' 
        }
      },
      orthographic : {
        class: 'Matrix4x4',
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
          description : 'the Matrix4x4 with its new values' 
        }
      }
    }
  },
  geometry : {
    circle : {
      clone : {
        class: 'Circle',
        description:"Return a new circle with the same properties as this circle",
        params: [ 
        ],
        return : { 
          type: 'Circle',
          description : 'the new circle' 
        }
      },
      copy : {
        class: 'Circle',
        description:"Copy the values of the circle given as parameter into this circle",
        params: [
          { name: 'cirle',
            type: 'Circle',
            description : ''
          }  
        ],
        return : { 
          type: 'Circle',
          description : 'the Circle with its new values' 
        }
      },
      set : {
        class: 'Circle',
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
          type: 'Circle',
          description : 'the Circle with its new values' 
        }
      },
      setPositionXY : {
        class: 'Circle',
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
          type: 'Circle',
          description : 'the Circle with its new values' 
        }
      },
      setPositionFromVector : {
        class: 'Circle',
        description:"Set the position of the circle using a vector2",
        params: [
          { name: 'position',
            type: 'Vector2',
            description : ''
          } 
        ],
        return : { 
          type: 'Circle',
          description : 'the Circle with its new values' 
        }
      },
      scale : {
        class: 'Circle',
        description:"Scale the radius of the circle by the number given as parameter",
        params: [
          { name: 'scalar',
            type: 'number',
            description : ''
          }  
        ],
        return : { 
          type: 'Circle',
          description : 'the Circle with its new values' 
        }
      },
      isIn : {
        class: 'Circle',
        description:"Check if the vector given as parameter is in this circle",
        params: [
          { name: 'v',
            type: 'Vector2',
            description : ''
          }  
        ],
        return : { 
          type: 'Boolean',
          description : 'The result of the test' 
        }
      },
      draw : {
        class: 'Circle',
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
        class: 'Rectangle',
        description:"Return a new rectangle with the same properties as this rectangle",
        params: [ 
        ],
        return : { 
          type: 'Rectangle',
          description : 'the new rectangle' 
        }
      },
      copy : {
        class: 'Rectangle',
        description:"Copy the values of the rectangle given as parameter into this rectangle",
        params: [
          { name: 'rectangle',
            type: 'Rectangle',
            description : ''
          } 
        ],
        return : { 
          type: 'void',
          description : 'the rectangle with its new values' 
        }
      },
      set : {
        class: 'Rectangle',
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
          type: 'Rectangle',
          description : 'the rectangle with its new values' 
        }
      },
      setPositionX : {
        class: 'Rectangle',
        description:"Set the position of the rectangle on the X axis",
        params: [
          { name: 'x',
            type: 'number',
            description : ''
          } 
        ],
        return : { 
          type: 'Rectangle',
          description : 'the rectangle with its new position' 
        }
      },
      setPositionY : {
        class: 'Rectangle',
        description:"Set the position of the rectangle on the Y axis",
        params: [
          { name: 'y',
            type: 'number',
            description : ''
          }  
        ],
        return : { 
          type: 'Rectangle',
          description : 'the rectangle with its new position' 
        }
      },
      setPositionXY : {
        class: 'Rectangle',
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
          type: 'Rectangle',
          description : 'the rectangle with its new position' 
        }
      },
      setPositionFromVector : {
        class: 'Rectangle',
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
          type: 'Rectangle',
          description : 'the rectangle with its new position' 
        }
      },
      setSizeX : {
        class: 'Rectangle',
        description:"Set the width of this rectangle",
        params: [
          { name: 'width',
            type: 'number',
            description : ''
          }  
        ],
        return : { 
          type: 'Rectangle',
          description : 'the rectangle with its new size' 
        }
      },
      setSizeY : {
        class: 'Rectangle',
        description:"Set the height of this rectangle",
        params: [
          { name: 'height',
            type: 'number',
            description : ''
          }  
        ],
        return : { 
          type: 'Rectangle',
          description : 'the rectangle with its new size' 
        }
      },
      setSizeXY : {
        class: 'Rectangle',
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
          type: 'Rectangle',
          description : 'the rectangle with its new size' 
        }
      },
      setSizeFromVector : {
        class: 'Rectangle',
        description:"Set the size of the rectangle with the Vector2 given as parameter",
        params: [
          { name: 'size',
            type: 'Vector2',
            description : ''
          }  
        ],
        return : { 
          type: 'Rectangle',
          description : 'the rectangle with its new size' 
        }
      },
      isIn : {
        class: 'Rectangle',
        description:"Check if the vector given as parameter is in this rectangle",
        params: [
          { name: 'vector',
            type: 'Vector2',
            description : ''
          } 
        ],
        return : { 
            type: 'boolean',
            description : 'The result of the test' 
          }
      },
      draw : {
        class: 'Rectangle',
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
      class: 'Time',
      description:"Convert milliseconds to seconds",
      params: [
        { name: 'millisecond',
          type: 'number',
          description : ''
        }  
      ],
      return : { 
            type: 'number',
            description : 'the time in second' 
          }
    },
    secToMillisec : {
      class: 'Time',
      description:"Convert seconds to milliseconds",
      params: [
        { name: 'second',
          type: 'number',
          description : ''
        }  
      ],
      return : { 
            type: 'number',
            description : 'the time in milliseconds' 
          }
    },
    millisecToFps : {
      class: 'Time',
      description:"Convert milliseconds to frames per second",
      params: [
        { name: 'millisecond',
          type: 'number',
          description : 'the time in frame to second'
        }  
      ],
      return : { 
            type: 'number',
            description : '' 
          }
    },
    fpsToMillisec : {
      class: 'Time',
      description:"Convert frame per second to millisecond",
      params: [
        { name: 'refreshRate',
          type: 'number',
          description : ''
        }  
      ],
      return : { 
            type: 'number',
            description : 'the time in millisecond' 
          }
    }
  },
  bezier : {
    quadratic : {
      class: 'Bezier',
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
            description : 'the result' 
          }
    },
    cubic : {
      class: 'Bezier',
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
            description : 'the result' 
          }
    }
  },
  random : {
    float : {
      class: 'Random',
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
            description : 'the result' 
          }
    },
    integer : {
      class: 'Random',
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
            description : 'the result' 
          }
    },
    distribution : {
      class: 'Random',
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
            description : 'the result' 
          }
    },
    pick : {
      class: 'Random',
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
            description : 'the result' 
          }
    }
  },
  array : {
    min : {
      class: 'Array',
      description:"Return the lowest number of the array",
      params: [
        { name: 'array',
          type: 'number[]',
          description : ''
        }
      ],
      return : { 
            type: 'number',
            description : 'the result' 
          }
    },
    max : {
      class: 'Array',
      description:"Return the highest number of the array",
      params: [
        { name: 'array',
          type: 'number[]',
          description : ''
        }
      ],
      return : { 
            type: 'number',
            description : 'the result' 
          }
    },
    sum : {
      class: 'Array',
      description:"Return the sum of all numbers of the array",
      params: [
        { name: 'array',
          type: 'number[]',
          description : ''
        } 
      ],
      return : { 
            type: 'number',
            description : 'the result' 
          }
    },
    multiply : {
      class: 'Array',
      description:"Return the product of all numbers of the array",
      params: [
        { name: 'array',
          type: 'number[]',
          description : ''
        }
      ],
      return : { 
            type: 'number',
            description : 'the result' 
          }
    },
    average : {
      class: 'Array',
      description:"Return the average of all numbers of the array",
      params: [
        { name: 'array',
          type: 'number[]',
          description : ''
        }
      ],
      return : { 
            type: 'number',
            description : 'the result' 
          }
    }
  },
  utils : {
    round : {
      class: 'Utils',
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
            description : 'the result' 
          }
    },
    floor : {
      class: 'Utils',
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
            description : 'the result' 
          }
    },
    ceil : {
      class: 'Utils',
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
            description : 'the result' 
          }
    },
    trunc : {
      class: 'Utils',
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
            description : 'the result' 
          }
    },
    roundToNearest : {
      class: 'Utils',
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
            description : 'the result' 
          }
    },
    mix : {
      class: 'Utils',
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
            description : 'the result' 
          }
    },
    getSign : {
      class: 'Utils',
      description:"Return the sign (-1, 1 or 0) of the number given as parameter",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        }
      ],
      return : { 
            type: 'number',
            description : 'the sign' 
          }
    },
    opposite : {
      class: 'Utils',
      description:"Return the opposite of the number given as parameter",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        }
      ],
      return : { 
            type: 'number',
            description : 'the result' 
          }
    },
    clamp : {
      class: 'Utils',
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
            description : 'the result' 
          }
    },
    normalize : {
      class: 'Utils',
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
            description : 'the result' 
          }
    },
    lerp : {
      class: 'Utils',
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
            description : 'the result' 
          }
    },
    map : {
      class: 'Utils',
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
            description : 'the result' 
          }
    },
    isEven : {
      class: 'Utils',
      description:"Check if the number given a parameter is even",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        }
      ],
      return : { 
            type: 'boolean',
            description : 'the result of the test' 
          }
    },
    isOdd : {
      class: 'Utils',
      description:"Check if the number given a parameter is even",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        } 
      ],
      return : { 
            type: 'boolean',
            description : 'the result of the test' 
          }
    },
    isOrigin : {
      class: 'Utils',
      description:"Check if the number given as parameter is equal to zero",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        }
      ],
      return : { 
            type: 'boolean',
            description : 'the result of the test' 
          }
    },
    isPositive : {
      class: 'Utils',
      description:"Check if the number given as parameter is positive",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        }
      ],
      return : { 
            type: 'boolean',
            description : 'the result of the test' 
          }
    },
    isNegative : {
      class: 'Utils',
      description:"Check if the number given as parameter is negative",
      params: [
        { name: 'x',
          type: 'number',
          description : ''
        }
      ],
      return : { 
            type: 'boolean',
            description : 'the result of the test' 
          }
    },
    isIn : {
      class: 'Utils',
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
            description : 'the result of the test' 
          }
    },
    isOut : {
      class: 'Utils',
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
            description : 'the result of the test' 
          }
    }
  }
}