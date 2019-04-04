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
  Array.from($(".carousel-item h5")).forEach(function(titre, i) {
    titre.innerHTML = data.articles[i].title;
  });
};
