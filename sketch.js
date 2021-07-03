var weights=[35,38,40,45];
function setup() 
{
  createCanvas(400,400);
  var sum=weights[0]+weights[1]+weights[2]+weights[3];
  var average=sum/weights.length;
  console.log(average);
}

function draw() 
{
background(51);

}

