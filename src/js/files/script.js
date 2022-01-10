// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

import { bodyLockToggle } from './functions.js';

//Dark Mode
const element = document.body,
	switcher = document.querySelector('.switch input');

function darkMode() {
	if (localStorage.getItem('darkMode') != 'dark') {
		element.classList.add('dark-mode');
		localStorage.setItem('darkMode', 'dark');
	} else {
		element.classList.remove('dark-mode');
		localStorage.removeItem('darkMode');
	}
}

switcher.addEventListener('change', darkMode);

if (localStorage.getItem('darkMode') == 'dark') {
	switcher.setAttribute('checked', true);
	element.classList.add('dark-mode');
} else {
	switcher.removeAttribute('checked');
}

//Menu Toggle
let iconMenuToggle = document.querySelector('.toggleButton'),
	iconMenuClose = document.querySelector('.toggleMenu__close'),
	menuBodyToggle = document.querySelector('.toggleMenu'),
	iconMenu = document.querySelector('.icon-menu'),
	iconMenuParent = document.querySelector('.header__hamburger'),
	menuBody = document.querySelector('.menu__body'),
	header = document.querySelector('.header'),
	headerHeight = window.getComputedStyle(header).height;

window.addEventListener('resize', () => {
	headerHeight = window.getComputedStyle(header).height;
});
if (iconMenuToggle != null) {
	let menuBodyToggle = document.querySelector('.toggleMenu');
	iconMenuToggle.addEventListener('click', function (e) {
		iconMenuToggle.classList.toggle('_active');
		menuBodyToggle.classList.toggle('_active');

		if (menuBody.classList.contains('_active')) {
			iconMenu.classList.remove('_active');
			menuBody.classList.remove('_active');
			iconMenuParent.classList.remove('_active');
		} else {
			bodyLockToggle();
		}

		if (!header.classList.contains('sticky')) {
			menuBodyToggle.style.maxHeight = `calc(100vh - ${headerHeight} - 20px)`;
			menuBodyToggle.style.top =
				+headerHeight.slice(0, headerHeight.length - 2) + 8 + 'px';
		} else {
			menuBodyToggle.style.top =
				+headerHeight.slice(0, headerHeight.length - 2) + 8 + 'px';
			menuBodyToggle.style.maxHeight = `calc(100vh - ${headerHeight} - 20px)`;
		}
	});
}

function menuClose() {
	iconMenuToggle.classList.remove('_active');
	menuBodyToggle.classList.remove('_active');
	bodyLockToggle();
}

iconMenuClose.addEventListener('click', menuClose);

// Скрыть меню Toggle при клике вне меню
let hamburgerToggle = document.querySelector('.toggleButton');
let menuToggle = document.querySelector('.toggleMenu');

const toggleMenu2 = () => {
	menuToggle.classList.toggle('_active');
	hamburgerToggle.classList.toggle('_active');
	bodyLockToggle();
};

hamburgerToggle.addEventListener('click', e => {
	e.stopPropagation();
});

document.addEventListener('click', e => {
	let target2 = e.target;
	let its_menu2 = target2 == menuToggle || menuToggle.contains(target2);
	let its_hamburger2 = target2 == hamburgerToggle;
	let menu_is_active2 = menuToggle.classList.contains('_active');

	if (!its_menu2 && !its_hamburger2 && menu_is_active2) {
		toggleMenu2();
	}
});
