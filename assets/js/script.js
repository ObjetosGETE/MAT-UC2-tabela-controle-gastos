var erro = new Audio("/assets/audio/erro.mp3");
var acerto = new Audio("/assets/audio/acerto.mp3");

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

  $(".fecha-tabela").click(function () {
    $(".lancamento").addClass("d-none");
    $(".conteudo-controle-organizado").removeClass("d-none");
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

  var cupons = [{
      empresa: "Padaria Bom&Cia",
      diaSemana: "SEGUNDA-FEIRA",
      descricao: "Cuca",
      valor: "R$10,50",
      ordem: "1/27"
    },
    {
      empresa: "Restaurante da Flor",
      diaSemana: "TERÇA-FEIRA",
      descricao: "Almoço",
      valor: "R$29,90",
      ordem: "2/27"
    },
    {
      empresa: "Padaria Bom&Cia",
      diaSemana: "QUARTA-FEIRA",
      descricao: "Bolo",
      valor: "R$12,27",
      ordem: "3/27"
    },
    {
      empresa: "Padaria Bom&Cia",
      diaSemana: "QUINTA-FEIRA",
      descricao: "Pão caseiro",
      valor: "R$11,46",
      ordem: "4/27"
    },
    {
      empresa: "Açougue Boi de Ouro",
      diaSemana: "SEGUNDA-FEIRA",
      descricao: "Carne",
      valor: "R$51,50",
      ordem: "5/27"
    },
    {
      empresa: "Padaria Bom&Cia",
      diaSemana: "SEXTA-FEIRA",
      descricao: "Cuca",
      valor: "R$10,62",
      ordem: "6/27"
    },
    {
      empresa: "Padaria Bom&Cia",
      diaSemana: "SÁBADO",
      descricao: "Pão e bolo",
      valor: "R$16,10",
      ordem: "7/27"
    },
    {
      empresa: "Padaria Bom&Cia",
      diaSemana: "DOMINGO",
      descricao: "Pão de forma",
      valor: "R$13,42",
      ordem: "8/27"
    },
    {
      empresa: "Transportes Banzo",
      diaSemana: "SEGUNDA-FEIRA",
      descricao: "Passagens de ônibus",
      valor: "R$10,50",
      ordem: "9/27"
    },
    {
      empresa: "Açougue Boi de Ouro",
      diaSemana: "QUARTA-FEIRA",
      descricao: "Frango",
      valor: "R$32,27",
      ordem: "10/27"
    },
    {
      empresa: "Açougue Boi de Ouro",
      diaSemana: "QUINTA-FEIRA",
      descricao: "Picanha",
      valor: "R$46,90",
      ordem: "11/27"
    },
    {
      empresa: "Açougue Boi de Ouro",
      diaSemana: "SÁBADO",
      descricao: "Carne",
      valor: "R$160,42",
      ordem: "12/27"
    },
    {
      empresa: "Transportes Banzo",
      diaSemana: "TERÇA-FEIRA",
      descricao: "Passagens de ônibus",
      valor: "R$10,50",
      ordem: "13/27"
    },
    {
      empresa: "Transportes Banzo",
      diaSemana: "QUARTA-FEIRA",
      descricao: "Passagens de ônibus",
      valor: "R$10,50",
      ordem: "14/27"
    },

    {
      empresa: "Transportes Banzo",
      diaSemana: "SEXTA-FEIRA",
      descricao: "Passagens de ônibus",
      valor: "R$10,50",
      ordem: "15/27"
    },
    {
      empresa: "Cinema Lazer",
      diaSemana: "SÁBADO",
      descricao: "Filme e Pipoca",
      valor: "R$56,00",
      ordem: "16/27"
    },
    {
      empresa: "Restaurante da Flor",
      diaSemana: "SEGUNDA-FEIRA",
      descricao: "Almoço",
      valor: "R$29,90",
      ordem: "17/27"
    },
    {
      empresa: "Padaria Bom&Cia",
      diaSemana: "TERÇA-FEIRA",
      descricao: "Pão de forma",
      valor: "R$21,59",
      ordem: "18/27"
    },
    {
      empresa: "Restaurante da Flor",
      diaSemana: "QUARTA-FEIRA",
      descricao: "Almoço",
      valor: "R$29,90",
      ordem: "19/27"
    },
    {
      empresa: "Restaurante da Flor",
      diaSemana: "QUINTA-FEIRA",
      descricao: "Almoço",
      valor: "R$29,90",
      ordem: "20/27"
    },
    {
      empresa: "Restaurante da Flor",
      diaSemana: "SEXTA-FEIRA",
      descricao: "Almoço",
      valor: "R$29,90",
      ordem: "21/27"
    },
    {
      empresa: "Café Bem&Cia",
      diaSemana: "SÁBADO",
      descricao: "Lanche da tarde",
      valor: "R$25,70",
      ordem: "22/27"
    },
    {
      empresa: "Transportes Banzo",
      diaSemana: "QUINTA-FEIRA",
      descricao: "Passagens de ônibus",
      valor: "R$10,50",
      ordem: "23/27"
    },
    {
      empresa: "Café Bem&Cia",
      diaSemana: "DOMINGO",
      descricao: "Lanche da tarde",
      valor: "R$32,50",
      ordem: "24/27"
    },
    {
      empresa: "Farmácia São João",
      diaSemana: "SEGUNDA-FEIRA",
      descricao: "Remédios",
      valor: "R$130,50",
      ordem: "25/27"
    },
    {
      empresa: "Baile da Alegria",
      diaSemana: "DOMINGO",
      descricao: "Festa e drinks",
      valor: "R$130,25",
      ordem: "26/27"
    },
    {
      empresa: "Feira Orgânica",
      diaSemana: "QUARTA-FEIRA",
      descricao: "Legumes",
      valor: "R$92,72",
      ordem: "27/27"
    }

  ];

  var currentCupomIndex = 0;

  function exibirCupom(index) {
    var cupom = cupons[index];
    var tNota = $(".mao .t-nota");
    tNota.find(".nome-empresa").text(cupom.empresa);
    tNota.find(".dia-semana").text(cupom.diaSemana);
    tNota.find(".descricao-nota").text(cupom.descricao);
    tNota.find(".valor-nota").text(cupom.valor);
    tNota.find(".ordem-numerica").text(cupom.ordem);
  }

  function verificarValor(id, valorCorreto) {
    $(id).on('focusout', function () {
      var valorDigitado = parseFloat($(this).val().replace(',', '.'));

      if (isNaN(valorDigitado)) {
        return;
      }

      if (valorDigitado === valorCorreto) {
        acerto.play();
        $('#modalFeedbackPositivo').modal('show');

        if (currentCupomIndex < cupons.length - 1) {
          currentCupomIndex++;
          exibirCupom(currentCupomIndex);
        } else {
          setTimeout(function () {
            $(".lancamento").addClass("d-none");
          }, 2900);
          setTimeout(function () {
            $(".final-controle-gastos").removeClass("d-none");
          }, 3000);
        }
      } else {
        erro.play();
        $('#modalFeedbackNegativo').modal('show');
      }
    });
  }

  $('#validacao').prop('disabled', true);

  $('input[type="number"]').on('input', function () {
    var algumValorDigitado = false;

    $('input[type="number"]').each(function () {
      if ($(this).val() !== '') {
        algumValorDigitado = true;
      }
    });

    $('#validacao').prop('disabled', !algumValorDigitado);
  });

  $('.modal-planilha').on('show.bs.modal', function () {
    $('#validacao').prop('disabled', true);
  });


  exibirCupom(currentCupomIndex);

  verificarValor('#padaria-segunda', 10.50);
  verificarValor('#padaria-terca', 21.59);
  verificarValor('#padaria-quarta', 12.27);
  verificarValor('#padaria-quinta', 11.46);
  verificarValor('#padaria-sexta', 10.62);
  verificarValor('#padaria-sabado', 16.10);
  verificarValor('#padaria-domingo', 13.42);

  verificarValor('#acougue-segunda', 51.50);
  verificarValor('#acougue-quarta', 32.27);
  verificarValor('#acougue-quinta', 46.90);
  verificarValor('#acougue-sabado', 160.42);

  verificarValor('#transporte-segunda', 10.50);
  verificarValor('#transporte-terca', 10.50);
  verificarValor('#transporte-quarta', 10.50);
  verificarValor('#transporte-quinta', 10.50);
  verificarValor('#transporte-sexta', 10.50);

  verificarValor('#almoco-segunda', 29.90);
  verificarValor('#almoco-terca', 29.90);
  verificarValor('#almoco-quarta', 29.90);
  verificarValor('#almoco-quinta', 29.90);
  verificarValor('#almoco-sexta', 29.90);

  verificarValor('#lanche-sabado', 25.70);
  verificarValor('#lanche-domingo', 32.50);

  verificarValor('#farmacia-segunda', 130.50);

  verificarValor('#lazer-sabado', 56.00);
  verificarValor('#lazer-domingo', 130.25);

  verificarValor('#feira-quarta', 92.72);

  volumeMusica();

});

