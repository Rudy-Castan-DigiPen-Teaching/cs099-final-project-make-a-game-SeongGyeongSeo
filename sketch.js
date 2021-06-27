// Name       : GyeongSeo Seong
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

let startLength = 1;
let direction = 0;
let head;
let bodySegments;
let food;
let okToMove = true;

function setup() 
{
  rectMode(CENTER);
  canvas = createCanvas(500, 600);
  resetSketch();
}

function resetSketch() 
{
  loop();
  background(18);
  direction = 0;
  food = new Food();
  head = new HeadSegment();
  bodySegments = [startLength];
  for (let i = 0; i < startLength; i++) 
  {
    bodySegments[i] = new BodySegment();
  }
  food.firstDraw();
}

function draw() 
{
  translate(11, 11);
  if (frameCount % 10 === 0) 
  {
    background(220);
    head.move(direction);
    head.colorBody(bodySegments);
    bodySegments[0].follow(head);
    for (let i = 1; i < bodySegments.length; i++) 
    {
      bodySegments[i].follow(bodySegments[i - 1]);
    }
    food.draw();
    if (head.eatFood(food)) 
    {
      food.update();
      bodySegments.push(new BodySegment());
    }
    if (head.collision()) 
    {
      gameOver();
    }
    head.drawTongue();
  }
}

function gameOver() 
{
  noLoop();
  background(126, 238, 242);
  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(36);
  text('You died', width / 2, height / 2 - 100);
  textSize(30);
  text('Total: ' + (bodySegments.length - startLength) + ' pieces of food', width / 2, height / 2 - 30);
}

function keyPressed() 
{
  if (okToMove) 
    {
      if (keyCode === LEFT_ARROW && direction != 2) 
      {
        direction = 1;
        okToMove = false;
      } 
      else if (keyCode === RIGHT_ARROW && direction != 1) 
      {
        direction = 2;
        okToMove = false;
      } 
      else if (keyCode === UP_ARROW && direction != 4) 
      {
        direction = 3;
        okToMove = false;
      } 
      else if (keyCode === DOWN_ARROW && direction != 3) 
      {
        direction = 4;
        okToMove = false;
      }
    }

    if (key === 'r') 
    {
      loop();
      setup();
    }
}