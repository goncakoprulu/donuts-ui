document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('.image-container');
    imageContainer.addEventListener('mouseover', () => {
        imageContainer.classList.add('hovered');
    });
    imageContainer.addEventListener('mouseout', () => {
        imageContainer.classList.remove('hovered');
    });
});
