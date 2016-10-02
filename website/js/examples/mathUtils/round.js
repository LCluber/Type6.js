window.onload = function() {
  var canvas    = document.getElementById("canvas");
  var context   = canvas.getContext("2d");
  var width     = canvas.width = window.innerWidth;
  var height    = canvas.height = window.innerHeight;
  var gridSize  = 40;
  var circle    = TYPE6JS.Geometry.Circle.create( 0, 0, 20 );
	drawGrid();

  document.body.addEventListener("mousemove", function(event) {
    context.clearRect(0, 0, width, height);
    drawGrid();

    circle.setPositionXY(
      TYPE6JS.MathUtils.roundToNearest(event.clientX, gridSize),
      TYPE6JS.MathUtils.roundToNearest(event.clientY, gridSize)
    );

    drawCircle();
    context.fill();
  });

  function drawCircle(){
    context.beginPath();
    context.arc(circle.getPositionX(), circle.getPositionY(), circle.getRadius(), 0, TYPE6JS.Trigonometry.TWOPI, false);
  }

  function drawGrid() {
    context.beginPath();
    context.strokeStyle = "#ccc";
    for(var x = 0; x <= width; x += gridSize) {
      context.moveTo(x, 0);
      context.lineTo(x, height);
    }
    for(var y = 0; y <= height; y += gridSize) {
      context.moveTo(0, y);
      context.lineTo(width, y);
    }
    context.stroke();
  }

};
