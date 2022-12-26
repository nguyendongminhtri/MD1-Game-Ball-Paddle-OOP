class Circle {
    x;
    y;
    dx;
    dy;
    radius;
    color

    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    drawCircle(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
        ctx.fill();
        ctx.closePath();
    }
    setDx(dx){
        this.dx = dx;
    }
    setDy(dy){
        this.dy = dy;
    }
   moveRightLeft(){
        this.x += this.dx;
   }
   moveTopDown(){
        this.y += this.dy;
   }
}
