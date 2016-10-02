window.onload = function() {
  var canvas  = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width   = canvas.width = window.innerWidth;
  var height  = canvas.height = window.innerHeight;
  var circle  = TYPE6JS.Geometry.Circle.create( width * 0.5, height * 0.5, 20 );

  drawCircle();
  context.fill();

  document.body.addEventListener("mousemove", function(event) {
    circle.setRadius(TYPE6JS.MathUtils.map(
                      event.clientY,
                      0, height,
                      20, 340
                    ));

    context.clearRect(0, 0, width, height);
    drawCircle();
    context.fill();
  });

  function drawCircle(){
    context.beginPath();
    context.arc(circle.getPositionX(), circle.getPositionY(), circle.getRadius(), 0, TYPE6JS.Trigonometry.TWOPI, false);
  }

};
