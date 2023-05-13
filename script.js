const toggleButton = document.querySelector('#mode-toggle');

toggleButton.addEventListener('click', () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Cambiar a modo claro';
    } else {
        toggleButton.textContent = 'Cambiar a modo oscuro';
    }
});