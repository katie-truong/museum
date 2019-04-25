let second = document.getElementById("second");
let footer = document.getElementById("footer");
let readmorebutton = document.getElementById("laptop-tablet");

let restOfFirst = document.getElementById("rest-of-first");
let sketch = document.getElementById("sketch");
let mobileReadButton = document.getElementById("mobile");

function readMore() {
  console.log('Hi')
  second.classList.add("second-reveal");
  footer.classList.add("footer-reveal");
  readmorebutton.classList.add("laptop-tablet-hide");

  // for mobile
  restOfFirst.classList.add("show-rest");
  sketch.classList.add("show-sketch");
  mobileReadButton.classList.add("hide-button");
}

function readLess() {
  second.classList.remove("second-reveal");
  footer.classList.remove("footer-reveal");
  readmorebutton.classList.remove("laptop-tablet-hide");
  restOfFirst.classList.remove("show-rest");
  sketch.classList.remove("show-sketch");
  mobileReadButton.classList.remove("hide-button");
}
