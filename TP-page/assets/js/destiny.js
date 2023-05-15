  var slides = document.querySelectorAll('.slide');
  var btns = document.querySelectorAll('.btn');
  let currentSlide = 1;

  // Javascript for image slider manual navigation
  var manualNav = function(manual){
    slides.forEach((slide) => {
      slide.classList.remove('active');


        btns.forEach((btn) => {
          btn.classList.remove('active');
        });
      });

      slides[manual].classList.add('active');
      btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    // Javascript for image slider autoplay navigation
    var repeat = function(activeClass){
      let active = document.getElementsByClassName('active');
      let i = 1;

      var repeater = () => {
        setTimeout(function(){
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
          });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i){
          i = 0;
        }
        if(i >= slides.length){
          return;
        }
        repeater();
      }, 10000);
      }
      repeater();
    }
    repeat();



$(document).ready(function() {
    // Cargar Drop down Origen/Destino mediante API
    $.ajax({
        type: 'GET',
        url: 'https://countriesnow.space/api/v0.1/countries/capital',
        dataType: 'json',
        success: function(data) {
            var ddOrigen = $('#origen');
            $.each(data.data, function(i, val) {
                ddOrigen.append(
                    $('<option></option>').val(i).html(val.capital + " (" + val.name + ")")
                );          
            });
            var ddDestino = $('#destino');
            $.each(data.data, function(i, val) {
                ddDestino.append(
                    $('<option></option>').val(i).html(val.capital + " (" + val.name + ")")
                );
            });
        }
    });

    var valorOrigenPrevio =$('#origen').val();
    // Deshabilitar destino seleccionado como origen
    $('#origen').change(function() {
        var valorSeleccionado = $(this).val();
        $('#destino option[value="' + valorSeleccionado +'"]').prop('disabled', true);
        $('#destino option[value="' + valorOrigenPrevio +'"]').prop('disabled', false);
        valorOrigenPrevio =$('#origen').val();
    });

    // Deshabilitar origen seleccionado como destino
    var valorDestinoPrevio =$('#destino').val();
    $('#destino').change(function() {
        var valorSeleccionado = $(this).val();
        $('#origen option[value="' + valorSeleccionado +'"]').prop('disabled', true);
        $('#origen option[value="' + valorDestinoPrevio +'"]').prop('disabled', false);
        valorDestinoPrevio =$('#destino').val();
    });
    
    // Handler para el click del boton buscar ofertas
    $('.btn-search').click(function () {
      listOffers();
    });
});

const listOffers = async () => {
  const response = await fetch("https://mocki.io/v1/5e3c8ba8-8e88-4351-a132-ae8b3459b07b");
  const data = await response.json();

  let tableBody = ``;
  data.data.forEach((oferta, index) => {
      tableBody += `
      <table>
      <tr>
        <td data-label="Columna 1">
          <div><p>Origen</p></div>
          <div><p>${oferta.origen}</p></div>
        </td>
        <td data-label="Columna 2" class="middle">
          <div>${oferta.tiempo}</div>
          <div class="icon"></i></div>
          <div>${oferta.escalas}</div>
        </td>
        <td data-label="Columna 3">
          <div><p>Destino</p></div>
          <div><p>${oferta.destino}</p></div>
        </td>
        <td data-label="Columna 4">
          <p>${oferta.precio}</p>
          <button class="offer-btn">Ver oferta</button>
        </td>
      </tr>
      </table>`;
  });
  // document.getElementById("tableBody_Users").innerHTML = tableBody;
  ofertas.innerHTML = tableBody;
};





