song1 = "";
song2="";

function preload() {
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(350, 300);
    canvas.position(500, 250);
    img = createCapture(VIDEO);
    img.hide();
}

function draw() {
    image(img, 0, 0, 350, 300);
}

function play(){
    song1.play();
}