var  speak_data

var  to_number = Number(content);

if(Number.integer(to_number))

var  apple = <img src="apple-5902283.webp"></img>

var  screen_width = window.innerWidth;
var  screen_hieght = window.innerHieght

function preload(){

}

function loadimage(){

}

function createCanvas(){
    screen_width-150 , screen_hieght-150
}

function canvasPosition(){
    canvas.position="0"
}

for(var i = 1; i  <= to_number; i++)
{
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    image(apple, x, y, 50, 50);
}