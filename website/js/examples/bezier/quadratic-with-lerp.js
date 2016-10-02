window.onload = function() {
  var canvas    = document.getElementById("canvas");
  var context   = canvas.getContext("2d");
  var width     = canvas.width = window.innerWidth;
  var height    = canvas.height = window.innerHeight;
  var p0        = TYPE6JS.Vector2D.create(100, 500);
  var p1        = TYPE6JS.Vector2D.create(200, 100);
  var p2        = TYPE6JS.Vector2D.create(1000,400);
  var pA        = TYPE6JS.Vector2D.create();
  var pB        = TYPE6JS.Vector2D.create();
  var pFinal    = TYPE6JS.Vector2D.create();
  var t         = 0;
  var maxT      = 0;
  var step      = 0.1;
  var sign      = 1;

  context.font = "16px Arial";
  draw();

  function draw() {
    context.clearRect(0, 0, width, height);

    context.strokeStyle = "#ccc";
    context.beginPath();
    context.moveTo(p0.getX(), p0.getY());
    context.lineTo(p1.getX(), p1.getY());
    context.lineTo(p2.getX(), p2.getY());
    context.stroke();

    context.beginPath();
    context.arc(p0.getX(), p0.getY(), 4, 0, TYPE6JS.Trigonometry.TWOPI, false);
    context.fill();

    context.beginPath();
    context.arc(p1.getX(), p1.getY(), 4, 0, TYPE6JS.Trigonometry.TWOPI, false);
    context.fill();

    context.beginPath();
    context.arc(p2.getX(), p2.getY(), 4, 0, TYPE6JS.Trigonometry.TWOPI, false);
    context.fill();

    context.strokeStyle = "red";
    context.beginPath();
    context.moveTo(p0.getX(), p0.getY());

    for(t = 0; t <= maxT; t += step) {
      pA.lerpTo(t, p0, p1);
      pB.lerpTo(t, p1, p2);
      pFinal.lerpTo(t, pA, pB);

      context.lineTo(pFinal.getX(), pFinal.getY());
    }
    context.stroke();

    context.beginPath();
    context.strokeStyle = "green";
    context.moveTo(pA.getX(), pA.getY());
    context.lineTo(pB.getX(), pB.getY());
    context.stroke();

    context.beginPath();
    context.arc(pA.getX(), pA.getY(), 4, 0, TYPE6JS.Trigonometry.TWOPI, false);
    context.fill();

    context.beginPath();
    context.arc(pB.getX(), pB.getY(), 4, 0, TYPE6JS.Trigonometry.TWOPI, false);
    context.fill();

    context.fillStyle = "red";
    context.beginPath();
    context.arc(pFinal.getX(), pFinal.getY(), 4, 0, TYPE6JS.Trigonometry.TWOPI, false);
    context.fill();
    context.fillStyle = "black";

    labelPoint(p0, "p0");
    labelPoint(p1, "p1");
    labelPoint(p2, "p2");
    labelPoint(pA, "pA");
    labelPoint(pB, "pB");
    labelT();

    maxT += step * sign;
    if( maxT > 1 || maxT < 0 ){
      sign = TYPE6JS.MathUtils.getOppositeSign(sign);
      maxT += step * sign;
    }

    setTimeout(draw, 500);
  }

  function labelPoint(p, name) {
    context.fillText(name + '( x : ' + Math.round(p.getX()) + ', y:' + Math.round(p.getY()) + ')', p.getX() - 40, p.getY() - 20);
  }

  function labelT() {
    context.fillText("t = " + TYPE6JS.MathUtils.round(maxT, 1), 400, 400);
  }
};
