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