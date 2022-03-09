let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    // Fill your code here
    data = data.split(',');
    for(let i=0; i<data.length; i++){
        data[i] = data[i].replace(/[\r\n]+/gm,``);
    }
    //console.log(data);
    class Product{
        name: string;
        description: string;
        price: number;
        discount: number;
        constructor(name, description, price, discount){
            this.name = name;
            this.description = description;
            this.price = price;
            this.discount = discount;
        }
    }
    class Phone extends Product{
        ram: string;
        rom: string;
        processor: string;
        osVersion: string;
        releasedYear: string
        constructor(name, description, price, discount, ram, rom, processor, osVersion, releasedYear){
            super(name, description, price, discount);
            this.ram = ram;
            this.rom = rom;
            this.processor = processor;
            this.osVersion = osVersion;
            this.releasedYear = releasedYear;
        }
        display():void{
            console.log(`Product Name : ${this.name}
Product Brand : ${this.description}
Product Price : ${this.price.toFixed(2)}
Product Discount : ${this.discount.toFixed(2)}
RAM : ${this.ram}
ROM : ${this.rom}
Processor : ${this.processor}
osVersion : ${this.osVersion}
Released Year : ${this.releasedYear}`)
        }
    }
let phone = new Phone(data[0],data[1],parseFloat(data[2]),parseFloat(data[3]), data[4], data[5], data[6], data[7], data[8]);
phone.display();
})