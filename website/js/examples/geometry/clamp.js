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
    circle.draw( context, "#CC0000", null, null );

    //context.fill();
  });

  function drawRectangles(){
    rect.draw( context, "#cccccc", null, null );
    innerRect.draw( context, "#999999", "#000000", 1 );
  }

};
