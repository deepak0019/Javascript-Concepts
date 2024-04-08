// There is a flow here anybody can access to this count and can increment and decrement counter
/*
var count = 0;
function counter() {
  count++;
  console.log(count);
}

counter();
*/

//If I use closure here then

function counter() {
  var count = 0;

  function increment() {
    count++;

    console.log(count);
  }

  return increment;
}

var counter1 = counter();
counter1();
counter1();

var counter2 = counter();
counter2();

// To Make this code scaleable we can use constructor

function Counter() {
  var count = 0;

  console.log("Using Constructor");
  this.incrementCounter = () => {
    count++;

    console.log(count);
  };

  this.decrementCounter = () => {
    count--;
    console.log(count);
  };
}

var counter1 = new Counter();

counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
