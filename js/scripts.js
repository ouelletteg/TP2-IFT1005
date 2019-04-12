// ======================================================
// js / scripts.js
// ======================================================

// When document is ready
// ======================================================

/**
 * Execute all my functions.
 *
 * @param {*} data : Your aunt's data.
 */
var dynamicActions = function(data) {
  $(document).ready(function() {
    updateNavbar();
    updateDocumentTitle();
    updateArticles();
    createRecipes();
    updateRecipes();
    // etc.
  });
};

// Arrays of photos

var articlesPhotos = [
  ["assets/trophé.png", "Image by Quimono from pixabay"],
  ["assets/VEGAN.png", "Image by Gellinger from pixabay"],
  ["assets/Passion.jpg", "Image by Rawpixel from  pixabay"]
];

var recettesPhotos = [
  ["assets/lasagna.jpg", "Image by RitaE from Pixabay"],
  ["assets/tofu-tao.jpg", "Image by Frank Zhang from Pixabay"],
  ["assets/burger-vege.jpg", "Image by Julia Nowak from Pixabay"],
  ["assets/mac-and-cheese.jpg", "Photo by Hermes Rivera on Unsplash"],
  ["assets/saute-legumes.jpg", "Photo by Clem Onojeghuo on Unsplash"],
  ["assets/salade-fruits.jpg", "Image by silviarita from Pixabay"],
  ["assets/soupe-tofu.jpg", "Image by jyleen21 from Pixabay"],
  ["assets/saumon-riz.jpg", "Image by susumu kawakita from Pixabay"],
  ["assets/quinoa-galettes2.jpg", "Photo by Jessica Castro on Unsplash"],
  ["assets/poutine.jpg", "Image by 0x010C on Wikipedia Commons."],
  ["assets/tofu-beurre.jpg", "Image by Devanath from Pixabay"],
  ["assets/boulettes_energie.jpg", "Image by Karolina Grabowska from Pixabay"]
];

// My functions
// ======================================================

/**
 * Update the document's title by using the provided data
 * from my aunt.
 */
var updateDocumentTitle = function() {
  document.title = data.documentTitle;
};

var updateNavbar = function() {
  $("nav ul").addClass("navbar-nav");
  $("nav li").addClass("nav-item");
  $("nav a").addClass("nav-link");
};

var updateArticles = function() {
  $("article").addClass("carousel-item");
  $("article > div").addClass("row");
  $("article > div > div").addClass("col d-none d-md-block");
  $("article img").addClass("d-block w-100");
  Array.from($("article h1")).forEach(function(titre, i) {
    titre.innerHTML = data.articles[i].title;
  });
  Array.from($("article h3")).forEach(function(sousTitre, i) {
    sousTitre.innerHTML = data.articles[i].subtitle;
  });
  Array.from($("article p")).forEach(function(texte, i) {
    texte.innerHTML = data.articles[i].content;
  });
};

var createRecipes = function() {
  /*Création du HTML pour le nombre de recettes présentes dans le JSON*/
  //Éventuellement adapter pour mettre un maximum de recettes affichées par pages.
  var cards = "";
  for (var i = 0; i < data.recipes.length; i++) {
    cards +=
      '<div><div class="card"><img><div><h5></h5><p></p></div></div></div>';
  }
  $("#recettes > div > div").append(cards);
};

var updateRecipes = function() {
  /*Mise des classes Bootstrap et des données JSON*/
  $("#recettes > div").addClass("container");
  $("#recettes > div > div").addClass("row");
  $("#recettes > div > div > div").addClass("col-6 col-md-4 col-lg-3");
  $(".card img").addClass("card-img-top");
  $(".card div").addClass("card-body");
  $(".card h5").addClass("card-title");
  $(".card p").addClass("card-text");
  Array.from($("#recettes .card img")).forEach(function(image, i) {
    if (data.recipes[i].imgUrl == "") {
      image.src = recettesPhotos[i][0];
    } else {
      image.src = data.recipes[i].imgUrl;
    }
    image.alt = data.recipes[i].description;
    if (data.recipes[i].imgUrl == "") {
      image.title = recettesPhotos[i][1];
    }
  });
  Array.from($(".card-title")).forEach(function(description, i) {
    description.innerHTML = data.recipes[i].description;
  });
  Array.from($("#recettes .card p")).forEach(function(prix, i) {
    prix.innerHTML = data.recipes[i].price;
  });
};

/*Sortir les informations dans data pour
les mettre dans les métadonnées de index.html
(Non fonctionnel)
var auteur = data.firstName + " " + data.lastName;*/
