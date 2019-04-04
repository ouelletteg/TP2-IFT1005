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
  $(".carousel-item").forEach(function(article, i) {
     var articleHTML = '<img src="assets/placeholder.png" class="d-block w-100" alt="...">';
     articleHTML += '<h1>'+data.articles[i] + '</h1>'
     article.innerHTML
  });
};
