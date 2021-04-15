status="";
function setup(){
    canvas=createCanvas(640,480);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(640,480);
    video.hide();
}
function start(){
    object_identifier=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Loading Cocossd Model";
    word=document.getElementById("object_name").value;
}
function modelLoaded(){
    console.log("Model is Loaded");
    status=true;
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function draw(){
    image(video,0,0,640,480);
}