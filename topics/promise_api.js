// Promise.all - parallel call to all promises.
//  takes an iterable of promises as an input and returns same.
// if all n promises are successful, time taken is maximum of all promises
// if any one promise fail, it returns immediately throwing a failure.

// Promise.allSettled -
// waits for all promises to complete
// returns success or failure of each case.

//Promise.race - p1, p2, p3..result of first executed promise. (pass, fail any)

// Promise.any - wait for first successful promise return.
// if all promises fail it returns aggregate of all failures.

const p1 = new Promise(function (resolve, reject){
    setTimeout(function () {
        resolve("promise 1 success");
    }, 20000);
});

const p2 = new Promise(function (resolve, reject){
    setTimeout(function () {
        reject("promise 2 success");
    }, 10000);
});

const p3 = new Promise(function (resolve, reject){
    setTimeout(function () {
        reject("promise 3 success");
    }, 2000);
});

//waits for all unless the first failure.
Promise.race([p1, p2, p3]).then(function(values){
    console.log(values);
}).catch(function(err){
    console.error(err);
});