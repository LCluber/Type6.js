window.onload = function() {
  var canvas  = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width   = canvas.width = window.innerWidth;
  var height  = canvas.height = window.innerHeight;
  var circle  = TYPE6.Geometry.Circle.create( width * 0.5, height * 0.5, 20 );

  circle.draw( context, 'rgba(0,0,0,1)' );
  context.fill();

  document.body.addEventListener("mousemove", function(event) {
    circle.setRadius(TYPE6.MathUtils.map(
                      event.clientY,
                      0, height,
                      20, 340
                    ));

    context.clearRect(0, 0, width, height);
    circle.draw( context, 'rgba(0,0,0,1)' );
    context.fill();
  });

};
