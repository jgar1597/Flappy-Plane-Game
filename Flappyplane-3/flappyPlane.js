var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";

//some variables

var gap = 150
var constant = pipeNorth.png+gap;

var bX = 10;
var bY = 150;

var gravity = .5;

var score = 0;

// audio files

var fly = new Audio();
var scor = new Audio();

fly.src = "audio/fly.wav";
scor.src = "audio/score.wav";

// on key down 

document.addEventlistener("keydown",moveUp);

function moveUp(){
    bY -= 22.5;
    fly.play();

}

// pipe coordinates

var pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
};

// draw images

function draw(){
    
    ctx.drawImage (bg,0,0);
    
    for(var i = 0; i < pipe.length; i++) {
        
    constant = pipeNorth.height+gap;
    ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
    ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);
        
    pipe[i].x--;
        
    if ( pipe[i].x == 125 ){
         pipe.push({
                x : cvs.width,
                y : Math.floor(math.random()*pipeNoth.height)-pipeNorth.height
             
});
}
        
// detect collision
        
    if( bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width
        && (bY <= pipe [i].y + pipeNorth.height || bY+bird.height >= 
            pipe[i].y+consant) || bY + bird.height >= cvs.height - fg.height){
            location.reload(); //reload the page

}
        if(pipe[i].x == 5){
                score++;
            scor.play();
        }
}
    }
    ctx.drawImage(fg,0,cvs.height - fg.height);
    
    ctx.drawImage(bird,bX,bY);
    
    bY += gravity;
    
    ctx.fillstyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score, 10, cvs. height-20);

    requestAnimationFrame(draw);
    
    
}

draw();
