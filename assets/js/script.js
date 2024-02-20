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

  var idsAcertados = [];

  $("#validacao").on("click", function () {
    verificarClique();
  });

  function verificarClique() {
    ['#padaria-segunda', '#padaria-terca', '#padaria-quarta', '#padaria-quinta', '#padaria-sexta', '#padaria-sabado', '#padaria-domingo',
      '#acougue-segunda', '#acougue-quarta', '#acougue-quinta', '#acougue-sabado', '#transporte-segunda', '#transporte-terca', '#transporte-quarta', '#transporte-quinta', '#transporte-sexta',
      '#almoco-segunda', '#almoco-terca', '#almoco-quarta', '#almoco-quinta', '#almoco-sexta', '#lanche-sabado', '#lanche-domingo', '#farmacia-segunda', '#lazer-sabado', '#lazer-domingo', '#feira-quarta',
      '#acougue-sexta', '#acougue-domingo', '#transporte-sabado', '#transporte-domingo', '#almoco-sabado', '#almoco-domingo', '#acougue-terca',
      '#lanche-segunda', '#lanche-terca', '#lanche-quarta', '#lanche-quinta', '#lanche-sexta', '#farmacia-terca', '#farmacia-quarta', '#farmacia-quinta', '#farmacia-sexta', '#farmacia-sabado',
      '#farmacia-domingo', '#lazer-segunda', '#lazer-terca', '#lazer-quarta', '#lazer-quinta', '#lazer-sexta', '#feira-segunda', '#feira-terca', '#feira-quinta', '#feira-sexta', '#feira-sabado', '#feira-domingo'
    ].forEach(function (id) {
      verificarValor(id);
    });
  }

  function verificarValor(id) {
    if (idsAcertados.includes(id)) {
      return;
    }

    var valorCorreto;

    switch (id) {
      // Padaria
      case '#padaria-segunda':
        valorCorreto = 10.50;
        break;
      case '#padaria-terca':
        valorCorreto = 21.59;
        break;
      case '#padaria-quarta':
        valorCorreto = 12.27;
        break;
      case '#padaria-quinta':
        valorCorreto = 11.46;
        break;
      case '#padaria-sexta':
        valorCorreto = 10.62;
        break;
      case '#padaria-sabado':
        valorCorreto = 16.10;
        break;
      case '#padaria-domingo':
        valorCorreto = 13.42;
        break;

        // Açougue
      case '#acougue-segunda':
        valorCorreto = 51.50;
        break;
      case '#acougue-quarta':
        valorCorreto = 32.27;
        break;
      case '#acougue-quinta':
        valorCorreto = 46.90;
        break;
      case '#acougue-sabado':
        valorCorreto = 160.42;
        break;

        // Transporte
      case '#transporte-segunda':
        valorCorreto = 10.50;
        break;
      case '#transporte-terca':
        valorCorreto = 10.50;
        break;
      case '#transporte-quarta':
        valorCorreto = 10.50;
        break;
      case '#transporte-quinta':
        valorCorreto = 10.50;
        break;
      case '#transporte-sexta':
        valorCorreto = 10.50;
        break;

        // Almoço
      case '#almoco-segunda':
        valorCorreto = 29.90;
        break;
      case '#almoco-terca':
        valorCorreto = 29.90;
        break;
      case '#almoco-quarta':
        valorCorreto = 29.90;
        break;
      case '#almoco-quinta':
        valorCorreto = 29.90;
        break;
      case '#almoco-sexta':
        valorCorreto = 29.90;
        break;

        // Lanche
      case '#lanche-sabado':
        valorCorreto = 25.70;
        break;
      case '#lanche-domingo':
        valorCorreto = 32.50;
        break;

        // Farmácia
      case '#farmacia-segunda':
        valorCorreto = 130.50;
        break;

        // Lazer
      case '#lazer-sabado':
        valorCorreto = 56.00;
        break;
      case '#lazer-domingo':
        valorCorreto = 130.25;
        break;

        // Feira
      case '#feira-quarta':
        valorCorreto = 92.72;
        break;

        // Zerado
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#acougue-sexta':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#acougue-domingo':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#transporte-sabado':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#transporte-domingo':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#almoco-sabado':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#almoco-domingo':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#lanche-segunda':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#lanche-terca':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#lanche-quarta':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#lanche-quinta':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#lanche-sexta':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#farmacia-terca':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#farmacia-quarta':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#farmacia-quinta':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#farmacia-sexta':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#farmacia-sabado':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#farmacia-domingo':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#lazer-segunda':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#lazer-terca':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#lazer-quarta':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#lazer-quinta':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#lazer-sexta':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#feira-segunda':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#feira-terca':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#feira-quinta':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#feira-sexta':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#feira-sabado':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;
      case '#feira-domingo':
      case '#acougue-terca':
        valorCorreto = 0.00;
        break;

      default:

        break;
    }

    var valorDigitado = parseFloat($(id).val().replace(',', '.'));

    if (isNaN(valorDigitado)) {
      return;
    }

    if (valorDigitado === valorCorreto) {
      acerto.play();
      $('#modalFeedbackPositivo').modal('show');
      idsAcertados.push(id);

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
      $(id).val('');
    }
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

  somClique();
  controleClique();
  calculoSemanal();
});


resizeBodyConteudo();
$(window).resize(function () {
  resizeBodyConteudo()
})


