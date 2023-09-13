const burgerOpenBtn = document.querySelector('.nav__burger-open');
const burgerCloseBtn = document.querySelector('.nav__burger-close');
const nav = document.querySelector('.nav__navigation');
const navAnchors = document.querySelectorAll('.nav__navigation a');

console.log(burgerCloseBtn, burgerOpenBtn, nav, navAnchors);

const handleNav = () => {
	nav.classList.toggle('open-nav');
	burgerCloseBtn.classList.toggle('active');
	burgerOpenBtn.classList.toggle('active');
};

navAnchors.forEach((a) => a.addEventListener('click', handleNav));

burgerCloseBtn.addEventListener('click', handleNav);
burgerOpenBtn.addEventListener('click', handleNav);
