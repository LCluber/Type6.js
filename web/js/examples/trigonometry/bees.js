window.onload = function() {
  var canvas  = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width   = canvas.width = window.innerWidth;
  var height  = canvas.height = window.innerHeight;

  var bees    = [];
  var numBees = 30;
  var center  = new Type6.Vector2(width, height).halve();

  var bee = {
    create: function() {
      var obj = Object.create(this);
      obj.init();
      return obj;
    },

    init: function() {
      this.angle = new Type6.Vector2(
        Type6.Random.float(0, Type6.Trigonometry.twopi),
        Type6.Random.float(0, Type6.Trigonometry.twopi)
      );
      this.speed = new Type6.Vector2(
        this.randomSpeedGenerator(),
        this.randomSpeedGenerator()
      );
      this.circle = new Type6.Circle( 0, 0, Type6.Random.integer(100,200) );

    },

    update: function() {
      this.circle.position.set(
        Type6.Trigonometry.cosineEquation( this.circle.radius, this.angle.x, 0, 0 ),
        Type6.Trigonometry.sineEquation( this.circle.radius, this.angle.y, 0, 0 )
      ).add(center);

      this.angle.add( this.speed );
      this.draw();
    },

    draw: function(){
      context.beginPath();
      context.arc( this.circle.position.x, this.circle.position.y, 2, 0, Type6.Trigonometry.twopi, false );
      context.fill();
    },

    randomSpeedGenerator: function(){
      var sign = Type6.Random.pick(-1,1);
      var randNumber = Type6.Random.float(0.0125, 0.05, 4);
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
