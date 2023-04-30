// array con todos los elementos del formulario //
// var inputs = document.getElementsByClassName('form_input');

//se recorre el array//
// desde el elemento 0, chequea la cantidad de elementos, contador acumula//
//keyup: es cuando se suelta una tecla, evalua que el input este lleno//
// for(var i=0; i < inputs.length; i++ ){
//     inputs[i].addEventListener('keyup', function(){ 
//         if (this.value.length>=1) {
//             this.nextElementSibling.classList.add('fijar')
//         }else {
//             this.nextElementSibling.classList.remove('fijar')
//         }
//     });
// }

/**
 * script de botones, pagina destiny.html
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

/**------------------------------------------------------------------ */
// funcion que impide el envio del formulario, solo para usar en desarrollo
// jQuery.validator.setDefaults({
//   debug: true,
//   success: "valid",
// });


// validacion del formulario con jquery.validation
$(document).ready(function() {$("#contact").validate({

    //reglas:
    rules:{
        nombre:{
            required:true,
            minlength: 3,
        },

        apellido:{
            required:true,
            minlength: 3,
        },

        email:{
            required:true,
            email: true,
        },
        //? 
        tel:{
            required:true,
            number:true,
            minlength: 10
        },

        contacto:{
            required:true,
        },

        select:{
            required:true,
        },

        // texto:{
        //     minlength:20
        // },

        acept:{
            required:true
        }
    },
    //mensajes personalizados
    messages:{

        nombre:{
            required:'campo obligatorio',
            minlength: 'El nombre debe contener mas de 3 caracteres'
        },

        apellido:{
            required:'campo obligatorio',
            minlength: 'El nombre debe contener mas de 3 caracteres'
        },

        email:{
            required:'Campo obligatorio',
            email: 'Debe tener un formato del tipo nombre@email.com',
        },
        //? 
        tel:{
            required:'Campo obligatorio',
            number:'Debe ser caracteres numericos',
            minlength: 'Minimo 10 numeros'
        },

        contacto:{
            required:'Seleccione uno',
        },

        select:{
            required:'seleccione uno',
        },

        // texto:{
        //     minlength:'Debe tener un minimo de 20 caracteres'
        // },

        acept:{
            required:'Requerido, Acepte los terminos y condiciones para continuar'
        },

        },
        //hace foco en el campo invalido
    focusInvalid: true,
    //funcion de jquery validation que se ejecuta cuando se envia el form
    submitHandler: function(form) {
      // Aquí puedes agregar tu código para enviar el formulario
      alert("Formulario enviado con exito")
    }
    });
});





//
/* funcion jquery que permite la seleccion solo de un check */
$(document).ready(function () {
  $(".form-check").click(function () {
    //cuando se selecciona un check ,prop("checked,false") deselecciona los demas
    $(".form-check").not(this).prop("checked", false);
  });
});