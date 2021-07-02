var chidi_blauri,ukhidari_nangumba;
var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;
var scoreLeftWrist = 0;
var scoreRightWrist = 0;
var songStatus = "";

function preload(){
    ukhidari_nangumba = loadSound('Ukhidari Nangumba Shilheiba & Biju 2020 Gee Thoibi Movie Official Song Release.mp3');
    chidi_blauri = loadSound('Chidi Blauri Laung Laachi (Full Song) Ammy Virk, Mannat Noor Neeru Bajwa Latest Punjabi Mov.mp3');
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video, 0, 0, 500, 500);

    songStatus = chidi_blauri.isPlaying();

    fill(245, 20, 20);
    stroke(245, 20, 20);

    if(scoreLeftWrist >= 0.2)
    {
      circle(leftWristX, leftWristY, 20);
      ukhidari_nangumba.stop();

      if(songStatus == false){
          chidi_blauri.play();
          document.getElementById("songname").innerHTML = "Song Name : Chidi Blauri"
      }
    }
}

function modelLoaded(){
    console.log("PoseNet is Initialised!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("Score Left Wrist = " + scoreLeftWrist);
        console.log("Left Wrist X = " + leftWristX);
        console.log("Left Wrist Y = " + leftWristY);
    }
}