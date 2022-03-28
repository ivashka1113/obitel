const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelectorAll('.modal__button');
const modalClose = document.querySelector('.modal__close');
const body = document.querySelector('body');

buttonModal.forEach((item) => {
    item.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
        body.classList.add('nonscroll');
    });
});

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('modal__inner');
    if (!isModal) {
        modalWindow.style.display = 'none';
        body.classList.remove('nonscroll');
    }
});

modalClose.addEventListener('click', () => {
    modalWindow.style.display = 'none';
    body.classList.remove('nonscroll');
});