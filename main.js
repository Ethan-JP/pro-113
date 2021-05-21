function preload(){

}

function setup(){
    //create canvas
canvas=createCanvas(400,400)
canvas.position(200,200)
//create live webcam view
video=createCapture(VIDEO)
video.hide()

tintcolor=""
}

function draw(){
//image(var,x,y,w,h)
image(video,0,0,400,400)

tint(tintcolor)
//fill(color)
//stroke(color)
//circle(x,y,radius)
//rect(x,y,w,h)

}

function apply() {
    tintcolor=document.getElementById("colour_input").value
}
function take_snapshot(){
    save("ethan.png")
}