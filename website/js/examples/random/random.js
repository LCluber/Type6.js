window.onload = function() {
  var canvas        = document.getElementById("canvas");
  var context       = canvas.getContext("2d");
  var width         = canvas.width = window.innerWidth;
  var height        = canvas.height = window.innerHeight;
  var colors        = ['green','red','blue'];

  for (var i = 0 ; i < 300 ; i += 1){
    var iMod3 = i%3;
    var circle = TYPE6JS.Geometry.Circle.create(
                  TYPE6JS.Random.float( width * iMod3/3, width * (iMod3+1)/3 ),
                  TYPE6JS.Random.float( 0, height ),
                  TYPE6JS.Random.float( 10, 40 )
                );

    drawCircle(circle, colors[ iMod3 ]);

  }

  function drawCircle(circle, color){
    context.beginPath();
    context.fillStyle = color;
    context.arc(
      circle.getPositionX(),
      circle.getPositionY(),
      circle.getRadius(),
      0, TYPE6JS.Trigonometry.TWOPI, false
    );
    context.fill();
  }

};
