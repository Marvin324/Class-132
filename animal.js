function back() 
{
    location.replace('index.html');
}

function setup()
{
    canvas = createCanvas(440, 400);
    canvas.center();
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload()
{
    img = loadImage('animals.png');
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}