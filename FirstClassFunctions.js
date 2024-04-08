a();

// b(); // If I use here then it will act as typical variable behave in hoisting
//it is giving error as b is not a function

//functional Statement or declaration
function a() {
  console.log("a called");
}

//functional expression
var b = function () {
  console.log("b called");
};

var c = function xyz() {
  //   console.log("c called");
  console.log(xyz);

  //   console.log(xyz());
};

c();
// console.log(c());

b();
//it works here correct

//Anonymous function --> Used where function is used as value
// function(){

// }

var f1 = function (param1) {
  return function t1() {
    console.log("First class funtion ability");
  };
};

console.log(f1());
