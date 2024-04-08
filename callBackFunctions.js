setTimeout(function () {
  console.log("Timer");
}, 3000);

function x(y) {
  console.log("X called");
  y();
}

x(function y() {
  console.log("y called");
});
