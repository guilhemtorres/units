document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');

    if (!burger || !nav) return;

    burger.addEventListener('click', () => {
        burger.classList.toggle('is-open');
        nav.classList.toggle('is-open');
    });
});