var tower,towerImage;
var door, doorImage, doorsGroup;
var climber, climberImage, climberGroup;
var ghost, ghostImage
var invisibleBlock, invisibleBlockGroup
var gamestate="play"
function preload()
{
  towerImage=loadImage("tower.png");
  doorImage=loadImage("door.png");
  climberImage=loadImage("climber.png")
  ghostImage=loadImage("ghost-standing.png")
  
}

function setup()
{
  createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage("tower",towerImage);
  tower.velocityY=1;
  doorsGroup=new Group();
  climberGroup=new Group();
  invisibleBlockGroup=new Group()
  ghost=createSprite(200,200,50,50)
  ghost.addImage("ghost",ghostImage)
  ghost.scale=0.3
}
function draw()
//____________________________________________________________________\\
{
  background(0);
  if (gamestate==="play")
  {

      if (tower.y>400)
      {
        tower.y=300
  
      }
  
  
        if (keyDown("space"))
        {
          ghost.velocityY=-5
        }
          if (keyDown("left_arrow"))
          {
            ghost.x=ghost.x-3
          }
            if (keyDown("right_arrow"))
            {
              ghost.x=ghost.x+3
    
            }
                ghost.velocityY=ghost.velocityY+0.8
 
                  spawnDoors();
                    if (climberGroup.isTouching(ghost))
                    {
                      ghost.velocityY=0
                    }
                    if (invisibleBlockGroup.isTouching(ghost)||ghost.y>600)
                      {
                        ghost.destroy()
                        gamestate="end"
                      }
    
  drawSprites();
 
  
} 
if(gamestate==="end"){
  stroke("yellow")
  fill("yellow")
  textSize(30)
  text(":-(GAMEOVER:-(", 230,250)
  
}
}
function spawnDoors(){
  if (frameCount%200===0){
    door=createSprite(200,-50)
    door.addImage(doorImage)
    door.velocityY=1
    door.x=Math.round(random(120,400))
    door.lifetime=600
    doorsGroup.add (door)
    //_____________________________\\
    climber=createSprite(200,10)
    climber.addImage(climberImage)
    climber.velocityY=1
    climber.x=door.x
    climber.lifetime=600
    climberGroup.add(climber)
    //_____________________________\\
    invisibleBlock=createSprite(200,15)
    invisibleBlock.width=climber.width
    invisibleBlock.height=2
    invisibleBlock.x=door.x
    invisibleBlock.velocityY=1
    invisibleBlock.lifetime=600
    invisibleBlock.debug=true
    invisibleBlockGroup.add (invisibleBlock)
    //_____________________________\\
    ghost.depth=door.depth
    ghost.depth=ghost.depth+1
   
    
  }
}