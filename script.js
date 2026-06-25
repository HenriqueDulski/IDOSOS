// Seleciona os elementos principais
const botaoContraste = document.getElementById('botao-contraste');
const botaoFonte = document.getElementById('botao-fonte');
const botaoAjuda = document.getElementById('botao-ajuda');
const corpoPagina = document.body;

// Alterna a classe de alto contraste
botaoContraste.addEventListener('click', function() {
    corpoPagina.classList.toggle('alto-contraste');
});

// Alterna a classe para mudar e aumentar a fonte
botaoFonte.addEventListener('click', function() {
    corpoPagina.classList.toggle('fonte-alterada');
});

// Exibe mensagem de alerta no botao de ajuda
botaoAjuda.addEventListener('click', function() {
    alert('Ligue para o numero 190 se achar que foi vitima de um golpe.');
});