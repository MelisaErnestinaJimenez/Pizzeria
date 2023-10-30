document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-container');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const lastname = document.getElementById('lastname').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const repeatPassword = document.getElementById('repeat-password').value;
      const acceptTerms = document.getElementById('acceptTerms').checked;
  
      if (name.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
      } else if (lastname.trim() === '') {
        alert('Por favor, ingresa tu apellido.');
      } else if (email.trim() === '') {
        alert('Por favor, ingresa tu correo electrónico.');
      } else if (password.trim() === '') {
        alert('Por favor, ingresa tu contraseña.');
      } else if (repeatPassword.trim() === '') {
        alert('Por favor, repite tu contraseña.');
      } else if (password !== repeatPassword) {
        alert('Las contraseñas no coinciden. Por favor, verifica.');
      } else if (!acceptTerms) {
        alert('Debes aceptar los términos y condiciones.');
      } else {
        alert('¡Formulario enviado con éxito!');
        form.reset();
      }
    });
  });
  