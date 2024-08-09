$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

// Simular envío de formulario
$('form').on('submit', function (e) {
    e.preventDefault();
    alert('Formulario enviado con éxito.');
});