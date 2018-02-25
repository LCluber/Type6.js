window.onload = function() {
  var canvas  = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width   = canvas.width = window.innerWidth;
  var height  = canvas.height = window.innerHeight;

  var x      = new TYPE6.Vector2(50, width - 100);
  var y      = new TYPE6.Vector2(50, height - 100);
  var radius = new TYPE6.Vector2(10, 300);
  var alpha  = new TYPE6.Vector2(0, 1);
  var time   = 0;

  render();

  function render() {
    context.clearRect(0, 0, width, height);

    context.globalAlpha = TYPE6.Utils.lerp(time, alpha.x, alpha.y);
    context.beginPath();
    context.arc(
      TYPE6.Utils.lerp(time, x.x, x.y ),
      TYPE6.Utils.lerp(time, y.x, y.y ),
      TYPE6.Utils.lerp(time, radius.x, radius.y),
      0,
      TYPE6.Trigonometry.twopi,
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
