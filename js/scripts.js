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
    updateDocumentTitle();
    createArticles();
    createRecipes();
    // function4()...
    // etc.
  });
};

// Arrays of photos


var articlesPhotos = [
['assets/trophé.png','Image by Quimono from pixabay'],
['assets/VEGAN.png','Image by Gellinger from pixabay'],
['assets/Passion.jpg','Image by Rawpixel from  pixabay']
]
var recettesPhotos = [
  ['assets/lasagna.jpg', 'Image by RitaE from Pixabay'],
  ['assets/tofu-tao.jpg', 'Image by Frank Zhang from Pixabay'],
  ['assets/burger-vege.jpg','Image by Julia Nowak from Pixabay'],
  ['assets/mac-and-cheese.jpg', 'Photo by Hermes Rivera on Unsplash'],
  ['assets/saute-legumes.jpg', 'Photo by Clem Onojeghuo on Unsplash'],
  ['assets/salade-fruits.jpg', 'Image by silviarita from Pixabay'],
  ['assets/soupe-tofu.jpg', 'Image by jyleen21 from Pixabay'],
  ['assets/saumon-riz.jpg', 'Image by susumu kawakita from Pixabay'],
  ['assets/quinoa-croquettes.jpg', 'Photo by ORNELLA BINNI on Unsplash'],
  ['assets/poutine.jpg', 'Image by 0x010C on Wikipedia Commons.'],
  ['assets/tofu-beurre.jpg', 'Image by Devanath from Pixabay'],
  ['assets/boulettes_energie.jpg', 'Image by Karolina Grabowska from Pixabay']
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

var createArticles = function() {
  Array.from($(".article h1")).forEach(function(titre, i) {
    titre.innerHTML = data.articles[i].title;
  });
  Array.from($(".article h3")).forEach(function(sousTitre, i) {
    sousTitre.innerHTML = data.articles[i].subtitle;
  });
  Array.from($(".article p")).forEach(function(texte, i) {
    texte.innerHTML = data.articles[i].content;
  });
};
//moi

    
    //

var createRecipes = function() {
  Array.from($("#recettes .card img")).forEach(function(image, i) {
    image.src = recettesPhotos[i][0];
    image.alt = data.recipes[i].description;
    image.title = recettesPhotos[i][1];
  });
  Array.from($(".card-title")).forEach(function(description, i) {
    description.innerHTML = data.recipes[i].description;
  });
  Array.from($("#recettes .card p")).forEach(function(prix, i) {
    prix.innerHTML = data.recipes[i].price;
  });



}