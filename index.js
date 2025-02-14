// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : !important > id > classe > baliseHtml

const sidebar = document.querySelector(".sidebar");
const btn = document.getElementById("btn");
const content = document.querySelector(".content");

btn.onclick = () => {
  // Apparition/disparition sidebar:
  sidebar.classList.toggle("sidebar--deployed");
  // Transformation du bouton (burger/croix):
  btn.classList.toggle("open");
  // Opacity du fond quand on ouvre la sidebar:
  content.classList.toggle("opacity");
};

// Click sur le fond pour rentrer la sidebar:
content.addEventListener("click", () => {
  sidebar.classList.remove("sidebar--deployed");
  btn.classList.remove("open");
  content.classList.remove("opacity");
});
