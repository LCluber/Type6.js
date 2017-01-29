
window.onload = function() {
  var canvas  = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width   = canvas.width = window.innerWidth;
  var height  = canvas.height = window.innerHeight;

  var mainCircle   = TYPE6.Geometry.Circle.create( width * 0.5, height * 0.5, 200 );
  var smallCircles = [];
  var angle        = 0;
  var numObjects   = 24;
  var step         = 0;
  var minAlpha     = 0.2;
  var slice        = TYPE6.Trigonometry.TWOPI / numObjects;
  var radius       = 20;
  //var circlePosition  = TYPE6.Vector2.create();

  for(var i = 0; i < numObjects; i += 1) {
    angle = i * slice;
    smallCircles[i] = TYPE6.Geometry.Circle.create(
      TYPE6.Trigonometry.cosineEquation( mainCircle.getRadius(), angle, 0, mainCircle.getPositionX() ),
      TYPE6.Trigonometry.sineEquation( mainCircle.getRadius(), angle, 0, mainCircle.getPositionY() ),
      20
    );
    var circle = smallCircles[i];
    circle.alpha = minAlpha;
    circle.majAlpha = function(){
      if( this.alpha > minAlpha ){
        //this.alpha += 0.01;
        this.alpha = Math.max(this.alpha - 0.01, minAlpha);
      }
    };
  }

  render();

  // function majAlpha(minAlpha){
  //   if( this.alpha > minAlpha ){
  //     //this.alpha += 0.01;
  //     this.alpha = Math.max(this.alpha - 0.01, minAlpha);
  //   }
  // }

  function render(){
    context.clearRect(0, 0, width, height);
    for(var i = 0; i < numObjects; i += 1) {
      var circle = smallCircles[i];
      if (i == Math.floor(step)){
        circle.alpha = 1;
      }else {
        circle.majAlpha();
      }
      circle.draw( context, 'rgba(0, 200, 100, ' + circle.alpha + ')');
    }

    step += 0.25;
    if(step == numObjects){
      step = 0;
    }
    requestAnimationFrame( render );

  }
};
