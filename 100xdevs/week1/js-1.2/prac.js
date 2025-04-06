
function counter(){
    for(let i=1;i<=5;i++){
        setTimeout(()=> console.log(i), i*1000);
    }
}

function varCounter(){
    for(var i=1;i<=5;i++){
        function invokeCounter(x){
            setTimeout(()=>console.log(x), x*1000);
        }
        invokeCounter(i);
    }
}

counter();
varCounter();

