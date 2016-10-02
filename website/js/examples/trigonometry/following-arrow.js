window.onload = function() {
  var canvas  = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width   = canvas.width = window.innerWidth;
  var height  = canvas.height = window.innerHeight;

  var arrowPosition = TYPE6JS.Vector2D.create(width, height).scale(0.5);
  var mousePosition = TYPE6JS.Vector2D.create();
  var angle = 0.0;
  var a = 0.0;

  render();

  function render() {

    context.clearRect(0, 0, width, height);

    context.save();
    context.translate(arrowPosition.getX(), arrowPosition.getY());
    context.rotate(angle);

    context.beginPath();
    context.moveTo(40, 0);
    context.lineTo(-40, 0);
    context.moveTo(40, 0);
    context.lineTo(20, -20);
    context.moveTo(40, 0);
    context.lineTo(20, 20);
    context.stroke();

    context.restore();

    requestAnimationFrame(render);
  }

  document.body.addEventListener("mousemove", function(event) {
    mousePosition.setXY(
      event.clientX,
      event.clientY
    );
    mousePosition.subtractFrom(arrowPosition);
    angle = TYPE6JS.Trigonometry.arctan2fromVector2D(mousePosition);
  });


};
