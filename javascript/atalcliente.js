function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (name == '' || email == '') {
        alert('Por favor, rellene todos los campos.');
        return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }

    window.alert('Mensaje enviado');
    return true;
}
