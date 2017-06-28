window.onload = function() {
  var canvas        = document.getElementById("canvas");
  var context       = canvas.getContext("2d");
  var width         = canvas.width = window.innerWidth;
  var height        = canvas.height = window.innerHeight;

  var circle = TYPE6.Geometry.Circle.create( width*0.5, height*0.5, 40 );
  var circle2 = TYPE6.Geometry.Circle.create( width*0.5, height*0.5, 20 );

  var position = TYPE6.Matrix3.create(1.0, x2, x3, y1, 1.0, y3, circle.getPositionX(), circle.getPositionY(), 1.0);

  update();

  function update() {
    move();
    draw();
    requestAnimationFrame(update);
  }
  
  function move() {
    var p = TYPE6.Vector2D.create(0.1,0.1);
  }
  
  function draw() {
    circle.draw( context, "#CC0000", "#000000", 1 );
    circle2.draw( context, "#CC0000", "#000000", 1 );
  }

};
