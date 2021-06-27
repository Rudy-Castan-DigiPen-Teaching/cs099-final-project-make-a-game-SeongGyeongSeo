// Name       : GyeongSeo Seong
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

class Food 
{
    constructor() 
    {
        this.x;
        this.y;
        this.size = 20;
        this.foodColor = color(164, 21, 53);
    }

    firstDraw() 
    {
        this.setCoords();
    }

    draw() 
    {
        fill(this.foodColor);
        noStroke();
        circle(this.x, this.y, this.size);
    }

    update() 
    {
        this.setCoords();
        fill(this.foodColor);
        noStroke();
        circle(this.x, this.y, this.size)
    }

    setCoords() 
    {
        this.x = floor(random(0,width - 13));
        this.y = floor(random(0,width - 13));
        
        while(this.x % 25 != 0) 
        {
            this.x -= 1;
        }
        while(this.y % 25 != 0) 
        {
            this.y -= 1;
        }

        while(true) 
        {
            let counter = 0;
            for(let i = 0; i < bodySegments.length; i++) 
            {
                if(this.x === bodySegments[i].x && this.y === bodySegments[i].y) 
                {
                    this.x = floor(random(0, width - 12));
                    this.y = floor(random(0, width - 12));
                }
            }
            while(this.x % 25 != 0) 
            {
                this.x -= 1;
            }
            while(this.y % 25 != 0) 
            {
                this.y -= 1;
            }

            if(counter === 0) 
            {
                break;
            }
        }

        circle(this.x, this.y, this.size);
    }
}