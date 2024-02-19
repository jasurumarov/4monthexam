document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var header = document.getElementById("header");
        if (window.pageYOffset > 0) {
            header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
            header.classList.add("shrink"); // Add the 'shrink' class to shrink the navbar
        } else {
            header.style.boxShadow = "none";
            header.classList.remove("shrink"); // Remove the 'shrink' class to restore the original navbar height
        }
    });
});
  
// BURGER MENU

const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", function () {
    document.body.classList.toggle("menu-opened")
});

// BACKTOP

window.addEventListener('scroll', function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById('backtop');
  
  function toggleBacktop() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 200
    ) {
      backtop.style.bottom = '20px';
    } else {
      backtop.style.bottom = '-60px';
    }
  }

  // DARK MODE 

let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});