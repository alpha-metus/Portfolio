// Toggle Menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Typing Effect
const phrases = ["Brand Designer", "UI/UX", "@NOON"];
let currentPhrase = 0;
let currentLetter = 0;
let deleting = false;
const typingSpeed = 200;
const deletingSpeed = 100;
const dynamicText = document.getElementById("dynamic-text");
dynamicText.style.fontSize = "25px"; // Ensure this matches your intended font size

function type() {
  let currentText = phrases[currentPhrase];
  if (!deleting) {
    dynamicText.textContent = currentText.substring(0, currentLetter + 1);
    currentLetter++;
    if (currentLetter === currentText.length) {
      deleting = true;
      setTimeout(type, 2000); // Wait a bit before start deleting
    } else {
      setTimeout(type, typingSpeed);
    }
  } else {
    dynamicText.textContent = currentText.substring(0, currentLetter - 1);
    currentLetter--;
    if (currentLetter === 0) {
      deleting = false;
      currentPhrase = (currentPhrase + 1) % phrases.length; // Move to the next phrase
      setTimeout(type, deletingSpeed);
    } else {
      setTimeout(type, deletingSpeed);
    }
  }
}

// Start typing effect on page load
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(type, typingSpeed);
});
