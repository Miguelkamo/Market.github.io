document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('#menu a');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            var targetId = this.getAttribute('data-target');
            var targetContenido = document.getElementById(targetId);
            
            // Ocultar todos los contenidos
            document.querySelectorAll('.contenido-principal').forEach(function(contenido) {
                contenido.classList.remove('visible');
            });
            
            // Mostrar solo el contenido correspondiente al enlace clicado
            targetContenido.classList.add('visible');
        });
    });
});
