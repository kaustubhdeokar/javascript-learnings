const fs = require("fs");

// first the entire code inside the main prac.js is executed and then the fs.read file is executed.
// hence the code is not executed line by line. and randomly jumps here and there.

/* without promises
fs.readFile('a.txt','utf-8', function(err, data){
    console.log(data);
})

let a = 100;
for(var i=0;i<10000000;i++){
    a+=i;
}
console.log(a);

Simple promise

    let p = new Promise(function(resolve, reject){
        let b = 100;
        for(var i=0;i<1002;i++){
            b+=i;
        }
        if(b%2==0) resolve("ok");
        else reject("not ok");
    });

    function printData(data){
        console.log("data is:", data);
    }
    p.then(printData);

*/

function readFile() {
    return new Promise(function (printFileData) {
    setTimeout(function(){
        fs.readFile("a.txt", "utf-8", function (err, data) {
            printFileData(data);
        })
    },3000);
    });
}


async function caller(){
    var fileFunc = await readFile();
    console.log(fileFunc);
    for(let i=0;i<10;i++){
        console.log(i);
    }
}

caller();
console.log("after caller.")

function readFile2(){
    setTimeout(function(){
        console.log("read file2");
    },3000);
}

async function caller2(){
    var fileFunc2 = await readFile2();
    
}


