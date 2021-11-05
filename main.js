rightWristX = 0;
leftWristX = 0;
difference = 0;

function preload() {}

function setup() {
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(500,450);
    canvas.position(650,150);
    pose_net = ml5.poseNet(video,modelLoaded);
    pose_net.on('pose',gotPoses);
}

function draw() {
    background('#6e6969');
    text("Harry James Potter");
    fill("#ff0000");
    size(difference);
    document.getElementById("font_size").innerHTML ="Font Size is equal to " + difference + " px";   
}

function modelLoaded() {
    console.log("PoseNet is initialized!!");
}

function gotPoses(results) {
    if(results.length>0){
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left wrist X position is" + leftWristX);
        console.log("Right wrist X position is" + rightWristX);
        console.log("Difference between right and left wrist is" + difference);
    }
}