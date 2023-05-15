//validacion con jquery.validation 

// funcion que impide el envio del formulario, solo para usar en desarrollo
// jQuery.validator.setDefaults({
//   debug: true,
//   success: "valid",
// });


$(document).ready(function() {
// funcion de jquery.validation
    $("#contact").validate({
        // errorPlacement: function(error, element) {
        //     error.appendTo("#error-messages");
        //   },
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

        texto:{
            minlength:20
        },

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

        texto:{
            minlength:'Debe tener un minimo de 20 caracteres'
        },

        acept:{
            required:'Requerido, Acepte los terminos y condiciones para continuar'
        },

        },
        errorElement: "spa",

        //hace foco en el campo invalido
    focusInvalid: true,
    //funcion de jquery validation que se ejecuta cuando se envia el form
    // submitHandler: function(form) {
    //   // agregar código para enviar el formulario
    //   alert("Formulario enviado con exito")
    // }
    });
    
    /* funcion jquery que permite la seleccion solo de un check */
    $(".form-check").click(function () {
        //cuando se selecciona un check ,prop("checked,false") deselecciona los demas
        $(".form-check").not(this).prop("checked", false);
      });
});





