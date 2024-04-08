//using closure to avoid changes in count by some other source

function attachEventListener() {
  let count = 0;

  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button clicked", ++count);
  });
}

attachEventListener();
