let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    let line=data.split("\n");
    for(let i=0; i<line.length; i++){
        line[i] = line[i].replace(/[\r]+/gm,``);
    }
    
    //Fill your code here
    interface Shape{
        length: number;
        breadth: number;
        computeArea(): number;
    }
    class Rectangle implements Shape{
        length: number;
        breadth: number;
        constructor(length:number, breadth:number){
            this.length = length;
            this.breadth = breadth;
        }
        computeArea(): number {
        return this.length*this.breadth;
        }
    }
    class Triangle implements Shape{
        length: number;
        breadth: number;
        constructor(length:number, breadth:number){
            this.length = length;
            this.breadth = breadth;
        }
        computeArea(): number {
            return (this.length*this.breadth)/2;
        }
    }
    line[0] = parseInt(line[0]);
    line[1] = parseInt(line[1]);
    let rec = new Rectangle(line[0], line[1]);
    let tri = new Triangle(line[0], line[1]);
    console.log('Rectangle');
    console.log('Length:  ' + rec.length);
    console.log('Breadth:  ' + rec.breadth);
    console.log('Area:  ' + rec.computeArea());
    console.log('Triangle');
    console.log('Height:  ' + tri.length);
    console.log('Base:  ' + tri.breadth);
    console.log('Area:  ' + tri.computeArea());
})