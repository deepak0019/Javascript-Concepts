const GITHUB_API = "https://api.github.com/users/deepak0019";

const user = fetch(GITHUB_API);

user.then(function () {
  console.log(user);
});

const cart = ["shoes", "pants", "kurta"];

//API
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function () {
    return showOrderSummary(orderId);
  })
  .then(function () {
    return updateWalletBalance(paymentInfo);
  });

//Using arrow function

createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((paymentInfo) => updateWalletBalance(paymentInfo));
