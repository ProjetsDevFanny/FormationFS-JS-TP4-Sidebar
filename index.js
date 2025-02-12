
// Au clic sur la croix, la sidebar se cache:

closeBtn.addEventListener("click", function() {
  sidebar.style.transform = "translateX(-12rem)";
  closeBtn.style.visibility = "hidden";
  openBtn.style.visibility = "visible";
});


// Au clic sur l'icone "bars", la sidebar apparaît:

openBtn.addEventListener("click", function() {
  sidebar.style.transform = "translateX(0rem)";
  openBtn.style.visibility = "hidden";
  closeBtn.style.visibility = "visible";
});





