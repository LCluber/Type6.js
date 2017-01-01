window.onload = function() {
  var canvas  = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width   = canvas.width = window.innerWidth;
  var height  = canvas.height = window.innerHeight;

  var bees    = [];
  var numBees = 30;
  var center  = TYPE6.Vector2D.create(width, height).scale(0.5);

  var bee = {
    create: function() {
      var obj = Object.create(this);
      obj.init();
      return obj;
    },

    init: function() {
      this.angle = TYPE6.Vector2D.create(
        TYPE6.Random.float(0, TYPE6.Trigonometry.TWOPI),
        TYPE6.Random.float(0, TYPE6.Trigonometry.TWOPI)
      );
      this.speed = TYPE6.Vector2D.create(
        this.randomSpeedGenerator(),
        this.randomSpeedGenerator()
      );
      this.circle = TYPE6.Geometry.Circle.create( 0, 0, TYPE6.Random.integer(100,200) );

    },

    update: function() {
      this.circle.setPositionXY(
        TYPE6.Trigonometry.cosineEquation( this.circle.getRadius(), this.angle.getX(), 0, 0 ),
        TYPE6.Trigonometry.sineEquation( this.circle.getRadius(), this.angle.getY(), 0, 0 )
      );

      this.circle.position.addTo(center);
      this.angle.addTo( this.speed );
      this.draw();
    },

    draw: function(){
      context.beginPath();
      context.arc( this.circle.getPositionX(), this.circle.getPositionY(), 2, 0, TYPE6.Trigonometry.TWOPI, false );
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
