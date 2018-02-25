window.onload = function() {
  var canvas  = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width   = canvas.width = window.innerWidth;
  var height  = canvas.height = window.innerHeight;

  var bees    = [];
  var numBees = 30;
  var center  = new TYPE6.Vector2(width, height).halve();

  var bee = {
    create: function() {
      var obj = Object.create(this);
      obj.init();
      return obj;
    },

    init: function() {
      this.angle = new TYPE6.Vector2(
        TYPE6.Random.float(0, TYPE6.Trigonometry.twopi),
        TYPE6.Random.float(0, TYPE6.Trigonometry.twopi)
      );
      this.speed = new TYPE6.Vector2(
        this.randomSpeedGenerator(),
        this.randomSpeedGenerator()
      );
      this.circle = new TYPE6.Circle( 0, 0, TYPE6.Random.integer(100,200) );

    },

    update: function() {
      this.circle.position.set(
        TYPE6.Trigonometry.cosineEquation( this.circle.radius, this.angle.x, 0, 0 ),
        TYPE6.Trigonometry.sineEquation( this.circle.radius, this.angle.y, 0, 0 )
      ).add(center);

      this.angle.add( this.speed );
      this.draw();
    },

    draw: function(){
      context.beginPath();
      context.arc( this.circle.position.x, this.circle.position.y, 2, 0, TYPE6.Trigonometry.twopi, false );
      context.fill();
    },

    randomSpeedGenerator: function(){
      var sign = TYPE6.Random.pick(-1,1);
      var randNumber = TYPE6.Random.float(0.0125, 0.05, 4);
      return randNumber * sign;
    }

  };

  for(var i = 0; i < numBees; i += 1) {
    bees.push(bee.create());
  }

  draw();

  function draw() {
    context.clearRect(0, 0, width, height);

    for( var i = 0; i < numBees; i++ ) {
      bees[i].update();
    }

    requestAnimationFrame(draw);
  }

};
