$(document).ready(function () {
    function verificarValor(id, valorCorreto) {
        $(id).on('blur', function () {
            var valorDigitado = parseFloat($(this).val().replace(',', '.'));

            if (isNaN(valorDigitado)) {
                return;
            }

            if (Math.abs(valorDigitado - valorCorreto) < 0.01) {
                $('#modalFeedbackPositivo').modal('show');
            } else {
                $('#modalFeedbackNegativo').modal('show');
            }
        });
    }

    verificarValor('#acougue-segunda', 51.50);
    verificarValor('#acougue-terca', 20.00);
    verificarValor('#acougue-quarta', 20.00);
    verificarValor('#acougue-quinta', 20.00);
    verificarValor('#acougue-sexta', 20.00);
    verificarValor('#acougue-sabado', 20.00);
    verificarValor('#acougue-domingo', 20.00);
});