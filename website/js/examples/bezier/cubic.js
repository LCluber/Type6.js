window.onload = function() {
  var canvas  = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width   = canvas.width = window.innerWidth;
  var height  = canvas.height = window.innerHeight;

  var p0      = TYPE6.Vector2D.create(TYPE6.Random.integer(0, width), TYPE6.Random.integer(0, height));
  var p1      = TYPE6.Vector2D.create(TYPE6.Random.integer(0, width), TYPE6.Random.integer(0, height));
  var p2      = TYPE6.Vector2D.create(TYPE6.Random.integer(0, width), TYPE6.Random.integer(0, height));
  var p3      = TYPE6.Vector2D.create(TYPE6.Random.integer(0, width), TYPE6.Random.integer(0, height));
  var pFinal  = TYPE6.Vector2D.create();
  var t       = 0;
  var t2      = 0;
  var step    = 0.01;
  var sign    = 1;

  context.strokeStyle = "green";

  draw();

  function draw() {
    context.clearRect(0, 0, width, height);

    context.fillStyle = "black";

    context.beginPath();
    context.arc(p0.getX(), p0.getY(), 4, 0, TYPE6.Trigonometry.TWOPI, false);
    context.fill();

    context.beginPath();
    context.arc(p3.getX(), p3.getY(), 4, 0, TYPE6.Trigonometry.TWOPI, false);
    context.fill();

    context.fillStyle = "grey";

    context.beginPath();
    context.arc(p1.getX(), p1.getY(), 4, 0, TYPE6.Trigonometry.TWOPI, false);
    context.fill();

    context.beginPath();
    context.arc(p2.getX(), p2.getY(), 4, 0, TYPE6.Trigonometry.TWOPI, false);
    context.fill();

    context.beginPath();
    context.moveTo(p0.getX(), p0.getY());

    for(var t = 0; t <= 1 + step; t += step) {
      pFinal.cubicBezierTo( p0, p1, p2, p3, t );
      context.lineTo(pFinal.getX(), pFinal.getY());
    }
    context.stroke();

    pFinal.cubicBezierTo( p0, p1, p2, p3, t2 );

    context.fillStyle = "red";
    context.beginPath();
    context.arc(pFinal.getX(), pFinal.getY(), 10, 0, TYPE6.Trigonometry.TWOPI, false);
    context.fill();

    t2 += step * sign;
    if(t2 > 1 || t2 < 0) {
      sign = TYPE6.MathUtils.getOppositeSign(sign);
    }

    requestAnimationFrame(draw);

  }
};
