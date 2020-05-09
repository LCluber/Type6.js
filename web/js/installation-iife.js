// HTML import : <script src="node-modules/@lcluber/type6js/dist/type6.iife.min.js"></script>

function AabbVSAabbCollision( apos, ahs, bpos, bhs) {
  let ab = new Type6.Vector2().copy(apos).subtract(bpos); //(-3,-2)
  let penetration = ab.clone().absolute().opposite().add(ahs).add(bhs); //(0,1)
  if(penetration.isPositive()) {
    return getProjection(penetration, ab);
  }
  return penetration.origin();
}

function getProjection(penetration, ab) {
  //pick the projection axis
  let minAxis = penetration.getMinAxis(); //x
  penetration.setOppositeAxis(minAxis, 0); //(0,0)
  if(penetration[minAxis] && ab[minAxis] < 0) {
    penetration[minAxis] = -penetration[minAxis];
  }
  return penetration;
}

let apos = new Type6.Vector2(2,2);
let ahs  = new Type6.Vector2(1,1);
let bpos = new Type6.Vector2(5,4);
let bhs  = new Type6.Vector2(2,2);

let collisionDetection = AabbVSAabbCollision(apos, ahs, bpos, bhs);