resizeBodyConteudo();
$(window).resize(function () {
  resizeBodyConteudo()
})

$(document).ready(function () {

  function semValor(id, zerado) {
    $('#validacao').on('click', function () {
      var digitou = parseFloat($(this).val().replace(',', '.'));

      if (isNaN(digitou)) {
        return;
      }

      if (Math.abs(digitou - zerado) > 0.01) {
        $('#modalFeedbackNegativo').modal('show');
      }
    });
  }


  semValor('#acougue-terca', 0.00);
  semValor('#acougue-sexta', 0.00);
  semValor('#acougue-domingo', 0.00);

  semValor('#transporte-sabado', 0.00);
  semValor('#transporte-domingo', 0.00);

  semValor('#almoco-sabado', 0.00);
  semValor('#almoco-domingo', 0.00);

  semValor('#lanche-segunda', 0.00);
  semValor('#lanche-terca', 0.00);
  semValor('#lanche-quarta', 0.00);
  semValor('#lanche-quinta', 0.00);
  semValor('#lanche-sexta', 0.00);

  semValor('#farmacia-terca', 0.00);
  semValor('#farmacia-quarta', 0.00);
  semValor('#farmacia-quinta', 0.00);
  semValor('#farmacia-sexta', 0.00);
  semValor('#farmacia-sabado', 0.00);
  semValor('#farmacia-domingo', 0.00);

  semValor('#lazer-segunda', 0.00);
  semValor('#lazer-terca', 0.00);
  semValor('#lazer-quarta', 0.00);
  semValor('#lazer-quinta', 0.00);
  semValor('#lazer-sexta', 0.00);

  semValor('#feira-segunda', 0.00);
  semValor('#feira-terca', 0.00);
  semValor('#feira-quinta', 0.00);
  semValor('#feira-sexta', 0.00);
  semValor('#feira-sabado', 0.00);
  semValor('#feira-domingo', 0.00);



  somClique();
  controleClique();
  calculoSemanal();
});

