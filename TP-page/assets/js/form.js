// array con todos los elementos del formulario //
var inputs = document.getElementsByClassName('form_input');

//se recorre el array//
// desde el elemento 0, chequea la cantidad de elementos, contador acumula//
//keyup: es cuando se suelta una tecla, evalua que el input este lleno//
for(var i=0; i < inputs.length; i++ ){
    inputs[i].addEventListener('keyup', function(){ 
        if (this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar')
        }else {
            this.nextElementSibling.classList.remove('fijar')
        }
    });
}

/**
 * escript de botones, pagina destiny.html
 */

 const cards = document.querySelector(".cards");
 const prevButton = document.querySelector(".prev-button");
 const nextButton = document.querySelector(".next-button");
 let position = 0;
 
 nextButton.addEventListener("click", () => {
   if (position > -(cards.scrollWidth - cards.offsetWidth)) {
     position -= 1000;
     cards.style.transform = `translateX(${position}px)`;
   }
 });
 
 prevButton.addEventListener("click", () => {
   if (position < 0) {
     position += 1000;
     cards.style.transform = `translateX(${position}px)`;
   }
 });