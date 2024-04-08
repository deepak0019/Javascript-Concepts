function outer(a) {
  function inner() {
    console.log(a, b);
  }
  //   var b = 10;
  //if i use let here

  let b = 10;
  //No change
  return inner;
}

// var x = outer();
// if I input a parameter here in outer what will happen--> It prints a and b both because a(the parameter) will act as in outer environment

var x = outer("Hello");

x();

//If this Outer function is nested inside another Outer then also inner has access to Outer environment

function outest() {
  var c = 10;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }

    let a = 30;
    return inner;
  }
  return outer;
}

//If I use a conflicting variable here
let a = 100; //new varible in gloabal Scope 
var c = 50;
// --> Then it will print a = 30 only just like previous output Because when it is executing it has acces to its lexical environment so it has reference to a = 30


var o1 = outest()("Namaste");
o1();
