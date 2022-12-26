class Rectangle {
    x;
    y;
    width;
    height;
    color;
    status;
    constructor(x, y, width, height, color, status) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.status = status;
    }
    getStatus(){
        return this.status
    }
    setStatus(status){
        this.status = status;
    }
    drawRect(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fill();
        ctx.closePath();
    }
    moveRight(){
        this.x += 30;
    }
    moveLeft(){
        this.x -=30;
    }
}
