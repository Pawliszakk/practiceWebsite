const burgerOpenBtn = document.querySelector('.nav__burger-btn-open')
const burgerCloseBtn = document.querySelector('.nav__burger-btn-close')
const navigation = document.querySelector('.nav__navigation')
const navAnchors = document.querySelectorAll('.nav__navigation a')

const handleNav = () => {
	if (burgerOpenBtn.classList.contains('active')) {
		navigation.classList.add('open-nav')
		burgerCloseBtn.classList.add('active')
		burgerOpenBtn.classList.remove('active')
	} else {
		burgerCloseBtn.classList.remove('active')
		burgerOpenBtn.classList.add('active')
		navigation.classList.remove('open-nav')
	}
}

navAnchors.forEach(anchor => {
	anchor.addEventListener('click', handleNav)
})
burgerCloseBtn.addEventListener('click', handleNav)
burgerOpenBtn.addEventListener('click', handleNav)
