//-griselda
// script de slideshow de destinos
const myslide = document.querySelectorAll('.myslide'),
dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}

/*apertura y cierre de ventana modal medios-de-pagos*/

var modal = document.getElementById('modal');
var closeBtn = document.getElementsByClassName("cerrar")[0];

//funcion que convierte display en block para que deje de ser oculto
let mostrarModal=()=> modal.style.display = "block";

//funcion que vuelve a convertir el display del elemento en none, ocultandolo
let cerrarModal=()=>modal.style.display = "none";

//cierra la pagina oculta con click en cruz
closeBtn.onclick = ()=>cerrarModal()


//-Gonzalo-
// API rest 
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
          <div class="ciudad">${oferta.origen}</div>
        </td>
        <td data-label="Columna 2">
          <div class="tiempo">${oferta.tiempo}</div>
          <div class="icon">🛬</div>
          <div class="escalas">${oferta.escalas}</div>
        </td>
        <td data-label="c3">
          <div><p>Destino</p></div>
          <div class="ciudad">${oferta.destino}</div>
        </td>
        <td data-label="c4">
          <p>${oferta.precio}</p>
          <button class="offer-btn">Ver oferta</button>
        </td>
      </tr>
      </table>`;
  });
  // document.getElementById("tableBody_Users").innerHTML = tableBody;
  ofertas.innerHTML = tableBody;
};
