noseY=0;
noseX=0;
LeftWrist=0;
RightWrist=0; 

difference=0;


function setup() 
{
  video = createCapture(VIDEO);
  video.size(550, 500);
  canvas=createCanvas(500,500);
  canvas.position(650,119);
 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log('poseNet madel is loaded');

}
function gotPoses(results){
  if (results.length>0) {
   console.log(results);
   noseX= results[0].pose.nose.x;
   noseY= results[0].pose.nose.y;

   LeftWrist=results[0].pose.leftWrist.x;
   RightWrist=results[0].pose.rightWrist.x;


   difference=floor(LeftWrist-RightWrist);
  }
}
function draw(){
  background('#FFFF00');
  document.getElementById('spam').innerHTML="Length of square ="+ difference;
  square(noseX,noseY,difference);
  fill('#E6E6FA');
  stroke("#4C10CC");

} 