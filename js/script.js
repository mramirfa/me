var textElements = document.querySelectorAll("#acs");
var displayedImage = document.querySelector("#view");
var main = document.querySelector(".view-qrcode");
var close = document.querySelector("#close");

textElements.forEach(function (textElement) {
  textElement.addEventListener("click", function () {
    if (textElement.hasAttribute("data-src")) {
      displayedImage.src = textElement.getAttribute("data-src");
      main.style.display = "flex";
    }
  });
});

close.addEventListener("click", function () {
  main.style.display = "none";
});
