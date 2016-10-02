window.onload = function() {
  var canvas  = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width   = canvas.width = window.innerWidth;
  var height  = canvas.height = window.innerHeight;

  var x      = TYPE6JS.Vector2D.create(50, width - 100);
  var y      = TYPE6JS.Vector2D.create(50, height - 100);
  var radius = TYPE6JS.Vector2D.create(10, 300);
  var alpha  = TYPE6JS.Vector2D.create(0, 1);
  var time   = 0;

  render();

  function render() {
    context.clearRect(0, 0, width, height);

    context.globalAlpha = TYPE6JS.MathUtils.lerp(time, alpha.getX(), alpha.getY());
    context.beginPath();
    context.arc(
      TYPE6JS.MathUtils.lerp(time, x.getX(), x.getY() ),
      TYPE6JS.MathUtils.lerp(time, y.getX(), y.getY() ),
      TYPE6JS.MathUtils.lerp(time, radius.getX(), radius.getY()),
      0,
      TYPE6JS.Trigonometry.TWOPI,
      false
    );
    context.fill();

    time += 0.005;
    if(time > 1) {
      time = 0;
    }

    requestAnimationFrame(render);
  }

};
