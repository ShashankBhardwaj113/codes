let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    data = data.split('\n');
    // Fill your code here
    enum Players{
        Hardhik33 = "Hardik Pandya",
        Rishabh47 = "Rishabh Pant",
        Rohit45 = "Rohit Sharma",
        MS7 = "Mahendrasingh Dhoni",
        Virat18 = "Virat Kholi",
        Jasprit59 = "Jasprit Bumrah",
        Lokesh1 = "Lokesh Rahul",
        Prithvi100 = "Prithvi Shaw",
        Shreyas41 ="Shreyas Iyer",
        Rahul19 = "Rahul Dravid"
    };
    if(!Players[data[0]]){
        console.log('No players found');
        return;
    }
    console.log(Players[data[0]]);
})