// ======================================================
// js / _data_.js
// ======================================================

// Helpers
// ======================================================

var info = function(msg) {
  console.log("%c > " + msg, "color:#03a9f4;");
};

// Local Storage
// ======================================================

// To save resources (time & computations), we will try to
// retrieve the data from our local storage (if it exists).
var storedData = localStorage.getItem("data");
var data = storedData ? JSON.parse(storedData) : null;

// Fetch Data
// ======================================================

var url = "https://api.jsonbin.io/b/5c951b129c83133c027b0810";

/**
 * Fetch data from the above url, if we didn't found our
 * in the cookie object.
 */
if (data === null) {
  $.ajax({
    url: url,
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json"
  })
    .done(function(result) {
      // Save data in global variable.
      data = result;
      // Save data in the local storage to save resources
      // on the next reload.
      localStorage.setItem("data", JSON.stringify(result));
      info("SAVED DATA IN LOCAL STORAGE");
      // Execute dynamic actions to update the DOM.
      dynamicActions(data);
    })
    .catch(function() {
      console.error("ERROR IN AJAX REQUEST");
    });
} else {
  info("DATA LOADED FROM LOCAL STORAGE");
  dynamicActions(data);
}

// Arrays of photos
// ====================================================

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
