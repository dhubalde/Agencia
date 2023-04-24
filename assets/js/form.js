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
