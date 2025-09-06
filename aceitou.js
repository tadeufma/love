document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('heart-rain-container');
    const svgPath = 'images/coracao.svg'; 
    
    // Configurações da animação
    let heartCount = 0;
    const maxHearts = 100; // Número total de corações
    const intervalTime = 100; // Tempo entre a criação de cada coração em ms

    // A função de criar o coração
    function createHeart() {
        const heart = document.createElement('img');
        heart.src = svgPath;
        heart.classList.add('heart');
        
        const randomLeft = Math.random() * 100;
        heart.style.left = `${randomLeft}%`;
        
        const randomSize = Math.random() * (40 - 20) + 20;
        heart.style.width = `${randomSize}px`;
        heart.style.height = `${randomSize}px`;

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
});