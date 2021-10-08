video="";//this is a variable
status = "";//this is a variable

function preload()//this is used to automatically load the items
{
video=createVideo("video.mp4");//this is for storing a video in the "video" variable
video.hide();//this is to hide the extra component

}

function setup()//this is to set up any item
{
    canvas = createCanvas(400, 380);//this is creating a canvas
    canvas.center();//this is used to ceter the canvas
   
}

function draw()//this is to automatically execute the items in it
{
image(video, 0, 0, 400, 380);//this is to place the video on the canvas width and hight

}

function start()//this is a function when clicked on the start button to execute the items 
{
    objectD = ml5.objectDetector("cocossd", modelLoaded);//this is used to trigger the object identification process
    document.getElementById("status").innerHTML = "Status: Detecting Objects";//this is used to let the user know that the objects are being detected
}
function modelLoaded()//this is ensres if the model has loaded properly
{
    console.log("ModelLoaded");//this is to tell us that the model has loaded and wont show if there is an error
    status = true;//this is to start drawing the rectangles only after the model has been loaded
    video.loop();//this is used to play the video on loop
    video.speed(1);//this is the speed of the video is being played at
    video.volume(0);//this is the volume of the video
}
//we are using p5.js library for the pre-defind function
//we are also using the ml5 library is used to apply functions ex:"objectDetector","imageClassifier", exetera.
//we are aswell using the cocossd model to detect the objects 
