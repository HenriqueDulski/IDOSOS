const botaoContraste = document.getElementById('botao-contraste');
const botaoAjuda = document.getElementById('botao-ajuda');
const corpoPagina = document.body;

botaoContraste.addEventListener('click', function() {
    corpoPagina.classList.toggle('alto-contraste');
});

botaoAjuda.addEventListener('click', function() {
    alert('Ligue para o numero 190 se achar que foi vitima de um golpe.');
});