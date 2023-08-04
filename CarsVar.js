//variaveis dos "carros"

let xCars = [650,450,350,250,150]
let yCars = [75,125,175,225,275]
let heightCar = 35
let widthCar = 50

//Car movements

function movementCar01(){
  for (let i = 0; i < xCars.length; i = i + 1) {
  xCars [i] -= carSpeed[i];
}
}

function carReturn (){
  if (xCars [0] < -40) {xCars [0] = 650}
  if (xCars [1] < -40) {xCars [1] = 650}
  if (xCars [2] < -40) {xCars [2] = 650}
  if (xCars [3] < -40) {xCars [3] = 650}
  if (xCars [4] < -40) {xCars [4] = 650}
}
