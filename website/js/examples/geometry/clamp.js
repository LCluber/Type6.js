window.onload = function() {
  var canvas  = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width   = canvas.width  = window.innerWidth;
  var height  = canvas.height = window.innerHeight;
  var hWidth  = width  * 0.5;
  var hHeight = height * 0.5;

  var circle    = TYPE6.Geometry.Circle.create( 0, 0, 40 );
  var rect      = TYPE6.Geometry.Rectangle.create( hWidth, hHeight, hWidth, hHeight );
  var innerRect = TYPE6.Geometry.Rectangle.create( hWidth, hHeight, hWidth - circle.getDiameter(), hHeight - circle.getDiameter());

  //initial rendering
  drawRectangles();

  document.body.addEventListener("mousemove", function(event) {
    circle.setPositionXY(event.clientX, event.clientY);
    circle.clampTo(innerRect);

    context.clearRect(0, 0, width, height);

    drawRectangles();
    drawCircle(circle, "#CC0000");

    context.fill();
  });

  function drawRectangles(){
    drawRectangle(rect, "#cccccc");
    drawRectangle(innerRect, "#999999");
  }

  function drawRectangle(rectangle, color){
    context.fillStyle = color;
    context.fillRect(rectangle.getTopLeftCornerX(), rectangle.getTopLeftCornerY(), rectangle.getSizeX(), rectangle.getSizeY());
  }

  function drawCircle(circle, color){
    context.fillStyle = color;
    context.beginPath();
    context.arc(circle.getPositionX(), circle.getPositionY(), circle.getRadius(), 0, TYPE6.Trigonometry.TWOPI, false);
  }

};
