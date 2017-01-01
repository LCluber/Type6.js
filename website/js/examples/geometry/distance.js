window.onload = function() {
  var canvas        = document.getElementById("canvas");
  var context       = canvas.getContext("2d");
  var width         = canvas.width = window.innerWidth;
  var height        = canvas.height = window.innerHeight;
  var circle        = TYPE6.Geometry.Circle.create( width * 0.5, height * 0.5, 100 );
  var mousePosition = TYPE6.Vector2D.create();

  context.fillStyle = "#66FF66";
  drawCircle();
  context.fill();

  document.body.addEventListener("mousemove", function(event) {
    context.clearRect(0, 0, width, height);
    mousePosition.setXY(event.clientX, event.clientY);
    context.fillStyle = "#66FF66";
    var distance = circle.getDistance(mousePosition);
    if( distance <= circle.getRadius() ){
      context.fillStyle = "#FF6666";
    }

    context.fill();

  });

  function drawCircle(){
    context.beginPath();
    context.arc(circle.getPositionX(), circle.getPositionY(), circle.getRadius(), 0, TYPE6.Trigonometry.TWOPI, false);
  }

};
