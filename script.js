/* ==========================================================================
   PARTE 1: Lógica do botão "Não" (Fugir)
   ========================================================================== */
const botaoNao = document.getElementById("nao");

// Função que gera uma posição aleatória
function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}

// Função que faz o botão desviar
function desvia(event) {
    // Evita comportamentos padrões do touch
    if (event.type === 'touchstart') event.preventDefault();
    
    var btn = event.target;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('Opa, desviei...');
}

// Adiciona os eventos para Computador (mouseover) e Celular (touchstart)
botaoNao.addEventListener('mouseover', desvia);
botaoNao.addEventListener('touchstart', desvia);


/* ==========================================================================
   PARTE 2: Lógica do botão "Sim" (Troca de tela + Chuva)
   ========================================================================== */

function aceitou() {
    // 1. Esconde a tela do pedido
    document.getElementById("tela-pedido").style.display = "none";
    
    // 2. Mostra a tela de sucesso
    document.getElementById("tela-sucesso").style.display = "block";
    
    // 3. Inicia a chuva de corações (Sua animação entra aqui!)
    iniciarChuvaDeCoracoes();
}


/* ==========================================================================
   PARTE 3: Sua Animação de Corações (Encapsulada)
   ========================================================================== */
function iniciarChuvaDeCoracoes() {
    const container = document.getElementById('heart-rain-container');
    const svgPath = 'images/coracao.svg'; 
    
    let heartCount = 0;
    const maxHearts = 100; 
    const intervalTime = 100; 

    function createHeart() {
        const heart = document.createElement('img');
        heart.src = svgPath;
        heart.classList.add('heart');
        
        // Posição horizontal aleatória
        const randomLeft = Math.random() * 100;
        heart.style.left = `${randomLeft}%`;
        
        // Tamanho aleatório
        const randomSize = Math.random() * (40 - 20) + 20;
        heart.style.width = `${randomSize}px`;
        heart.style.height = `${randomSize}px`;

        // Duração da queda aleatória (para ficar mais natural)
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's'; // Entre 3s e 5s

        container.appendChild(heart);

        // Remove o coração do HTML quando a animação acabar (limpeza de memória)
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    const heartInterval = setInterval(() => {
        if (heartCount < maxHearts) {
            createHeart();
            heartCount++;
        } else {
            clearInterval(heartInterval);
        }
    }, intervalTime);
}