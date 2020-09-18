import { GameTemplate } from "./GameTemplate.js";
import { Paddle } from "./Pong.js";
import { MovableGameObject } from "../GameObject.js";

export class FallingStones extends GameTemplate 
{
    start()
    {
        this.playerWidth = 50;
        this.playerHeight = 50;
        this.playerSpeed = 8;
        this.player = new Paddle(200 - this.playerWidth/2, 500 - this.playerHeight, this.playerWidth, this.playerHeight, this.playerSpeed);
        
        this.bulletSize = 10;
        this.bulletSpeed = 7;
        this.bulletRate = 40;
        this.bulletTimeCounter = 0;
        this.bullets = [];

        this.stoneWidth = 50;
        this.stoneHeight = 100;
        this.stoneSpeed = 3;
        this.stoneRate = 140;
        this.stoneTimeCounter = 0;
        this.stones = [];

        this.points = 0;
        this.life = 10;

        this.gameOver = false;
    }

    bindControls()
    {
        this.inputBinding = { "left": this.player.left.bind(this.player), 
                              "right": this.player.right.bind(this.player),
                              "up": this.createNewBullet.bind(this), };
    }

    update(ctx)
    {
        /*---------Player---------*/
        this.player.update(ctx);


        /*---------Bullets--------*/
        this.bulletTimeCounter++;
        this.bullets.forEach((bullet, index) => 
        { 
            bullet.update(ctx); 
            if(bullet.y < -this.bulletSize) //Remove bullet from the array as soon as it leaves the screen
            {
                this.bullets.splice(index, 1);
                this.life--;
            }
        });


        /*---------Stones--------*/
        this.stoneTimeCounter++;
        if(this.stoneTimeCounter === this.stoneRate)
        {
            this.createNewStone();  
            this.stoneTimeCounter = 0;
        }

        this.stones.forEach((stone, index) => 
        { 
            stone.update(ctx); 
            if(stone.y > 500) //Remove stone from the array as soon as it leaves the screen
            {
                this.stones.splice(index, 1);
            }
        });



        /*---------Collision Check---------*/
        this.collisionCheckBulletStone();
        this.collisionCheckPlayerStone();
    }

    draw(ctx)
    {
        this.player.draw(ctx);
        this.bullets.forEach(bullet => { bullet.draw(ctx) });
        this.stones.forEach(stone => { stone.draw(ctx) });   
        
        this.showLifeAndPoints(ctx);
    }

    createNewBullet(bool)
    {
        if(this.bulletTimeCounter >= this.bulletRate)
        {
            this.bulletTimeCounter = 0;
            if(bool)
            {
                let x = this.player.x + this.playerWidth/2 - this.bulletSize/2;
                let y = this.player.y;
                let size = this.bulletSize;
                let speed = -this.bulletSpeed;

                this.bullets.push(new MovableGameObject(x, y, size, size, "#6bd26b", 0, speed)); 
            }  
        }
                  
    }

    createNewStone()
    {
        let x = Math.random() * 350;
        let y = -this.stoneHeight;
        let width = this.stoneWidth;
        let height = this.stoneHeight;
        let speed = this.stoneSpeed;

        this.stones.push(new MovableGameObject(x, y, width, height, "#6bd26b", 0, speed));
    }

    collisionCheckBulletStone()
    {
        this.stones.forEach((stone, index) => 
        {
            let bullet = (this.bullets)[0];
            if(bullet != undefined)
            {
                if(MovableGameObject.rectangleCollision(stone, bullet))
                {
                    this.stones.splice(index, 1);
                    this.bullets.splice(0, 1);
                    this.points++;
                }
            }
        });
    }

    collisionCheckPlayerStone()
    {
        this.stones.forEach((stone, index) => 
        {
            if(MovableGameObject.rectangleCollision(stone, this.player) || this.life === 0)
            {
                this.gameOver = true; 
            }
        });
    }

    showLifeAndPoints(ctx)
    {
        ctx.font = "18px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.fillText("Verbleibende Leben: " + this.life, 220, 30);
        ctx.fillText("Punktezahl: " + this.points, 285, 50);
    }


    static get NAME() 
    {
        return "Falling Stones";
    }

}
