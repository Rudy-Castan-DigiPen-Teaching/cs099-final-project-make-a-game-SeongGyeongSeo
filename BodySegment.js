// Name       : GyeongSeo Seong
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

class BodySegment 
{
    constructor() 
    {
      this.x = random(-550, -200);
      this.y = random(-550, -300);
      this.size = 20;
      this.preX;
      this.preY;
    }

    follow(previousSegment) 
    {
      fill(54, 209, 118);
      noStroke();
      this.preX = this.x;
      this.preY = this.y;  
      this.x = previousSegment.preX == null ? -50 : previousSegment.preX;
      this.y = previousSegment.preY== null ? -50 : previousSegment.preY;
      square(this.x, this.y, this.size, 4);
    }
  
}