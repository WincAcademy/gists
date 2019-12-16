const button1ClickHandler = () => console.log("button 1 was clicked");
const button2ClickHandler = () => console.log("button 2 was clicked");
const button3ClickHandler = () => console.log("button 3 was clicked");
const anotherClickHandler = () => console.log("yet another click handler");

document.addEventListener("DOMContentLoaded", () => {
  const button2 = document.querySelectorAll("button")[1];
  button2.onclick = button2ClickHandler;
  // button2.onclick = anotherClickHandler; // this will replace any existing onlick handlers

  const button3 = document.querySelectorAll("button")[2];
  button3.addEventListener("click", button3ClickHandler);
  // button3.addEventListener("click", anotherClickHandler); // this will add to any existing onlick handlers
});
