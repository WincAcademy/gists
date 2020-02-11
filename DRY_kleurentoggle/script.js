// const changeBkgHome = function() {
//   document.body.style.backgroundColor = "lightgrey";
//   toggleMenu();
// };

// const changeBkgRed = function() {
//   document.body.style.backgroundColor = "red";
//   toggleMenu();
// };

// function changeBkgOrange() {
//   document.body.style.backgroundColor = "orange";
//   toggleMenu();
// }
// function changeBkgPurple() {
//   document.body.style.backgroundColor = "purple";
//   toggleMenu();
// }
// function changeBkgGreen() {
//   document.body.style.backgroundColor = "green";
//   toggleMenu();
// }

// const toggleMenu = function() {};

const toggleMenu = function() {
  let ele = document.getElementById("toggleText");
  if (ele.style.display == "block") {
    ele.style.display = "none";
  } else {
    ele.style.display = "block";
  }
};

const changeBackgroundColor = function(event) {
  console.log("ik ben het event target:", event.target.name);
  const clickedColor = event.target.name;
  document.body.style.backgroundColor = clickedColor;
  toggleMenu();
};

document.addEventListener("DOMContentLoaded", function() {
  console.log("content loaded... adding event listeners");
  const hamburger = document.getElementById("hamburger");

  hamburger.addEventListener("click", toggleMenu);
  const colorButtons = document.querySelectorAll("button");
  console.log(colorButtons);

  colorButtons.forEach(function(colorButton) {
    colorButton.addEventListener("click", changeBackgroundColor);
  });
});

// const colorButtons = document.querySelectorAll("button");
// colorButtons.forEach(function(colorButton) {
//   colorButton.addEventListener("click", changeBackgroundColor);
// });

// const changeBackgroundColor = function(event) {
//   const color = event.target.className;
//   console.log("hooi", color);
//   document.body.style.backgroundColor = color;
// };
