const botaoSim = document.getElementById('sim');
const botaoNao = document.getElementById('nao');

botaoSim.addEventListener('click', () => {
    // Redireciona para a nova página
    window.location.href = 'aceitou.html';
});

botaoNao.addEventListener('mouseover', () => {
    const padding = 50; 
    
    const randomX = Math.random() * (window.innerWidth - botaoNao.offsetWidth - padding * 2) + padding;
    const randomY = Math.random() * (window.innerHeight - botaoNao.offsetHeight - padding * 2) + padding;

    botaoNao.style.position = 'absolute';
    botaoNao.style.left = `${randomX}px`;
    botaoNao.style.top = `${randomY}px`;
});