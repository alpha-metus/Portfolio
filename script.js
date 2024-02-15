document.addEventListener("DOMContentLoaded", function() {
  // Start typing effect after page is fully loaded
  setTimeout(type, typingSpeed);
});

const phrases = ["Graphic Designer", "UI/UX", "@Kreativan Technologies"];
let currentPhrase = 0;
let currentLetter = 0;
let deleting = false;
const typingSpeed = 200; // Adjust for typing speed
const deletingSpeed = 100; // Adjust for deleting speed
const dynamicText = document.getElementById("dynamic-text");
const dynamicText = document.getElementById("dynamic-text");
dynamicText.style.fontSize = "25px";

function type() {
  let currentText = phrases[currentPhrase];
  if (!deleting) {
    dynamicText.textContent = currentText.substring(0, currentLetter + 1);
    currentLetter++;
    if (currentLetter === currentText.length) {
      deleting = true;
      setTimeout(type, 2000); // Delay before starting to delete
    } else {
      setTimeout(type, typingSpeed); // Next letter
    }
  } else {
    dynamicText.textContent = currentText.substring(0, currentLetter - 1);
    currentLetter--;
    if (currentLetter === 0) {
      deleting = false;
      currentPhrase = (currentPhrase + 1) % phrases.length; // Move to the next phrase
      setTimeout(type, 500); // Delay before typing next phrase
    } else {
      setTimeout(type, deletingSpeed); // Delete next letter
    }
  }
}
