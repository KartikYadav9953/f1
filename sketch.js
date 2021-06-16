var gameState = 0

var playerCount = 0

var g, f, p

function setup(){
    createCanvas(500,500);

    db = firebase.database();

    g = new game();

    g.start();

}

function draw(){
    background("white");
    
    drawSprites();

}
