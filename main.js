<!-- main.js -->
document.addEventListener('keydown', e => {
  if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key))) {
    e.preventDefault();
  }
});
document.addEventListener('contextmenu', e => e.preventDefault());
