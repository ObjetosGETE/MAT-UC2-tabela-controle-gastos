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

function somClique() {
    $("body").on("click", '.som-clique', function () {
        var audio = new Audio('assets/audio/clique.mp3');
        audio.play();
    });
}

function controleClique() {
    $("#comecar-controle").click(function () {
        $(".intro-controle-gastos").addClass("d-none");
        $(".conteudo-controle-gastos").removeClass("d-none");
    });

    $("#organiza-nota").click(function () {
        $(".conteudo-controle-gastos").addClass("d-none");
        $(".conteudo-controle-organizado").removeClass("d-none");
    });

    $("#notinhas").click(function () {
        $(".conteudo-controle-organizado").addClass("d-none");
        $(".lancamento").removeClass("d-none");
    });

    $("#fecha-tabela").click(function () {
        $(".lancamento").addClass("d-none");
        $(".final-controle-gastos").removeClass("d-none");
    });

    $("#abre-planilha").click(function () {
        $(".final-controle-gastos").addClass("d-none");
        $(".lancamento").removeClass("d-none");
    });
}

function calculoSemanal() {
    $('input[type="number"]').on('input', function () {

        var $row = $(this).closest('tr');
        var totalSemana = 0;

        $row.find('input[type="number"]').each(function () {

            var value = parseFloat($(this).val()) || 0;

            totalSemana += value;
        });

        $row.find('span').text(totalSemana.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }));
    });
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

    somClique()
    controleClique();
    calculoSemanal();
});



    


