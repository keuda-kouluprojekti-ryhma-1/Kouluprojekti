document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll("img[src^='images/']");

  images.forEach(function(image) {
    image.addEventListener("click", function() {
      var src = this.getAttribute("src");
      var enlargedImage = document.querySelector("#isokKuva .suurennuskuva");
      enlargedImage.setAttribute("src", src);
      var enlargedContainer = document.querySelector("#isokKuva");
      enlargedContainer.style.display = "block";
    });
  });

  var closeButton = document.querySelector("#isokKuva .sulje");
  closeButton.addEventListener("click", function() {
    var enlargedContainer = document.querySelector("#isokKuva");
    enlargedContainer.style.display = "none";
  });
});