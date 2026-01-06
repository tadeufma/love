/* ==========================================================================
   CONFIGURAÇÃO INICIAL (Roda apenas quando a página termina de carregar)
   ========================================================================== */
window.onload = function() {
    // Essa proteção garante que o código só rode quando o botão já existe na tela
    const botaoNao = document.getElementById("nao");

    // Verifica se o botão existe antes de adicionar o evento (evita tela branca de erro)
    if (botaoNao) {
        botaoNao.addEventListener('mouseover', desvia);
        botaoNao.addEventListener('touchstart', desvia);
    }
}

/* ==========================================================================
   FUNÇÕES AUXILIARES
   ========================================================================== */

// Função que gera uma posição aleatória
function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}

// Função que faz o botão desviar
function desvia(event) {
    // Evita comportamentos padrões do touch (como zoom)
    if (event.type === 'touchstart') event.preventDefault();
    
    var btn = event.target;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('Opa, desviei...');
}

/* ==========================================================================
   A MÁGICA DO "SIM" (Vídeo + Chuva)
   ========================================================================== */
function aceitou() {
   
    document.getElementById("tela-pedido").style.display = "none";
    document.getElementById("tela-sucesso").style.display = "block";
    

    iniciarChuvaDeCoracoes();

    
    const placeholder = document.getElementById("video-placeholder");
    
    
    placeholder.innerHTML = `
        <video autoplay loop controls style="width: 100%; border-radius: 15px; box-shadow: 0 10px 20px rgba(0,0,0,0.2);">
            <source src="images/video-amor.mp4" type="video/mp4">
            Seu navegador não suporta a tag de vídeo.
        </video>
    `;
}

/* ==========================================================================
   ANIMAÇÃO DOS CORAÇÕES
   ========================================================================== */
function iniciarChuvaDeCoracoes() {
    const container = document.getElementById('heart-rain-container');
    const svgPath = 'images/coracao.svg'; 
    
    if (!container) return; 

    let heartCount = 0;
    const maxHearts = 100; 
    const intervalTime = 100; 

    function createHeart() {
        const heart = document.createElement('img');
        heart.src = svgPath;
        heart.classList.add('heart');
        
        const randomLeft = Math.random() * 100;
        heart.style.left = `${randomLeft}%`;
        
        const randomSize = Math.random() * (40 - 20) + 20;
        heart.style.width = `${randomSize}px`;
        heart.style.height = `${randomSize}px`;

        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';

        container.appendChild(heart);

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
