// Permite apenas números e caracteres para a máscara
function permitirSomenteNumeros(event) {
  const charCode = event.charCode || event.keyCode;
  // Permitir números (48-57), parênteses (40, 41), espaço (32) e hífen (45)
  if (
    (charCode >= 48 && charCode <= 57) || // números
    charCode === 40 || // (
    charCode === 41 || // )
    charCode === 32 || // espaço
    charCode === 45 // -
  ) {
    return true;
  }
  return false;
}

// Formata o campo como (xx) xxxxx-xxxx
function mascararContato(input) {
  let valor = input.value.replace(/\D/g, ""); // Remove caracteres não numéricos
  if (valor.length > 10) {
    input.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(
      7,
      11
    )}`;
  } else if (valor.length > 6) {
    input.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 6)}-${valor.slice(
      6
    )}`;
  } else if (valor.length > 2) {
    input.value = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
  } else if (valor.length > 0) {
    input.value = `(${valor}`;
  }
}

function cadastroClientes() {
  var formCliente = document.querySelector(".formularioCadastroClientes");
  var formPets = document.querySelector(".formularioCadastroPets");
  var formGestaoServicos = document.querySelector(".formularioGestaoServicos");
  var formularioAgendamento = document.querySelector(".formularioAgendamento");

  formCliente.style.display = "block";
  formPets.style.display = "none";
  formGestaoServicos.style.display = "none";
  formularioAgendamento.style.display = "none";
}

function cadastroPets() {
  var formCliente = document.querySelector(".formularioCadastroClientes");
  var formPets = document.querySelector(".formularioCadastroPets");
  var formGestaoServicos = document.querySelector(".formularioGestaoServicos");
  var formularioAgendamento = document.querySelector(".formularioAgendamento");

  formCliente.style.display = "none";
  formPets.style.display = "block";
  formGestaoServicos.style.display = "none";
  formularioAgendamento.style.display = "none";
}

function gestaoDeServicos() {
  var formCliente = document.querySelector(".formularioCadastroClientes");
  var formPets = document.querySelector(".formularioCadastroPets");
  var formGestaoServicos = document.querySelector(".formularioGestaoServicos");
  var formularioAgendamento = document.querySelector(".formularioAgendamento");

  formCliente.style.display = "none";
  formPets.style.display = "none";
  formGestaoServicos.style.display = "block";
  formularioAgendamento.style.display = "none";
}

function agendamento() {
  var formCliente = document.querySelector(".formularioCadastroClientes");
  var formPets = document.querySelector(".formularioCadastroPets");
  var formGestaoServicos = document.querySelector(".formularioGestaoServicos");
  var formularioAgendamento = document.querySelector(".formularioAgendamento");

  formCliente.style.display = "none";
  formPets.style.display = "none";
  formGestaoServicos.style.display = "none";
  formularioAgendamento.style.display = "block";
}

function mensagemEnvio() {
  document
    .querySelector(".formularioAgendamento")
    .addEventListener("submit", function (event) {
      // Exibe o alerta
      alert("Enviado com sucesso!");
    });

  document
    .querySelector(".formularioCadastroClientes")
    .addEventListener("submit", function (event) {
      // Exibe o alerta
      alert("Enviado com sucesso!");
    });

  document
    .querySelector(".formularioCadastroPets")
    .addEventListener("submit", function (event) {
      // Exibe o alerta
      alert("Enviado com sucesso!");
    });

  document
    .querySelector(".formularioGestaoServicos")
    .addEventListener("submit", function (event) {
      // Exibe o alerta
      alert("Enviado com sucesso!");
    });
}

mensagemEnvio();
