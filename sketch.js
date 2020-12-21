var dog, happyDog, sadDog;
var foodstock;
var foodS;

function preload(){
happyDog=loadImage("images/dogImg.png");
sadDog=loadImage("images/dogImg1.png")

}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(200,200,50,50);
  dog.addImage(sadDog)
  dog.scale=0.5
  database=firebase.database();
  
  var foodstock=database.ref('Dog/Food/Milk');
  foodstock.on("value",readStock,showError);

}


function draw() {  
  background(46,139,87)
  if(foodS!==undefined){
  textSize(20)
  text("Food:"+foodstock,20,20)
  //text("Food:"+foodS,20,40)
  if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog)
  }

  drawSprites();
 
}

}
function readStock(data){
  foodS=data.val();
  foodstock=foodS;
  console.log(foodS)
  
  }

function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x-=1
  }
  database.ref('Dog/Food').update({
    'Milk':x
  })
  
}

function showError(){

}