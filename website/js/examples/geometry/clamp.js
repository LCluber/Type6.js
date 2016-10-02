window.onload = function() {
  var canvas  = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width   = canvas.width = window.innerWidth;
  var height  = canvas.height = window.innerHeight;

  var rect = TYPE6JS.Geometry.Rectangle.create(
              (width - 400) * 0.5, (height - 300) * 0.5,
              400, 300
            );

  var circle = TYPE6JS.Geometry.Circle.create( 0, 0, 40 );

  var innerRect = TYPE6JS.Geometry.Rectangle.create(
                    (width - 400) * 0.5 + circle.getRadius(), (height - 300) * 0.5 + circle.getRadius(),
                    400 - circle.getDiameter(), 300 - circle.getDiameter()
                  );

  //initial rendering
  drawRectangle(rect, "#cccccc");
  drawRectangle(innerRect, "#999999");

  document.body.addEventListener("mousemove", function(event) {
    circle.setPositionXY(event.clientX, event.clientY);
    circle.clampTo(innerRect);

    context.clearRect(0, 0, width, height);

    drawRectangle(rect, "#cccccc");
    drawRectangle(innerRect, "#999999");
    drawCircle(circle, "#CC0000");

    context.fill();
  });

  function drawRectangle(rectangle, color){
    context.fillStyle = color;
    context.fillRect(rectangle.topLeftCorner.getX(), rectangle.topLeftCorner.getY(), rectangle.size.getX(), rectangle.size.getY());
  }

  function drawCircle(circle, color){
    context.fillStyle = color;
    context.beginPath();
    context.arc(circle.getPositionX(), circle.getPositionY(), circle.getRadius(), 0, TYPE6JS.Trigonometry.TWOPI, false);
  }

};
