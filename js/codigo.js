(() => {
  'use strict';

  // Seleccionar todos los formularios con la clase `needs-validation`
  const forms = document.querySelectorAll('.needs-validation');

  // Iterar sobre los formularios y añadir un evento `submit`
  Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
          // Verificar si el formulario es válido
          if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();

              // Si hay un campo inválido, mostrar sus mensajes de error
              const invalidFields = form.querySelectorAll(':invalid');
              invalidFields.forEach(field => {
                  const feedback = field.nextElementSibling;
                  if (feedback && feedback.classList.contains('invalid-feedback')) {
                      feedback.style.display = 'block'; // Mostrar el mensaje de error
                  }
              });
          }

          form.classList.add('was-validated'); // Añadir clases de validación de Bootstrap
      }, false);
  });
})();
