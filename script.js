document.addEventListener('DOMContentLoaded', () => {
    // Basic interaction for buttons
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(`Navigating to ${button.textContent}`);
            alert(`Navegando a la sección: ${button.textContent}`);
        });
    });

    const leerMasBtn = document.querySelector('.action-button');
    if (leerMasBtn) {
        leerMasBtn.addEventListener('click', () => {
            console.log('Cargando más información histórica...');
            alert('Cargando más información de Desarrollo histórico...');
        });
    }

    const videoImage = document.querySelector('.video-image');
    if (videoImage) {
        videoImage.style.cursor = 'pointer';
        videoImage.addEventListener('click', () => {
            window.open('https://www.youtube.com/c/ValleGrande', '_blank');
        });
    }
});
