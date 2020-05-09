window.onload = function() {
  var canvas  = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width   = canvas.width = window.innerWidth;
  var height  = canvas.height = window.innerHeight;

  var x      = new Type6.Vector2(50, width - 100);
  var y      = new Type6.Vector2(50, height - 100);
  var radius = new Type6.Vector2(10, 300);
  var alpha  = new Type6.Vector2(0, 1);
  var time   = 0;

  render();

  function render() {
    context.clearRect(0, 0, width, height);

    context.globalAlpha = Type6.Utils.lerp( alpha.x, alpha.y, time );
    context.beginPath();
    context.arc(
      Type6.Utils.lerp(x.x, x.y, time),
      Type6.Utils.lerp(y.x, y.y, time),
      Type6.Utils.lerp(radius.x, radius.y, time),
      0,
      Type6.Trigonometry.twopi,
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
