// chaiaurcode.js

const progress = document.querySelector(".progress");

window.addEventListener("scroll", () => {
  // total scrollable height
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  
  // how much the user has scrolled
  const scrollTop = document.documentElement.scrollTop;

  // percentage
  const scrollPercent = (scrollTop / scrollHeight) * 100;

  // update width
  progress.style.width = scrollPercent + "%";
});