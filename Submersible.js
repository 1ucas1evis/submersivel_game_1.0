//Submersible actions
  let xSub = 290;
  let ySub = 355;
  let collision = false;
  let myPoints = 0;

function movementSubmersible(){
  if (keyIsDown(DOWN_ARROW)) {
    if (canMove()){
        ySub += 2;
    }
  }
  if (keyIsDown(UP_ARROW)){
    
    ySub -= 2; 
    }
}

function checkCollision (){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < carsShow.length; i ++){
    collision = collideRectCircle (xCars[i], yCars[i], widthCar, heightCar,xSub, ySub, 17)
    if (collision){
      collidedOrWin();
      collisionSound.play();
        if (pointsBiggerThanZero ()) {
        myPoints -= 1;
      }
    }
  }
}

function collidedOrWin () {
  ySub = 355;
}

function includePoints (){
  textAlign (CENTER);
  textSize (25);
  fill (75,0,130)
  text(myPoints, width / 5, 25);
}

function setPoints (){
  if (ySub < 10) {
    myPoints += 1;
    pointSound.play();
    collidedOrWin ();
  }
}
  
function pointsBiggerThanZero (){
  return myPoints > 0
}

function canMove (){
 return ySub < 355 
}