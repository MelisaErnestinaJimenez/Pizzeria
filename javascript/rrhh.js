document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const cv = document.getElementById('cv').value;

    if (nombre === '' || email === '' || telefono === '' || cv === '') {
        alert('Por favor, rellene todos los campos obligatorios.');
        return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }

    alert('Formulario válido. Enviando datos...');
});
