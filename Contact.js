var modal = document.getElementById("myModal"); // Le modal
var header = document.getElementById("header"); // Le header
var footer = document.getElementById("footer"); // Le footer

// Les boutons pour ouvrir le modal
var btn = document.getElementById("btnContact");

// Le bouton close de la modal
var span = document.getElementsByClassName("fermer")[0];

// Ajout d'écoute d'événement pour les boutons d'ouverture de la modal
btn.onclick = function () {
  // On l'affiche
  modal.style.display = "block";
  // On applique un effet de flou
  header.classList.add("blur");
  footer.classList.add("blur");
};

// Gestion de la fermeture du modal en cliquant sur le bouton close
span.onclick = function () {
  modal.style.display = "none";
  header.classList.remove("blur");
  footer.classList.remove("blur");
};

// Gestion de la fermeture de la modal en cliquant à l'extérieur de cette dernière
// Ne fonctionne pas pour le moment
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        header.classList.remove('blur');
        footer.classList.remove('blur');
    }
}

