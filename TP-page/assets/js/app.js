//validación con jquery.validation

// función que impide el envió del formulario, solo para usar en desarrollo
// jQuery.validator.setDefaults({
//   debug: true,
//   success: "valid",
// });

$(document).ready(function () {
// se agrega nueva propiedad llamada noNumbes para las reglas
$.validator.addMethod("noNumbers", function(value, element) {
    return this.optional(element) || !/\d/.test(value);
}, "No se permiten números en este campo.");
    
  // funcion de jquery.validation
  $("#contact").validate({
    errorLabelContainer: "#errorList",
    errorClass: "error-list-item",
    wrapper: "li",
    highlight: function (element) {
      $(element).addClass("invalid-input");
    },
    unhighlight: function (element) {
      $(element).removeClass("invalid-input");
    },


    //reglas:
    rules: {
      nombre: {
        required: true,
        minlength: 3,
        noNumbers: true,
      },

      apellido: {
        required: true,
        minlength: 3,
        noNumbers: true,
      },

      email: {
        required: true,
        email: true,
      },
      //?
      tel: {
        required: true,
        number: true,
        minlength: 10,
      },

      contacto: {
        required: true,
      },

      select: {
        required: true,
      },

      texto: {
        minlength: 20,
      },

      acept: {
        required: true,
      },
    },
    //mensajes personalizados
    messages: {
      nombre: {
        required: "campo obligatorio, ingresa tu nombre",
        minlength: "El nombre debe contener mas de 3 caracteres",
        noNumbers: "No se permiten números en este campo, ingresa tu nombre",
      },

      apellido: {
        required: "campo obligatorio, ingresa tu apellido",
        minlength: "El nombre debe contener mas de 3 caracteres",
        noNumbers: "No se permiten números en este campo. ingresa tu apellido",
      },

      email: {
        required: "Campo obligatorio, ingresa tu email",
        email: "Debe tener un formato del tipo nombre@email.com",
       
      },
      //?
      tel: {
        required: "Campo obligatorio, ingresa tu numero de teléfono",
        number: "Debe ser caracteres numéricos, ingresa tu numero de teléfono",
        minlength: "Mínimo 10 números, ingresa tu numero de teléfono",
      },

      contacto: {
        required: "Seleccione una opción de contacto",
      },

      select: {
        required: "seleccione un motivo de contacto",
      },

      texto: {
        minlength: "Debe tener un mínimo de 20 caracteres",
      },

      acept: {
        required: "Acepte los términos y condiciones para continuar",
      },
    },
    errorElement: "spa",

    //hace foco en el campo invalido
    focusInvalid: true,

    //función de jquery validation que se ejecuta cuando se envía el form
    submitHandler: function(form) {

      //se obtiene el valor del atributo 'action' del formulario
      var actionUrl = $(form).attr('action');

      // Realizar la acción de envío del formulario
      window.location.href = actionUrl;

      //Se muestra mensaje de envío con éxito
      $('#mensaje').show();
    }
  });

  /* función jquery que permite la selección solo de un check */
  $(".form-check").click(function () {
    //cuando se selecciona un check ,prop("checked,false") se deselecciona los demás
    $(".form-check").not(this).prop("checked", false);
  });
});




