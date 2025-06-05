document .addEventListener("DOMContentLoaded", function (){
    const botaoDeAcessibilidade = document .getElementById('botao-acessibilidade')
    const opcaoDeAcessibilidade = document .getElementById('opcao-acessibilidade')

    botaoDeAcessibilidade .addEventListener('click', function () {
botaoDeAcessibilidade.classList.toggle('rotacao-botao');
opcaoDeAcessibilidade.classList.toggle('apresenta-lista')
    })