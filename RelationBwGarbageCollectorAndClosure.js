//If it's a normal function then memory will be deallocated for a but as it is used with the closure then memory is not deallcoated
//that's why closure consumes more memory

function a() {
  var x = 0;

  return function b() {
    console.log(x);
  };
}

var y = a();

y();
