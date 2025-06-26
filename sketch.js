
var Motor = Matter.Engine;//  Cria o motor
var Mundo = Matter.World;
var Corpos =Matter.Bodies;
var Corpo = Matter.Body;


var motor;


var bola, chao;


var bolinhas = [];
var limite_bolinhas = 1000;  


function setup() {
  createCanvas(1445, 699);


  motor = Motor.create();
  mundo = motor.world;




  var opcoes_chao={
    isStatic:true
  }


  var opcoes_bola={
    restitution: 0.5,
    frictionAir : 0.01
  }


  bola = Corpos.circle(100,10,40,opcoes_bola );
  Mundo.add(mundo, bola);


  chao = Corpos.rectangle(722,695,1430,20,opcoes_chao);
  Mundo.add(mundo, chao);


  for(var contador=0; contador<limite_bolinhas; contador++){
    adicionarBolinha();
  }


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background("black");


  Motor.update(motor);

  fill("red")
  ellipse(bola.position.x, bola.position.y,50)

  fill("blue")
  rect(chao.position.x, chao.position.y, 1430,20);


  for(var j=0; j<bolinhas.length; j++){
    var bolinha = bolinhas[j];
    fill(random(0,255), random(0,255), random(0,255));
    ellipse(bolinha.position.x, bolinha.position.y,bolinha.circleRadius);
  }




  if(keyIsDown(LEFT_ARROW)){
    Corpo.applyForce(bola, {x:bola.position.x, y:bola.position.y}, {x:-0.005, y:0})
  }
  if(keyIsDown(RIGHT_ARROW)){
    Corpo.applyForce(bola,{x:bola.position.x, y:bola.position.y}, {x:0.005, y:0})
  }
  if(keyIsDown(UP_ARROW)){
    Corpo.applyForce(bola, {x:bola.position.x, y:bola.position.y}, {x:0, y:-0.010})
  }
  if(keyIsDown(DOWN_ARROW)){
    Corpo.applyForce(bola,{x:bola.position.x, y:bola.position.y}, {x:0, y:0.005})
  }


}


function adicionarBolinha(){
  var opcoes_bolinhas={
    restitution: random(0.5,1),
    frictionAir: random(0.01, 0.1)
  }


  var bolinha = Corpos.circle(random(50, 1450), random(50,650),10, opcoes_bolinhas);
  Mundo.add(mundo,bolinha);
  bolinhas.push(bolinha);


}

