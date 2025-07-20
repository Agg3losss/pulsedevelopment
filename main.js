// File: js/main.js

// Block F12, right click, etc.
document.addEventListener('keydown', function (e) {
  if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key))) {
    e.preventDefault();
  }
});

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
