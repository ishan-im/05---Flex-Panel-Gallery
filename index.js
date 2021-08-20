const gallery = document.querySelectorAll(".gallery");

function toggleOpen(){
  this.classList.toggle("open");
}

function toggleAnimation(e){
    
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
      }

}

gallery.forEach(gallery => gallery.addEventListener("click",toggleOpen));
gallery.forEach(gallery => gallery.addEventListener("transitionend",toggleAnimation));