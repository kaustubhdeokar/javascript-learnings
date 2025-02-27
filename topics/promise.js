cart = ["one", "two", "three", "four"];
createCheckoutCart(cart)
  .then(function (order) {
    return order;
  })
  .then(function (order) {
    return createPayment();
  })
  .catch(function (err) {
    console.log(err);
  });

function createCheckoutCart(cart) {
  return new Promise(function (resolve, reject) {
    console.log("creating checkout cart...");
    setTimeout(function () {
      if (cart.length > 0) {
        order = { id: 1, cart: cart };
        console.log("Checkout cart created");
        resolve(order);
      } else {
        reject("No items in cart");
      }
    }, 2000);

  });
}

function createPayment(){
    console.log("Creating payment...");
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Payment created");
            resolve();
        }, 1000);
    });
}
