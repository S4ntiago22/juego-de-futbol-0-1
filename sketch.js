var canvas;
var backgroundImage;
var eq1, eq2, eq3, eq4, eq5;
var imgeq1, imgeq2, imgeq3, imgeq4,imgeq5;

function preload(){
  backgroundImage = loadImage("./image/imgfondo.jpg");
  imgeq1 = loadImage("./image/imgeqbayerm.png")
  imgeq2 = loadImage("./image/imgeqchelsea.png")
  imgeq3 = loadImage("./image/imgeqmilan.png")
  imgeq4 = loadImage("./image/imgeqpsg.png")
  imgeq5 = loadImage("./image/imgeqrmadrid.png")
  function setup(){
   canvas = createCanvas(windowWidth, windowHeight); //cargar camara 22/09/22//
  
   //agregar equipos//
   
   eq1 = createSprite (skell -500,50,6,6);
   eq1.addImage (imgeq1);
   
   eq2 = createSprite (skell -500,50,6,6);
   eq2.addImage (imgeq2);
  }
}

function draw(){
 background(backgroundImage);
  drawSprites();
}