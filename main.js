m_x = 0;
m_y = 0;

function preload(){
    mustache = loadImage("https://i.postimg.cc/VvdJW4PG/m.png");
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(mustache, m_x - 15, m_y + 10, 37, 26);
}

function save(){
    save("thing.png");
}

function modelLoaded(){
    console.log("Posenet is loaded");
}

function gotPoses(results){
 if(results.length > 0){
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
    m_x = results[0].pose.nose.x;
    m_y = results[0].pose.nose.y;
    }
}