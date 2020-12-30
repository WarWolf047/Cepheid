const menuBtn = document.querySelector('.menu-btn');
//let menuOpen = false;
/*menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
})*/
const drpdown=document.querySelector('.dropdown_menu');
const body=document.querySelector('body');
menuBtn.addEventListener('click',() => {
    menuBtn.classList.toggle('open');
    drpdown.classList.toggle('slide');
})

/*window.onscroll= () =>{
    var x = document.getElementById("ok");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}*/

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("ok").style.opacity = 1;
    document.getElementById("ok").style.transition= "0.5s";
  } else {
    document.getElementById("ok").style.opacity=0;
    document.getElementById("ok").style.transition ="0.5s";
    document.getElementById("ok").style.transitionDelay= "0.5s";
  }
  prevScrollpos = currentScrollPos;
}