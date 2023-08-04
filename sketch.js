//Submersível-Titanic
//Chegue com o Submersível até o Titanic antes de ser implodido
//cada dez metros equivalem a uma pressão atmosférica
//A pressão na área gira em torno de 370 atm.
//61,6 atm cada "rua", monstro lago ness, peixes estranhos, 


function setup() {
  createCanvas(680, 400);
  soundTrack.loop()
}

function draw() {
  background(Deep_Ocean);
  image(Submersible, xSub, ySub, 48, 48)
  image(carsShow[0], xCars [0], yCars [0], widthCar, heightCar)
  image(carsShow[1], xCars [1], yCars [1], widthCar, heightCar)
  image(carsShow[2], xCars [2], yCars [2], widthCar, heightCar)
  image(carsShow[3], xCars [3], yCars [3], widthCar, heightCar)
  image(carsShow[4], xCars [4], yCars [4], widthCar, heightCar)
  movementCar01 ()
  movementSubmersible ()
  carReturn ()
  checkCollision ()
  includePoints ()
  setPoints ()
}





