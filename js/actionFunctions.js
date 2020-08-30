var gestos = [
  "inclinarTras",
  "inclinarFrente",
  "inclinarDireita",
  "inclinarEsquerda",
  "rotacaoDireita",
  "rotacaoEsquerda"
];

function inclinarEsquerda() {
  document.getElementById(gestos[0]).click();

}
function inclinarDireita() {
  document.getElementById(gestos[1]).click();
}

function inclinarTras() {
  document.getElementById(gestos[2]).click();
}

function inclinarFrente() {
  document.getElementById(gestos[3]).click();
}
function rotacaoDireita() {
  document.getElementById(gestos[4]).click();
}
function rotacaoEsquerda() {
  document.getElementById(gestos[5]).click();
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var configured = getCookie("configured");
  if (configured == "yes" && checkAll() == true) {
    loadConfigs();
    configurarNovamente();
    alert("Already configured!");
  }
  else {
    configuracao();
  }
}

function configurarNovamente() {
  var x;
  var r = confirm("Os botões já estão configurados. Pressione OK para continuar ou Cancelar para configurar novamente.");
  if (r == false) {
    configuracao();
  }

  document.getElementById("demo").innerHTML = x;
}

function checkAll() {
  for (var i = 0; i < 6; i++) {
    var gesto = getCookie(i);
    if (gesto == "") return false;
    else return true;
  }
}

function loadConfigs() {
  for (var i = 0; i < 6; i++) {
    gestos[i] = getCookie(i);
  }
}

function configuracao() {

  var aux = 0;
  var mensagemConfig = ["inclinar para trás", "inclinar para frente", "inclinar para a esquerda",
    "inclinar para a direita", "rotacionar para a esquerda", "rotacionar para a direita"];


  alert("Vamos configurar os botões de acordo com os gestos disponíveis!");
  alert("Selecione o botão referente ao gesto de " + mensagemConfig[aux]);

  $("button").on('click', function () {
    var t = (this.id);
    $('#GFG_DOWN').text("ID = " + t);
    gestos[aux] = t;
    setCookie(aux, t, 365);
    aux++;
    if (aux < 6) {
      alert("Gesto configurado com sucesso. Pressione OK (ou ENTER) para prosseguir.")
      alert("Selecione o botão referente ao gesto de " + mensagemConfig[aux]);
    }

  });

  setCookie("configured", "yes", 365);
}

function realizarAcao(botao) {
  document.getElementById(botao).click();
}

