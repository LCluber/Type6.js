
module.exports = {
  vectors : {
    vector2 : {
      setters : {
        set : {
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
        copy : {
          params: [
            { name: 'v',
              type: 'Vector2',
              description : ''
            }
          ],
          return : 'Vector2'
        },
        setFromArray : {
          params: [
            { name: 'array',
              type: 'number[]',
              description : ''
            },
            { name: 'offset',
              type: '?number',
              description : ''
            }  
          ],
          return : 'Vector2'
        },
        setFromAngle : {
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
        origin : {
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
        setOppositeAxis : {
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
        }
      },
      getters : {
        getAngle : {
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
        getMagnitude : {
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
        getDistance : {
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
        getMaxAxis : {
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
        getMinAxis : {
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
        }
      },
      export : {
        clone : {
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
        toArray : {
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
        toString : {
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
        }
      },
      check : {
        isOrigin : {
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
        isNotOrigin : {
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
        isPositive : {
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
        isNegative : {
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
        }
      },
      operations : {
        additions : {
          add : {
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
          addScalar : {
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
          addScaledVector : {
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
          }
        },
        subtractions : {
          subtract : {
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
          subtractScalar : {
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
          subtractScaledVector : {
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
          }
        },
        multiplications : {
          scale : {
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
          multiply : {
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
          multiplyScaledVector : {
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
          }
        },
        divisions : {
          divide : {
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
          divideScaledVector : {
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
          halve : {
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
          normalize : {
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
          }
        },
        max : {
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
        min : {
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
        maxScalar : {
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
        minScalar : {
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
        absolute : {
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
        clamp : {
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
        lerp : {
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
        dotProduct : {
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
        quadraticBezier : {
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
        cubicBezier : {
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
        }
      }
    },
    vector3 : {
      setters : {
        set : {
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
        copy : {
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
        setFromArray : {
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
        setFromAngle : {
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
        origin : {
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
        setOppositeAxis : {
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
        }
      },
      getters : {
        getAngle : {
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
        getMagnitude : {
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
        getDistance : {
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
        getMaxAxis : {
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
        getMinAxis : {
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
        }
      },
      export : {
        clone : {
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
        toArray : {
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
        toString : {
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
        }
      },
      check : {
        isOrigin : {
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
        isNotOrigin : {
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
        isPositive : {
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
        isNegative : {
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
        }
      },
      operations : {
        additions : {
          add : {
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
          addScalar : {
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
          addScaledVector : {
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
          }
        },
        subtractions : {
          subtract : {
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
          subtractScalar : {
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
          subtractScaledVector : {
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
          }
        },
        multiplications : {
          scale : {
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
          multiply : {
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
          multiplyScaledVector : {
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
          }
        },
        divisions : {
          divide : {
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
          divideScaledVector : {
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
          halve : {
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
          normalize : {
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
          }
        },
        max : {
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
        min : {
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
        maxScalar : {
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
        minScalar : {
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
        absolute : {
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
        clamp : {
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
        lerp : {
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
        dotProduct : {
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
        cross : {
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
        quadraticBezier : {
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
        cubicBezier : {
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
        }
      }
    }
  },
  trigonometry : {
    sine : {
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
    cosine : {
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
    arctan : {
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
    arctan2 : {
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
    sineEquation : {
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
    cosineEquation : {
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
    arctanEquation : {
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
    helpers : {
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
    }
  },
  matrices : {
    matrix4x3 : {
      copy : {
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
      toArray : {
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
      toString : {
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
      identity : {
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
      scale : {
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
      rotateX : {
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
      rotateY : {
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
      rotateZ : {
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
      translate : {
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
      multiply : {
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
      lookAtRH : {
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
      }
    },
    matrix4x4 : {
      copy : {
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
      toArray : {
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
      toString : {
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
      identity : {
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
      scale : {
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
      rotateX : {
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
      rotateY : {
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
      rotateZ : {
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
      translate : {
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
      multiply : {
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
      perspective : {
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
      orthographic : {
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
      }
    }
  },
  geometry : {
    circle : {
      clone : {
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
      copy : {
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
      set : {
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
      setPositionXY : {
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
      setPositionFromVector : {
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
      scale : {
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
      isIn : {
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
      isOut : {
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
      draw : {
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
      }
    },
    rectangle : {
      clone : {
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
      copy : {
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
      set : {
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
      setPositionX : {
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
      setPositionY : {
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
      setPosition : {
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
      setPositionXY : {
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
      setPositionFromVector : {
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
      setSizeX : {
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
      setSizeY : {
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
      setSize : {
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
      setSizeXY : {
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
      setSizeFromVector : {
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
      setCorners : {
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
      setHalfSize : {
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
      isIn : {
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
      draw : {
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
      }
    }
  },
  time : {
    millisecondToSecond : {
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
    secondToMilliecond : {
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
    millisecondToFramePerSecond : {
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
    framePerSecondToMillisecond : {
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
    }
  },
  bezier : {
    quadratic : {
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
    cubic : {
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
    }
  },
  random : {
    float : {
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
    integer : {
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
    distribution : {
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
    pick : {
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
    }
  },
  array : {
    min : {
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
    max : {
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
    sum : {
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
    multiply : {
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
    average : {
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
    }
  },
  utils : {
    round : {
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
    floor : {
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
    ceil : {
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
    trunc : {
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
    roundToNearest : {
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
    mix : {
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
    getSign : {
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
    clamp : {
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
    normalize : {
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
    lerp : {
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
    map : {
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
    isEven : {
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
    isOdd : {
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
    isOrigin : {
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
    isPositive : {
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
    isNegative : {
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
    isIn : {
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
    isOut : {
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
    }
  }
}