// Realizar una solicitud GET a la API de Random Fox y cargar la imagen al principio
fetch('https://randomfox.ca/floof/')
    .then(response => response.json())
    .then(data => {
        const imageUrl = data.image;
        const foxImage = document.querySelector('#random-fox-image');
        foxImage.src = imageUrl;

        // Función para obtener y mostrar una nueva imagen de zorro al hacer clic en el botón de actualización
        const refreshButton = document.querySelector('#refresh-button');
        refreshButton.addEventListener('click', function() {
            fetch('https://randomfox.ca/floof/')
                .then(response => response.json())
                .then(data => {
                    const imageUrl = data.image;
                    foxImage.src = imageUrl;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
