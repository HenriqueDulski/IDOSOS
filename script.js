/**
 * SISTEMA DE COMPORTAMENTO E ACESSIBILIDADE - INTERNET SEGURA
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Elementos Selecionados
    const htmlElement = document.documentElement;
    const btnFonte = document.getElementById("btn-fonte");
    const btnContraste = document.getElementById("btn-contraste");
    const quizOpcoes = document.querySelectorAll(".quiz-opcao-btn");
    const quizFeedback = document.getElementById("quiz-feedback");

    // ==========================================================================
    // 2. SISTEMA DE ACESSIBILIDADE (Facil leitura)
    // ==========================================================================

    // Ativar / Desativar Texto Gigante
    btnFonte.addEventListener("click", () => {
        const estaAtivo = htmlElement.classList.toggle("texto-gigante");
        
        // Atualiza os atributos de acessibilidade para leitores de ecra
        btnFonte.setAttribute("aria-pressed", estaAtivo);
        btnFonte.innerHTML = estaAtivo 
            ? "<span></span> Texto Gigante (Desativar)" 
            : "<span></span> Texto Gigante (Ativar)";
    });

    // Ativar / Desativar Alto Contraste
    btnContraste.addEventListener("click", () => {
        const estaAtivo = htmlElement.classList.toggle("alto-contraste");
        
        // Atualiza os atributos de acessibilidade para leitores de ecra
        btnContraste.setAttribute("aria-pressed", estaAtivo);
        btnContraste.innerHTML = estaAtivo 
            ? "<span></span> Modo Normal (Ativar)" 
            : "<span></span> Alto Contraste (Ativar)";
    });


    // ==========================================================================
    // 3. JOGO DO QUIZ INTERATIVO
    // ==========================================================================

    quizOpcoes.forEach(botao => {
        botao.addEventListener("click", () => {
            // Limpa as escolhas anteriores
            quizOpcoes.forEach(b => {
                b.classList.remove("selecionado-correto", "selecionado-errado");
            });

            // Remove classes antigas do feedback
            quizFeedback.className = "resposta-feedback";

            const tipoEscolha = botao.getAttribute("data-opcao");

            if (tipoEscolha === "correta") {
                // Configura o visual do botao selecionado
                botao.classList.add("selecionado-correto");

                // Configura e apresenta o bloco de feedback positivo
                quizFeedback.classList.add("visivel", "sucesso");
                quizFeedback.innerHTML = `
                    <h3> Excelente escolha! Parabens!</h3>
                    <p style="margin-top: 10px; font-weight: normal;">
                        Desconfiar de facilidades e premios inesperados e o seu melhor escudo na internet. 
                        Ao ignorar o link azul suspeito e ao procurar ajuda, protege a sua privacidade e a sua carteira contra fraudes digitais.
                    </p>
                `;
            } else {
                // Configura o visual do botao selecionado
                botao.classList.add("selecionado-errado");

                // Configura e apresenta o bloco de feedback de alerta
                quizFeedback.classList.add("visivel", "erro");
                quizFeedback.innerHTML = `
                    <h3> Atencao! Essa nao e a melhor escolha.</h3>
                    <p style="margin-top: 10px; font-weight: normal;">
                        Links que prometem premios surpresa, dinheiro facil ou faturas inesperadas sao quase sempre falsos. 
                        Ao clicar, corre o risco de instalar um virus no seu telemovel ou de partilhar acidentalmente dados bancarios com estranhos.
                    </p>
                `;
            }
        });
    });
});