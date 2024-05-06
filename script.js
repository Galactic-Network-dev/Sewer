function redirectTo(url) {
    window.location.href = url;
}

const shiningButtons = document.querySelectorAll('.shiningButton');

shiningButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('shine-animation');
    });

    button.addEventListener('mouseleave', () => {
        button.classList.remove('shine-animation');
    });
});
