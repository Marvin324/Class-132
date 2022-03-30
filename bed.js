img = "";
status = "";
objectDetector = [];

function preload()
{
    img = loadImage('bed.png');
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
} 

function setup()
{
    canvas = createCanvas(440, 400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log('Model Loaded!')
}

function back() 
{
    location.replace('index.html');
}


