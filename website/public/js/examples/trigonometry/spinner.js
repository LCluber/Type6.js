
window.onload = function() {
  var canvas  = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width   = canvas.width = window.innerWidth;
  var height  = canvas.height = window.innerHeight;

  var mainCircle   = new Type6.Circle( width * 0.5, height * 0.5, 200 );
  var smallCircles = [];
  var angle        = 0;
  var numObjects   = 24;
  var step         = 0;
  var slice        = Type6.Trigonometry.twopi / numObjects;
  var radius       = 20;
  //var circlePosition  = Type6.Vector2.create();

  function smallCircle(posX,posY) {
    this.circle = new Type6.Circle(0.0, 0.0, 20);
    this.alpha = 0.2;
    this.minAlpha = 0.2;
    this.setAlpha = function() {
      if( this.alpha > this.minAlpha ){
        this.alpha = Math.max(this.alpha - 0.01, this.minAlpha);
      }
    };
  }

  for(var i = 0; i < numObjects; i += 1) {
    angle = i * slice;
    smallCircles[i] = new smallCircle(
      Type6.Trigonometry.cosineEquation( mainCircle.radius, angle, 0, mainCircle.position.x ),
      Type6.Trigonometry.sineEquation( mainCircle.radius, angle, 0, mainCircle.position.y )
    );
  }

  render();


  function render(){
    context.clearRect(0, 0, width, height);
    for(var i = 0; i < numObjects; i += 1) {
      var circle = smallCircles[i];
      if (i == Math.floor(step)){
        circle.alpha = 1;
      }else {
        circle.majAlpha();
      }
      circle.draw( context, 'rgba(0, 200, 100, ' + circle.alpha + ')', null, null );
    }

    step += 0.25;
    if(step == numObjects){
      step = 0;
    }
    requestAnimationFrame( render );

  }
};
