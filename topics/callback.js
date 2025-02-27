function orderFood(makePayment){
    console.log('Ordering food');
    makePayment();
    console.log('payment done');
}

function fetchData(callback){
    setTimeout(()=> {
        console.log('in set timeout');
        data = {'name':'john', 'age':30};
        callback(data);
    }, 0);
// will execute at the end
// it will go to the callback queue 
// and then to the call stack
}

function processData(data){
    console.log('Processing Data'+data);
}

fetchData(processData);

orderFood(()=> console.log("making payment"));

// with promises
async function orderFood(){
    console.log('Ordering food');
}

const orderFoodPromise = orderFood();
const makePayment = function () {
    console.log('Making payment');
}
orderFoodPromise.then(()=> makePayment());

function fun1(){
    console.log('fun1');
    function fun2(){
        console.log('fun2');
        function fun3(){
            console.log('fun3');
        }
        fun3();
    }
    fun2();
}

fun1();
