arr = [1, 2, 3, 4, 5, 6, 7, 8];

//instead of writing multiple functions,
//  we can use a single function and pass a function as an argument

function multiplyBy2(arr) {
  output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(arr[i] * 2);
  }
  return output;
}

function multiplyBy4(arr) {
  output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(arr[i] * 4);
  }
  return output;
}


function multiply(arr, func) {
  output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(func(arr[i]));
  }
  return output;
}

console.log(multiply(arr, mul2));
console.log(multiply(arr, mul4));

const mul2 = function(num){
  return num*2;
}

const mul4 = function(num){
  return num*4;
}