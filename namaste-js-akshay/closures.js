function execute() {
  for (var x = 1; x <= 5; x++) {
    function invoke(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    invoke(x);
  }
}

// if we use x instead of i, we will get 5..5..5..5..5 after each second.
// closures store the reference of the object, and not it's value.

function counter() {
  let count = 0;
  function increment() {
    count += 1;
    console.log(count);
  }
  return increment;
}
// var counter1 = counter();
// counter1();
// counter();

execute();
