var mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d");
var apples = [];
var block;
var canvas;
var food;
var snake;
var GameObject;
var yield;
var currentEnemy;
var Instantiate;
var applegenerator =window.setInterval(function () {
    apples.push(new Apple(Math.random()*mycanvas.width, Math.random()*mycanvas.height))
    })
    
    

var box = {
    xPos: 20,
    yPos: 50,
    width: 30,
    length: 30,
    goLeft: false,
    goRight: false,
    goUp: false,
    goDown: false,
    move: function(){
        console.log(box.goLeft);
        if(box.goLeft && box.xPos > 0){
            box.xPos = box.xPos - 5;    
        }
        if(box.goRight && box.xPos <1277){
            box.xPos += 5;    
        }
        if(box.goUp && box.yPos > 0){
            box.yPos -= 5;    
        }
        if(box.goDown && box.yPos < 480){
            box.yPos += 5;    
        }
        console.log(box.xPos);
    },
    draw: function(){
        ctx.rect(box.xPos,box.yPos,20,20);
        ctx.fillRect(box.xPos,box.yPos ,20,20);
        ctx.stroke();
    }
}

function Apple(xPos, yPos){
    this.xPos = xPos;
    this.yPos = yPos;
    this.height = 10;
    this.width = 10;
    this.draw = function(){
        ctx.rect(this.xPos, this.yPos, this.height, this.width);
        ctx.stroke();
    }
}

document.addEventListener("keydown", function(evt){
    if(evt.keyCode === 37){
        box.goLeft = true;
    }
    if(evt.keyCode === 38){
        box.goUp = true;
    }
    if(evt.keyCode === 39){
        box.goRight = true;
    }
    if(evt.keyCode === 40){
        box.goDown = true;        
    }    
    
});

document.addEventListener("keyup", function(evt){
    if(evt.keyCode === 37){
        box.goLeft = false;
    }
    if(evt.keyCode === 38){
        box.goUp = false;
    }
    if(evt.keyCode === 39){
        box.goRight = false;
    }
    if(evt.keyCode === 40){
        box.goDown = false;        
    }    
});

function gameLoop(){
    ctx.beginPath();
    ctx.clearRect(0,0,mycanvas.width,mycanvas.height);
    box.move();
    box.draw();
    
    for(var i = 0; i < apples.length; i++){
        if(isColliding(apples[i], box)){
            apples.splice(apples, 1);
        }
    }
    
    window.requestAnimationFrame(gameLoop);
}

   function feed()
        {
            ctx.beginPath();
            ctx.fillStyle = "#ff0000";
            ctx.fillRect(food[0],food[1],10,10);
            ctx.fill();
            ctx.closePath();
        }
        function createfood()
        {
            food = [Math.round(Math.random(4)*850), Math.round(Math.random(4)*600)];
        }
        function is_catched(ax,ay,awidth,aheight,bx,by,bwidth,bheight) {
            return !(
            ((ay + aheight) < (by)) ||
            (ay > (by + bheight)) ||
            ((ax + awidth) < bx) ||
            (ax > (bx + bwidth))
            );
        }
        function draw(pos)
        {
            var x = pos[0] * block;
            var y = pos[1] * block;
            if(x >= canvas.width || x <= 0 || y >= canvas.height || y<= 0)
            {
                    document.getElementById('pause').disabled='true';
                    snake.game.status=false;
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                    ctx.font='40px san-serif';
                    ctx.fillText('Game Over',300,250);
                    ctx.font = '20px san-serif';
                    ctx.fillStyle='#000000';
                    ctx.fillText('To Play again Refresh the page or click the Restarts button',200,300);
                    throw ('Game Over');
            }
            else
            {
                ctx.beginPath();
                ctx.fillStyle='#000000';
                ctx.fillRect(x,y,block,block);
                ctx.closePath();
            }
        }
function isColliding(thing1, thing2){
    console.log(thing1, thing2);
    var isLeft = thing2.xPos + thing2.width < thing1.xPos;
    var isRight = thing2.xPos > thing1.xPos + thing1.width;
    var isBelow = thing2.yPos + thing2.height < thing1.yPos;
    var isAbove = thing2.yPos > thing1.yPos + thing1.height;
    return !(isRight||isLeft||isAbove||isBelow);
    
    public  :GameObject;
public :ArrayList = new ArrayList();
 
var enemyNumber = 1;
var maxEnemies = 5;
 
function Update()
{
    spawnEnemy();
}
 
function spawnEnemy()
{
    while(enemyNumber < (maxEnemies))
    {
        yield (15);
        currentEnemy = Instantiate(enemyPrefab, transform.position, transform.rotation);
        enemyNumber++;
 
    }
}
}
gameLoop();
