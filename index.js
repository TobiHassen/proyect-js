let carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.log(`Se agregó ${producto} al carrito.`);
}

function mostrarCarrito() {
    console.log("Productos en el carrito:");
    carrito.forEach(producto => console.log(producto));
}

const productos = {
    remeras: 'Remeras',
    buzos: 'Buzos',
    shorts: 'Shorts',
    gorras: 'Gorras',
    pantalones: 'Pantalones'
};

console.log('Productos disponibles:');
for (const key in productos) {
    console.log("- " + productos[key]);
}

let productoSeleccionado = prompt("Ingrese el nombre del producto que desea agregar al carrito:");

while (!(productoSeleccionado in productos)) {
    productoSeleccionado = prompt(`Lo siento, "${productoSeleccionado}" no está disponible. Ingrese el nombre de un producto disponible:`);
}

agregarAlCarrito(productos[productoSeleccionado]);

mostrarCarrito();