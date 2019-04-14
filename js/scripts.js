// ======================================================
// js / scripts.js
// ======================================================

// When document is ready
// ======================================================

/**
 * Execute all my functions.
 *
 * @param {*} data : Your aunt's data. + Some link to photos in arrays.
 */
var dynamicActions = function(data) {
  $(document).ready(function() {
    updateNavbar();
    updateDocumentTitle();
    createArticles();
    updateArticles();
    createRecipes();
    updateRecipes();
    // etc.
  });
};

// My functions
// ======================================================

/**
 * Update the document's title by using the provided data
 * from my aunt.
 */
var updateDocumentTitle = function() {
  document.title = data.documentTitle;
};

/**
 * Adding classes for the navigation bar.
 */
var updateNavbar = function() {
  $("nav ul").addClass("navbar-nav");
  $("nav li").addClass("nav-item");
  $("nav a").addClass("nav-link");
};

/**
 * HTML creation based on the number of articles present in the JSON file (data).
 */
var createArticles = function() {
  var articles = "";
  for (var i = 0; i < data.articles.length; i++) {
    articles +=
      "<article><div><div><img /></div><div><h1></h1><h3></h3><p></p></div></div></article>";
  }
  $("#accueil > div").append(articles);
};

/**
 * Updating the articles
 * ** Adding classes
 * ** Putting content from the JSON file and the photos array in.
 */
var updateArticles = function() {
  $("article").addClass("carousel-item");
  $("article:first").addClass("active");
  $("article > div").addClass("row");
  $("article > div > div").addClass("col d-md-block");
  $("article > div > div:first-child").addClass(" d-none");
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
  Array.from($("article img")).forEach(function(image, i) {
    image.src = articlesPhotos[i][0];
    image.title = articlesPhotos[i][1];
  });
};

/**
 * HTML creation based on the number of recipes present in the JSON file (data).
 */
var createRecipes = function() {
  var cards = "";
  for (var i = 0; i < data.recipes.length; i++) {
    cards +=
      '<div><div class="card"><img><div><h5></h5><p></p></div></div></div>';
  }
  $("#recettes > div > div").append(cards);
};

/**
 * Updating the recipes
 * ** Adding classes
 * ** Putting content from the JSON file and the photos array in.
 */
var updateRecipes = function() {
  $("#recettes > div > div > div").addClass("col-6 col-md-4 col-lg-3");
  $(".card img").addClass("card-img-top");
  $(".card div").addClass("card-body");
  $(".card h5").addClass("card-title");
  $(".card p").addClass("card-text");

  Array.from($("#recettes .card img")).forEach(function(image, i) {
    //if there's no photos in the JSON
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
