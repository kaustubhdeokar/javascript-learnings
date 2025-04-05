function mainfunc(cb1){
    console.log("main function executed");
    cb1();
    console.log("cb function executed");
}

function subfunc(){
    console.log("executing sub func");
}

mainfunc(subfunc);
