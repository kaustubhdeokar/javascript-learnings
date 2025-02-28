// document.addEventListener('DOMContentLoaded', () => { 
    
//     function closureCounter(){
//       let count = 0;
//       function onClick() {
//         count++;
//         console.log('Button clicked', count);
//       }
//       return onClick;
//     }

//     document.getElementById("clickMe").addEventListener('click', closureCounter());
// });

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Method 1: Regular function with Promise
function doSomething() {
    console.log('doSomething');
    return sleep(5000).then(() => {
        console.log('doSomething done');
    });
}

// Method 2: Async function
async function doSomethingAsync() {
    console.log('doSomething');
    await sleep(5000);
    console.log('doSomething done');
}

// Both will work:
doSomething().then(() => console.log('Finished Method 1'));
// OR
doSomethingAsync().then(() => console.log('Finished Method 2'));


