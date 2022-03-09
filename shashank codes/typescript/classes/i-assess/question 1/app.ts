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
        finalPrice: number;
        constructor(name, description, price, discount){
            this.name = name;
            this.description = description;
            this.price = price;
            this.discount = discount;
        }
        claculatePrice():void{
            this.finalPrice = this.price - (this.price*this.discount)/100;
        }
    }
    class Phone extends Product{
        ram: string;
        rom: string;
        processor: string;
        osVersion: string;
        releasedYear: string;
        purchasedYear: string;
        constructor(name, description, price, discount, ram, rom, processor, osVersion, releasedYear, purchasedYear){
            super(name, description, price, discount);
            this.ram = ram;
            this.rom = rom;
            this.processor = processor;
            this.osVersion = osVersion;
            this.releasedYear = releasedYear;
            this.purchasedYear = purchasedYear;
        }
        claculatePrice(): void{
            super.claculatePrice();
            if(parseInt(this.releasedYear) < parseInt(this.purchasedYear)){
                this.finalPrice = this.finalPrice - 1000;
            }
        }
        display():void{
            console.log(`Product Name : ${this.name}
Product Brand : ${this.description}
Product Price : ${this.price.toFixed(2)}
Product Discount : ${this.discount.toFixed(2)}
Total Price : ${this.finalPrice.toFixed(2)}
RAM : ${this.ram}
ROM : ${this.rom}
Processor : ${this.processor}
osVersion : ${this.osVersion}
Released Year : ${this.releasedYear}
Purchased Year : ${this.purchasedYear}`)
        }
    }

    let prod = new Phone(data[0], data[1], parseFloat(data[2]), parseFloat(data[3]), data[4], data[5], data[6], data[7], data[8], data[9]);
    prod.claculatePrice();
    prod.display();
})