const menuBtn = document.querySelector('.menu__btn')

menuBtn.addEventListener('click', function() {
	menuBtn.classList.toggle('menu__btn--open');
})