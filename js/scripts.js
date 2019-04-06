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
    // function3()...
    // function4()...
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

var createArticles =function() {
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
