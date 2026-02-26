// 1. Find the button and the div
const button = document.getElementById("magic-button");
const box = document.getElementById("message-box");

// 2. Listen for a click on the button
button.addEventListener("click", function() {
  // 3. When clicked, run this function:
  changeMessage();
});

// 4. Your magic function
function changeMessage() {
  box.textContent = "🎉 You clicked! I have been changed by JavaScript!";
  box.classList.add("success-box");
}
