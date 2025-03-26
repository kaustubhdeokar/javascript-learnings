p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('resolved promise p1');
    }, 5000);
});

async function countto10(){
    console.log('before count');
    return p1;
}

countto10().then(function(value){
    console.log(value);
});

console.log('after count');

// we see that these are not executed in sequence, hence can be a bit hard to track. The promise framework.
// hence async await is one more to handle this type of scenarios. 
// 2

p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("resolved promise p2");
  }, 8000);
});
  
p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("resolved promise p3");
  }, 4000);
});
  
async function handlePromises() {
  console.log("begin");

  const p2Val = await p2;
  console.log(p2Val);

  console.log("p2 done");

  const p3Val = await p3;
  console.log(p3Val);

  console.log("end");
}
  
  
handlePromises();
  
  // even though the output will be in order, as p2 waits for 8 seconds, p3 waits for 4 second during p2's 8 seconds.
  // hence the output is printed in order but time required is only 8 seconds and not 8+4.

  //3 

  p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("resolved promise p2");
    }, 5000);
  });
  
  p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("resolved promise p3");
    }, 10000);
  });
  
  async function handlePromises() {
    console.log("begin");
  
    const p2Val = await p2;
    console.log(p2Val);
  
    console.log("p2 done");
  
    const p3Val = await p3;
    console.log(p3Val);
  
    console.log("end");
  }
  
  
  handlePromises();
  
  // even though the output will be in order, as p2 waits for 5 seconds, p3 waits for 5 second during p2's 5 seconds.
  // So after p2 promise p3 only waits for 5 seconds more. 
  // hence the output is printed in order but time required is only 8 seconds and not 8+4.