var movingrectangle
var fixedrectangle
var fixedrectangle1
var fixedrectangle2


function setup() {
  createCanvas(800,400);
 movingrectangle = createSprite(200,200,80,30);
 fixedrectangle = createSprite(200,200,30,80);
 fixedrectangle1 = createSprite(400,200,30,80);
 fixedrectangle2 = createSprite(600,200,30,80);
 movingrectangle.shapeColor = "green"
 fixedrectangle.shapeColor = "green"
 fixedrectangle1.shapeColor = "green"
 fixedrectangle2.shapeColor = "green"
}

function draw() {
  background("black"); 
  movingrectangle.y = mouseY
  movingrectangle.x = mouseX
  
  if(istouching(movingrectangle,fixedrectangle))
  {
    movingrectangle.shapeColor = "red"
    fixedrectangle.shapeColor = "red"
  }
  else {
    movingrectangle.shapeColor = "green"
    fixedrectangle.shapeColor = "green"
  }



  if(istouching(movingrectangle,fixedrectangle1))
  {
    movingrectangle.shapeColor = "red"
    fixedrectangle1.shapeColor = "red"
  }
  else {
    movingrectangle.shapeColor = "green"
    fixedrectangle1.shapeColor = "green"
  }


  if(istouching(movingrectangle,fixedrectangle2))
  {
    movingrectangle.shapeColor = "red"
    fixedrectangle2.shapeColor = "red"
  }
  else {
    movingrectangle.shapeColor = "green"
    fixedrectangle2.shapeColor = "green"
  }
  drawSprites();
}


//creating a function to check wether collision takes place or not
function istouching(object1,object2)
{
    if(  object1.x-object2.x<object2.width/2+object1.width/2
      && -object2.y + object1.y<object2.height/2+object1.height/2
      && object2.y - object1.y<object2.height/2+object1.height/2
      && -object1.x+object2.x<object2.width/2+object1.width/2) {
      

        return true

    }
  
      else {
       
        
        return false
      }
  
}
