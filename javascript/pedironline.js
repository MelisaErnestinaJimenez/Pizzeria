let carrito = [];
let mensajeMostrado = false;
let seRealizoCompra = false;

document.addEventListener("DOMContentLoaded", function() {
    const agregarAlCarritoButtons = document.querySelectorAll('.agregar-al-carrito');
    if (agregarAlCarritoButtons) {
        agregarAlCarritoButtons.forEach((boton, indice) => {
            boton.addEventListener('click', () => {
                const producto = {
                    nombre: boton.parentElement.querySelector('h3').textContent,
                    precio: boton.parentElement.querySelector('.precio').textContent,
                    id: 'producto' + indice
                };
                agregarAlCarrito(producto);
                mostrarCarrito();
            });
        });
    }

    const botonComprar = document.querySelector('button[type="submit"]');
    if (botonComprar) {
        botonComprar.addEventListener('click', () => {
            const metodoEfectivo = document.getElementById('efectivo');
            const metodoTarjeta = document.getElementById('tarjeta');
            if (!mensajeMostrado) {
                if (!metodoEfectivo.checked && !metodoTarjeta.checked) {
                    mostrarErrorSeleccion();
                } else {
                    if (carrito.length > 0) {
                        console.log('Se ha hecho clic en el botón de compra');
                        mostrarMensaje();
                        mostrarCompraExitosa();
                        mensajeMostrado = true;
                        botonComprar.disabled = true;
                    } else {
                        console.log('El carrito está vacío. No se puede realizar la compra.');
                    }
                }
            }
        });
    }
});

function agregarAlCarrito(producto) {
    const index = carrito.findIndex((item) => item.nombre === producto.nombre);
    if (index !== -1) {
        carrito[index].cantidad += 1;
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }
}



function mostrarCarrito() {
    const carritoContainer = document.getElementById('carrito');
    if (carritoContainer) {
        carritoContainer.innerHTML = '';
        let total = 0;
        carrito.forEach((producto, index) => {
            const listItem = document.createElement('li');
            const cantidadProducto = document.createElement('span');
            cantidadProducto.textContent = ` x ${producto.cantidad}`;
            listItem.textContent = `${producto.nombre} - ${producto.precio}`;
            listItem.appendChild(cantidadProducto);
            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.onclick = function() {
                eliminarDelCarrito(index);
            };
            const botonIncrementar = document.createElement('button');
            botonIncrementar.textContent = '+';

            botonIncrementar.classList.add('btncantidadmas');

            botonIncrementar.style.background = 'black';
            botonIncrementar.style.color = 'white';
            botonIncrementar.style.fontSize = '1.7rem';
            botonIncrementar.style.fontWeight = '600';
           botonIncrementar.style.textAlign = 'center';
            botonIncrementar.style.margin = '0.5rem';
            botonIncrementar.style.paddingTop = '0.125rem'; 
            botonIncrementar.style.paddingBottom = '0.125rem'; 
            botonIncrementar.style.paddingLeft = '0'; 
            botonIncrementar.style.paddingRight = '0'; 
            
            botonIncrementar.style.borderRadius = '1rem';
            botonIncrementar.style.border = '1px #00FF00 dotted';

            botonIncrementar.onclick = function() {
                incrementarCantidad(index);
            };
            const botonDisminuir = document.createElement('button');
            botonDisminuir.textContent = '-';

            botonDisminuir.classList.add('btncantidadmenos');

            botonDisminuir.style.backgroundColor = 'black';
            botonDisminuir.style.color = 'white';
            botonDisminuir.style.fontSize = '1.7rem';
            botonDisminuir.style.fontWeight = '700';
            botonDisminuir.style.textAlign = 'center';
            botonDisminuir.style.margin = '0.5rem';
            botonDisminuir.style.paddingTop = '0.2rem';
botonDisminuir.style.paddingBottom = '0.2rem';
botonDisminuir.style.paddingLeft = '0.26rem'; 
botonDisminuir.style.paddingRight = '0.29rem'; 
            botonDisminuir.style.borderRadius = '1rem';
            botonDisminuir.style.border = '1px #00FF00 dotted';

            botonDisminuir.onclick = function() {
                disminuirCantidad(index);
            };

            botonEliminar.classList.add('btneliminar');
            botonEliminar.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            botonEliminar.style.color = 'black';
            botonEliminar.style.fontSize = '1.5rem';
            botonEliminar.style.fontWeight = '500';
            botonEliminar.style.border = '1px red dotted';
            botonEliminar.style.padding = '0.3rem 0.4rem';
            botonEliminar.style.borderRadius = '1rem';
            botonEliminar.style.margin = '0.5rem';
            listItem.appendChild(botonIncrementar);
            listItem.appendChild(botonDisminuir);
            listItem.appendChild(botonEliminar);
            carritoContainer.appendChild(listItem);
            total += parseInt(producto.precio.slice(1), 10) * producto.cantidad;
        });

        const totalContainer = document.getElementById('total');
        if (totalContainer) {
            totalContainer.innerHTML = `Total: $${total.toFixed(2)}`;
        }
    }
}

