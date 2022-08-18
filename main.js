leftWristx = 0;
leftWristy = 0;

rightWristx = 0;
rightWristy = 0;

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}

function modelloaded() {
    console.log("PoseNet is intialized");
}

function draw() {
    image(video, 0, 0, 500, 500);
}

harry_potter = "";
peter_pan = "";

function preload() {
    harry_potter = loadSound("harrypotter.mp3");
    peter_pan = loadSound("peterpan.mp3");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        console.log("left wrist x", leftWristx);
        console.log("left wrist y", leftWristy);
        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;
        console.log("right wrist x", rightWristx);
        console.log("right wrist y", rightWristy);
    }
}