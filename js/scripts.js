/* Travail pratique #2 pour le cours IFT1005 
 ** Par Bashir Alla(20074355) et Geneviève Ouellette(20141307)
 */

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
var dynamicActions = function (data) {
  $(document).ready(function () {
    updateNavbar();
    updateDocumentTitle();
    createArticles();
    updateArticles();
    createRecipes();
    updateRecipes();
    shakeIncorrectInput();
    showRequiredText();
  });
};

// My functions
// ======================================================

/**
 * Update the document's title by using the provided data
 * from my aunt.
 */
var updateDocumentTitle = function () {
  document.title = data.documentTitle;
};

/**
 * Adding classes for the navigation bar.
 */
var updateNavbar = function () {
  $("nav ul").addClass("navbar-nav");
  $("nav li").addClass("nav-item");
  $("nav a").addClass("nav-link");
};

/**
 * HTML creation based on the number of articles present in the JSON file (data).
 */
var createArticles = function () {
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
var updateArticles = function () {
  $("article").addClass("carousel-item");
  $("article:first").addClass("active");
  $("article > div").addClass("row");
  $("article > div > div").addClass("col d-md-block");
  $("article > div > div:first-child").addClass(" d-none");
  $("article img").addClass("d-block w-100");

  Array.from($("article h1")).forEach(function (titre, i) {
    titre.innerHTML = data.articles[i].title;
  });
  Array.from($("article h3")).forEach(function (sousTitre, i) {
    sousTitre.innerHTML = data.articles[i].subtitle;
  });
  Array.from($("article p")).forEach(function (texte, i) {
    texte.innerHTML = data.articles[i].content;
  });
  Array.from($("article img")).forEach(function (image, i) {
    image.src = articlesPhotos[i][0];
    image.title = articlesPhotos[i][1];
  });
};

/**
 * HTML creation based on the number of recipes present in the JSON file (data).
 */
var createRecipes = function () {
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
var updateRecipes = function () {
  $("#recettes > div > div > div").addClass("col-6 col-md-4 col-lg-3");
  $(".card img").addClass("card-img-top");
  $(".card div").addClass("card-body");
  $(".card h5").addClass("card-title");
  $(".card p").addClass("card-text");

  Array.from($("#recettes .card img")).forEach(function (image, i) {
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
  Array.from($(".card-title")).forEach(function (description, i) {
    description.innerHTML = data.recipes[i].description;
  });
  Array.from($("#recettes .card p")).forEach(function (prix, i) {
    prix.innerHTML = data.recipes[i].price;
  });
};

/* Shake the incorrect input in form to attract attention to it */
var shakeIncorrectInput = function () {
  $(".btn").on('click', function () {
    if ($("#name").val() == '') {
      $("#name").addClass("animated shake")
    }
    if ($("#tel").val() == '') {
      $("#tel").addClass("animated shake")
    }
    if ($("#ville").val() == '') {
      $("#ville").addClass("animated shake")
    }
    if ($("#codPos").val() == '') {
      $("#codPos").addClass("animated shake")
    }
    if ($("#adress").val() == '') {
      $("#adress").addClass("animated shake")
    }
    if ($("#message").val() == '') {
      $("#message").addClass("animated shake")
    }
    $("input[required]").on('animationend', handleAnimationEnd);
  });
};

var handleAnimationEnd = function () {
  $("input[required]").removeClass("animated shake");
  $("input[required]").off('animationend', handleAnimationEnd);
};

var showRequiredText = function () {
  $(".btn").on('click', function () {
    if ($("#name").val() == '') {
      $("#nameerror").html("S'il vous plait, entrez votre nom.");
    } else {
      $("#nameerror").html("");
    }
    if ($("#tel").val() == '') {
      $("#telerror").html("S'il vous plait, entrez votre numéro de téléphone.");
    } else {
      $("#telerror").html("");
    }
    if ($("#ville").val() == '') {
      $("#villeerror").html("S'il vous plait, entrez votre ville.");
    } else {
      $("#villeerror").html("");
    }
    if ($("#codPos").val() == '') {
      $("#codPoserror").html("S'il vous plait, entrez votre code postal.");
    } else {
      $("#codPoserror").html("");
    }
    if ($("#adress").val() == '') {
      $("#adresserror").html("S'il vous plait, entrez votre adresse.");
    } else {
      $("#adresserror").html("");
    }
    if ($("#message").val() == '') {
      $("#messerror").html("Dites moi pourquoi vous souhaitez me contacter.");
    } else {
      $("#messerror").html("");
    }
  });
};

/*Sortir les informations dans data pour
les mettre dans les métadonnées de index.html
(Non fonctionnel)
var auteur = data.firstName + " " + data.lastName;*/