function incrementarCantidad(index) {
    carrito[index].cantidad += 1;
    mostrarCarrito();
}

function disminuirCantidad(index) {
    if (carrito[index].cantidad > 1) {
        carrito[index].cantidad -= 1;
    } else {
        eliminarDelCarrito(index);
    }
    mostrarCarrito();
}


function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
}

function mostrarMensaje() {
    if (!mensajeMostrado) {
        const mensaje = document.createElement('p');
        mensaje.textContent = 'Tu pedido fue enviado. ¡Gracias por tu compra!';
        mensaje.classList.add('mensaje-comprarealizada');
        mensaje.style.position = 'fixed';
        mensaje.style.top = '50%';
        mensaje.style.left = '50%';
        mensaje.style.transform = 'translate(-50%, -50%)';
        mensaje.style.background = '#f4f4f4';
        mensaje.style.padding = '20px';
        mensaje.style.border = '1px solid #ddd';
        mensaje.style.borderRadius = '5px';
        document.body.appendChild(mensaje);
        setTimeout(() => {
            mensaje.remove();
            mensajeMostrado = false;
        }, 3000);
        mensajeMostrado = true;
    }
}

function mostrarCompraExitosa() {
    const sectionMensaje = document.getElementById('mensaje');
    if (sectionMensaje) {
        const mensajeCompraExitosa = document.createElement('p');
        mensajeCompraExitosa.textContent = '¡Compra realizada con éxito!';
        mensajeCompraExitosa.classList.add('mensaje-comprarealizada');
        mensajeCompraExitosa.style.textAlign = 'center';
        sectionMensaje.appendChild(mensajeCompraExitosa);
    }
    mensajeMostrado = true;
}

function mostrarErrorSeleccion() {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = 'Por favor, elija una opción de pago.';
    mensajeError.style.color = 'red';
    const seccionError = document.getElementById('mensaje');
    seccionError.appendChild(mensajeError);
}

function mostrarErrorSeleccion() {
    if (!mensajeMostrado) {
        const mensajeError = document.createElement('p');
        mensajeError.textContent = 'Por favor, elija una opción de pago.';
        mensajeError.classList.add('mensaje-error');
        mensajeError.style.position = 'fixed';
        mensajeError.style.top = '50%';
        mensajeError.style.left = '50%';
        mensajeError.style.transform = 'translate(-50%, -50%)';
        mensajeError.style.background = '#f4f4f4';
        mensajeError.style.padding = '20px';
        mensajeError.style.border = '1px solid #ddd';
        mensajeError.style.borderRadius = '5px';
        document.body.appendChild(mensajeError);
        setTimeout(() => {
            mensajeError.remove();
            mensajeMostrado = false;
        }, 3000);
        mensajeMostrado = true;
    }
}
