$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

// Simular envío de formulario
$('form').on('submit', function (e) {
    e.preventDefault();
    alert('Formulario enviado con éxito.');
});

 // Activar tooltips
 var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
 var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
     return new bootstrap.Tooltip(tooltipTriggerEl);
 });