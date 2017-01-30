window.onload = function() {
  var canvas    = document.getElementById("canvas");
  var context   = canvas.getContext("2d");
  var width     = canvas.width = window.innerWidth;
  var height    = canvas.height = window.innerHeight;
  var gridSize  = 40;
  var circle    = TYPE6.Geometry.Circle.create( 0, 0, 20 );
	drawGrid();

  document.body.addEventListener("mousemove", function(event) {
    context.clearRect(0, 0, width, height);
    drawGrid();

    circle.setPositionXY(
      TYPE6.MathUtils.roundToNearest(event.clientX, gridSize),
      TYPE6.MathUtils.roundToNearest(event.clientY, gridSize)
    );

    circle.draw( context, 'rgba(0,0,0,1)' );
    context.fill();
  });

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
