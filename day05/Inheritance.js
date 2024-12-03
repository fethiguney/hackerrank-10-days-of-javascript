//Rectangle class
class Rectangle {
    constructor(width, height){
        this.width=width;
        this.height=height;
    }
}


//Add area method to Rectangle's prototype
Rectangle.prototype.area=function(){
    return this.width*this.height;
}

//Square class, subclass of Rectangle
class Square extends Rectangle{
    constructor(side){
        //call th constructor of Rectangle with side as both width and height
        super(side, side);
    }

}


//Example usage
const square=new Square(5);
console.log(square.area());