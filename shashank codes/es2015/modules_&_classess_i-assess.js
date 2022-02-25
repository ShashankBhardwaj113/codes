var fs = require('fs');
var input=fs.readFileSync('input.txt').toString().trim().split('\n');
//fill your code

for(let i=0; i<input.length; i++){
    input[i] = input[i].replace(/[\r]+/gm,``);
}
//console.log(input);

let cr = input[0].split(',');
let sq = input[1].split(',');
let tr = input[2].split(',');

class shape{
    constructor(name){
        this.name = name;
    }
    calculatePerimeter(){
        if(this.name == 'Circle')
        {
            return 'Perimeter of a Circle: '
        }
        if(this.name == 'Square')
        {
            return 'Perimeter of a Square: '
        }
        if(this.name == 'Triangle')
        {
            return 'Perimeter of a Triangle: '
        }
    }
    calculateArea(){
        if(this.name == 'Circle')
        {
            return 'Area of a Circle: '
        }
        if(this.name == 'Square')
        {
            return 'Area of a Square: '
        }
        if(this.name == 'Triangle')
        {
            return 'Area of a Triangle: '
        }
    }
};

class circle extends shape{
    constructor(name, radius){
        super(name);
        this.radius = radius;
    }
    displayCircleMeasurments(){
        console.log(super.calculatePerimeter() + 2 * 3.14 * parseInt(this.radius));
        console.log(super.calculateArea() + parseInt(this.radius) * 3.14 * parseInt(this.radius));
    }
};

class square extends shape{
    constructor(name, side){
        super(name);
        this.side = side;
    }
    displaySquareMeasurments(){
        console.log(super.calculatePerimeter() + 4 * parseInt(this.side));
        console.log(super.calculateArea() + parseInt(this.side) * parseInt(this.side));
    }
};

class triangle extends shape{
    constructor(name, side1, side2, side3, base, height){
        super(name);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.base = base;
        this.height = height;
    }
    displayTriangleMeasurments(){
        console.log(super.calculatePerimeter() + (parseInt(this.side1) + parseInt(this.side2) + parseInt(this.side3)));
        let res = parseInt(this.base) * parseInt(this.height);
        console.log(super.calculateArea() + res/2);
    }
};

let areaC = new circle(cr[0],cr[1]);
let areaS = new square(sq[0],sq[1]);
let areaT = new triangle(tr[0],tr[1],tr[2],tr[3],tr[4],tr[5]);

areaC.displayCircleMeasurments();
areaS.displaySquareMeasurments();
areaT.displayTriangleMeasurments();