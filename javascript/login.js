document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-container');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email === '' || password === '') {
            alert('Por favor, complete todos los campos');
        } else {
            alert('¡Ingreso exitoso!');
           
        }
    });
});
