

//-- script para búsqueda de productos -->
const productos = {
    camisas: "camisas.html",
    abrigos: "abrigos.html",
    carrito: "carrito.html",
    novedades: "nuevosdiseñosactualizado.html",
    medidas: "tablasdemedidaactualizado.html",
};
function buscarProducto() {
    let texto =
        document.getElementById("buscador")
            .value
            .toLowerCase()
            .trim();
    if (productos[texto]) {
        window.location.href = productos[texto];
    } else {
        alert("Producto no encontrado");
    }
}
//-- script para carrito de compras y resumen -->
document.getElementById('irResumen').addEventListener('click', function () {
    const seleccionados = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            seleccionados.push({
                nombre: checkbox.dataset.nombre,
                precio: parseFloat(checkbox.dataset.precio)
            });
        }
    });
    localStorage.setItem('seleccionados', JSON.stringify(seleccionados));
    window.location.href = 'resumen.html';
});

//-- categoria desplegable usando checkboxes -->
document.addEventListener('DOMContentLoaded', () => {

    const toggleButton = document.getElementById('toggleButton');
    const sidebar = document.getElementById('sidebar');
    const closeButton = document.getElementById('closeButton');

    toggleButton.addEventListener('click', () => {
        sidebar.classList.add('mostrar');
    });

    closeButton.addEventListener('click', () => {
        sidebar.classList.remove('mostrar');
    });

});

//-- script para aplicar descuentos -->
const seleccionados = JSON.parse(localStorage.getItem('seleccionados')) || [];
const lista = document.getElementById('listaProductos');
let total = 0;

seleccionados.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - S/${item.precio}`;
    lista.appendChild(li);
    total += item.precio;
});

document.getElementById('total').textContent = `Total: S/${total}`;

if (total > 300) {
    document.getElementById('descuento').textContent = '¡Descuento aplicado! Ahorras S/50';
} else {
    document.getElementById('descuento').textContent = '';
}
//-- script para formulario de registro -->
$(function () {
    $("#formulario").hide();
    $("#btn-registrarse").click(function () {
        if ($(this).text() == "REGISTRARSE") {
            $("#formulario").show();
            $(this).text("CERRAR REGISTRO");
        } else {
            $("#formulario").hide();
            $(this).text("REGISTRARSE");
        }
    });
});

const boton = document.getElementById("btnEnviar");

if (boton) {
    boton.addEventListener("click", function () {
        alert("EL FORMULARIO FUE ENVIADO CON EXITO.");

    });
}
