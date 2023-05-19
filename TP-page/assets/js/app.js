//validacion con jquery.validation

// funcion que impide el envio del formulario, solo para usar en desarrollo
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
        required: "Campo obligatorio, ingresa tu numero de telefono",
        number: "Debe ser caracteres numericos",
        minlength: "Minimo 10 numeros",
      },

      contacto: {
        required: "Seleccione una opcion",
      },

      select: {
        required: "seleccione una opcion",
      },

      texto: {
        minlength: "Debe tener un minimo de 20 caracteres",
      },

      acept: {
        required: "Acepte los terminos y condiciones para continuar",
      },
    },
    errorElement: "spa",

    //hace foco en el campo invalido
    focusInvalid: true,

    //funcion de jquery validation que se ejecuta cuando se envia el form
    submitHandler: function(form) {
      alert("Formulario enviado con exito")
    }
  });

  /* funcion jquery que permite la seleccion solo de un check */
  $(".form-check").click(function () {
    //cuando se selecciona un check ,prop("checked,false") deselecciona los demas
    $(".form-check").not(this).prop("checked", false);
  });
});
