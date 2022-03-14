let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    // Fill your code here
    data = data.split(',');
    for(let i=0; i<data.length; i++){
        data[i] = data[i].replace(/[\r\n]+/gm,``);
    }
    //console.log(data);

    abstract class taxCalculator{
        tax: number;
        constructor(tax){
            this.tax = tax;
        }
        calculateTax(): void{
        }
    }
    class Product extends taxCalculator{
        name: string;
        brand: string;
        price: number;
        
        constructor(name, brand, price, tax){
            super(tax);
            this.name = name;
            this.brand = brand;
            this.price = price;
        }
        
        calculateTax(): void{
            let total = this.price + (this.price*this.tax)/100;
            this.price = total;
        }

        display(): void{
            console.log(`Total price of ${this.brand} ${this.name} is ${this.price}`);
        }
    }
    let prod = new Product(data[1], data[0], parseInt(data[2]), parseInt(data[3]));
    prod.calculateTax();
    prod.display();
})
