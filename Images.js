//variaveis das imagens
  let Deep_Ocean;
  let Submersible;
  let car_01;
  let car_02;
  let car_03;
  let car_04;
  let car_05;
  let soundTrack;
  let collisionSound;
  let pointSound;

function preload(){
  Deep_Ocean = loadImage ("Images/Deep_Ocean.png")
  Submersible = loadImage("Images/ator-2.png")
  car_01 = loadImage("Images/shark.png")
  car_02 = loadImage("Images/carro-4.png")
  car_03 = loadImage("Images/carro-3.png")
  car_04 = loadImage("Images/carro-1.png")
  car_05 = loadImage("Images/carro-2.png")
  carsShow = [car_01,car_02,car_03,car_04,car_05]
  carSpeed = [3.5,3,2.7,2.5,2.8]
  soundTrack = loadSound("sounds/trilha.mp3");
  collisionSound = loadSound("sounds/colidiu.mp3");
  pointSound = loadSound("sounds/pontos.wav");
}