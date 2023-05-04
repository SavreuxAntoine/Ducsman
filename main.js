let requestURL = "data.json"; // Url du fichier json
let request = new XMLHttpRequest(); // Nouvelle XMLHttpRequest
request.open("GET", requestURL); // On prépare la request
request.responseType = "json";
request.send(); // On envoie la request

// Le container qui va contenir la liste des articles
container = document.querySelector(".article-preview");

// Notre liste des articles
listeArticle = "";

// La fonction article génére un article seulement
function article(image, price, composition) {
  return `<div class="article-preview-grid">
      <div class="container_info">
        <span>${composition}</span>
      </div>
      <img class="image" src="${image}" alt="article" />
      <span class="container_price">${price}</span>
    </div>`;
}
// Après l'envoie de la request
request.onload = function () {
  // On stocke les données reçues
  let data = request.response;

  // On parcour les éléments du tableau
  for (i = 0; i < data.length; i++) {
    // On concaténe un article sur la liste
    listeArticle = listeArticle + article(data[i].image, data[i].price, data[i].composition);
  }

  // On inject le html dans le container
  container.innerHTML = listeArticle;
};
