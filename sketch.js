const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var backgroundImg;
var snowObj;
var snowImg;

function preload(){
  backgroundImg = loadImage("snow2.jpg");
  
}

function setup() {
  //default values were = 800,400;
  createCanvas(1000,600);
  //snowObj=new snow(500,300,15);

}

function draw() {
  background(backgroundImg);
  snowObj.display(); 

  drawSprites();
}