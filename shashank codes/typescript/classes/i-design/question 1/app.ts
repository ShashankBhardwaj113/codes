let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    // Fill your code here
    data = data.split(',');
    for(let i=0; i<data.length; i++){
        data[i] = data[i].replace(/[\r\n]+/gm,``);
    }
    
    class Product{
        name: string;
        brand: string;
        price: number;
        discount: number;
        finalPrice: number;
        constructor(name, brand, price, discount){
            this.name = name;
            this.brand = brand;
            this.price = price;
            this.discount = discount;
        }
        calculatePrice():void{
            this.finalPrice = this.price - (this.price * this.discount)/100;
        }
        display():void{
            console.log('Product Name : ' + this.name);
            console.log('Product Brand : ' + this.brand);
            console.log('Product Price : ' + this.price.toFixed(2));
            console.log('Product Discount : ' + this.discount.toFixed(2));
            console.log('Total Price : ' + this.finalPrice.toFixed(2));
        }
    }
    let prod = new Product(data[0], data[1], parseFloat(data[2]), parseFloat(data[3]));
    prod.calculatePrice();
    prod.display();
})