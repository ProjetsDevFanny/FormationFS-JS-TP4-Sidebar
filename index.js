
// Au clic sur l'icone "bars", la sidebar apparaît:

openBtn.addEventListener("click", function () {
  sidebar.style.transform = "translateX(12rem)";
  openBtn.style.visibility = "hidden";
  closeBtn.style.visibility = "visible";
  main.style.opacity = "0.4";
});


// Au clic sur la croix, la sidebar se cache:

closeBtn.addEventListener("click", function () {
  sidebar.style.transform = "translateX(0rem)";
  closeBtn.style.visibility = "hidden";
  openBtn.style.visibility = "visible";
  main.style.opacity = "1";
});

// Au click sur le main, la sidebar se cache

main.addEventListener("click", function() {
  sidebar.style.transform = "translateX(0rem)";
  closeBtn.style.visibility = "hidden";
  openBtn.style.visibility = "visible";
  main.style.opacity = "1";
});


