  const parallax = document.getElementById("body");
  window.addEventListener("scroll", function(){
      let offset =window.pageYOffset;
      parallax.style.backgroundPositionY = offset
      * -0.2 + "px";
  })