function escalaProporcao(largura, altura) {

    var larguraScreen = $(window).width();
    var alturaScreen = $(window).height();
    var proporcaoAltura = (alturaScreen * 100) / altura;
    var proporcaoLargura = (larguraScreen * 100) / largura;
    var proporcao, larguraAltura, larguraAlturaAuto;

    if (proporcaoAltura < proporcaoLargura) {
        larguraAltura = "height";
        larguraAlturaAuto = "width";
        proporcao = proporcaoAltura / 100;
    } else {
        larguraAltura = "width";
        larguraAlturaAuto = "height";
        proporcao = proporcaoLargura / 100;
    }

    return [proporcao, larguraAltura, larguraAlturaAuto];
}

function resizeBodyConteudo() {

    var proporcao1920 = escalaProporcao(1920, 1080)[0];

    $(".conteudo").css({
        "transform": "scale(" + proporcao1920 + ")",
        "transform-origin": "center center"
    });

    var proporcao900;

    if ($(window).width() < 992) {
        proporcao900 = escalaProporcao(900, 576)[0];
    } else {
        proporcao900 = 1;
    }
}

$(document).ready(function () {

    resizeBodyConteudo()
    $(window).resize(function () {
        resizeBodyConteudo()
    })


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

