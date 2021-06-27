// Name       : GyeongSeo Seong
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

class HeadSegment 
{
    constructor() 
    {
      this.x;
      this.y;
      this.size = 20;
      this.preX;
      this.preY;
    }
  
    eatFood(food) 
    {
      let d = dist(this.x, this.y, food.x, food.y);
      return d < 10;
    }
  
    collision() 
    {
      if (this.x < 0 || this.x > width - 13 || this.y < 0 || this.y > height - 13) 
      {
        return true;
      }

      for (let i = 0; i < bodySegments.length; i++) 
      {
        if (this.x === bodySegments[i].x && this.y === bodySegments[i].y) 
        {
          return true;
        }
      }
      return false;
    }
  
    drawTongue() 
    {
      stroke(255, 25, 25);
      if (direction === 1) 
      {
        line(this.x - 12, this.y, this.x - 17, this.y);
        line(this.x - 17, this.y, this.x - 23, this.y + 3);
        line(this.x - 17, this.y, this.x - 23, this.y - 3);
      }
  
      if (direction === 2) 
      {
        line(this.x + 12, this.y, this.x + 17, this.y);
        line(this.x + 17, this.y, this.x + 23, this.y + 3);
        line(this.x + 17, this.y, this.x + 23, this.y - 3);
      }
  
      if (direction === 3) 
      {
        line(this.x, this.y - 12, this.x, this.y - 17);
        line(this.x, this.y - 17, this.x - 3, this.y - 23);
        line(this.x, this.y - 17, this.x + 3, this.y - 23);
      }
  
      if (direction === 4) 
      {
        line(this.x, this.y + 12, this.x, this.y + 17);
        line(this.x, this.y + 17, this.x + 3, this.y + 23);
        line(this.x, this.y + 17, this.x - 3, this.y + 23);
      }
    }
  
    colorBody(body) 
    {
      for (let i = 0; i < body.length; i++) 
      {
        let bodyLen = body.length;
        let c1 = map(i, 0, bodyLen, 90, 255);
        let c2 = map(bodyLen - i, bodyLen, 0, 255, 90);
        body[i].c1 = c1;
        body[i].c2 = c2;
      }
    }
  
    move(direction) 
    {
      if (direction === 0) 
      {
        this.x = width / 2;
        this.y = height / 2;
        while (this.x % 25 != 0) 
        {
          x += 1;
        }
        while (this.y % 25 != 0) 
        {
          y += 1;
        }
      }
      if (direction === 1) 
      {
        this.preX = this.x;
        this.preY = this.y;
        this.x -= 25;
      } 
      else if (direction === 2) 
      {
        this.preX = this.x;
        this.preY = this.y;
        this.x += 25;
      }
      else if (direction === 3) 
      {
        this.preX = this.x;
        this.preY = this.y;
        this.y -= 25;
      } 
      else if (direction === 4) 
      {
        this.preX = this.x;
        this.preY = this.y;
        this.y += 25;
      }
      noFill();
      stroke(255);
      strokeWeight(3);
      square(this.x, this.y, this.size, 4);
      okToMove = true;
    }
  }