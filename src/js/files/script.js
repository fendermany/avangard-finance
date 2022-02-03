// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

import { bodyLockToggle } from './functions.js';

import { bodyLockStatus } from './functions.js';

import { bodyLock } from './functions.js';

import { bodyUnlock } from './functions.js';

import { menuClose } from './functions.js';

//\\//\\//\\\//\\ Dark Mode //\\//\\//\\\//\\

// Переменные
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

//\\//\\//\\\//\\ Меню услуги //\\//\\//\\\//\\

// Переменные
let toggleMenuButton = document.querySelector('.toggleButton'),
	toggleMenuCloseButton = document.querySelector('.toggleMenu__close'),
	toggleMenuBody = document.querySelector('.toggleMenu'),
	header = document.querySelector('.header'),
	headerHeight = window.getComputedStyle(header).height;

// Изменение высоты хедера при изменение ширины экрана
window.addEventListener('resize', () => {
	headerHeight = window.getComputedStyle(header).height;
});

// Нажатия кнопки меню "Услуги"
if (toggleMenuButton) {
	document.addEventListener('click', function (e) {
		if (bodyLockStatus && e.target.closest('.toggleButton')) {
			bodyLockToggle();
			document.documentElement.classList.toggle('toggle-open');

			toggleMenuBody.style.top =
				+headerHeight.slice(0, headerHeight.length - 2) + 8 + 'px';
			// Поиск оптимального расположения
			if (!header.classList.contains('sticky')) {
				toggleMenuBody.style.maxHeight = `calc(100vh - ${headerHeight})`;
			} else {
				toggleMenuBody.style.top =
					toggleMenuBody.style.maxHeight = `calc(100vh - ${headerHeight})`;
			}
		}
	});
}

// Функция закрытия меню "Услуги"
function toggleMenuClose() {
	bodyUnlock();
	document.documentElement.classList.remove('toggle-open');
}

// Нажатия крестика внутри меню "Услуги"
if (toggleMenuCloseButton) {
	document.addEventListener('click', function (e) {
		if (bodyLockStatus && e.target.closest('.toggleMenu__close')) {
			toggleMenuClose();
		}
	});
}

// Закрытие меню "Услуги" при клике вне меню
document.addEventListener('click', e => {
	let its_toggleMenu =
		e.target == toggleMenuBody || toggleMenuBody.contains(e.target);
	let its_toggleMenuButton =
		e.target == toggleMenuButton || toggleMenuButton.contains(e.target);
	let toggleMenu_is_active =
		document.documentElement.classList.contains('toggle-open');

	if (!its_toggleMenu && !its_toggleMenuButton && toggleMenu_is_active) {
		toggleMenuClose();
	}
});

//\\//\\//\\\//\\ Menu Hamburger //\\//\\//\\\//\\

// Переменные
const hamburger = document.querySelector('.icon-menu'),
	menuBody = document.querySelector('.topmenu');

// Закрытия меню при клике вне меню
document.addEventListener('click', e => {
	let its_menu = e.target == menuBody || menuBody.contains(e.target);
	let its_hamburger = e.target == hamburger || hamburger.contains(e.target);
	let menu_is_active = document.documentElement.classList.contains('menu-open');

	if (!its_menu && !its_hamburger && menu_is_active) {
		menuClose();
	}
});

//\\//\\//\\\//\\ Filter checkboxes //\\//\\//\\\//\\

const showMoreButtons = document.querySelectorAll('[data-showmore-button]');

showMoreButtons.forEach(item => {
	const oldText = item.innerHTML;

	item.addEventListener('click', e => {
		e.target.classList.toggle('_active');
		if (e.target.classList.contains('_active')) {
			item.innerHTML = 'Скрыть';
		} else {
			e.target.innerHTML = oldText;
		}
	});
});

//\\//\\//\\\//\\ Menu Filter //\\//\\//\\\//\\

// Переменные
const filterButton = document.querySelector('.showfilter'),
	filterBody = document.querySelector('.page__filter'),
	filterWrapper = document.querySelector('.filter__wrapper'),
	filterInner = document.querySelector('.filter__inner'),
	filterCloseButton = document.querySelector('.filter__back'),
	filterTitle = document.querySelector('.filter__bigtitle'),
	headerTop = document.querySelector('.header__top'),
	headerTopHeight = window.getComputedStyle(headerTop).height;

if (filterBody) {
	// Нажатия кнопки фильтра
	document.addEventListener('click', function (e) {
		if (bodyLockStatus && e.target.closest('.showfilter')) {
			bodyLockToggle();
			document.documentElement.classList.toggle('filter-open');
			filterBody.style.width = '100%';
			filterBody.style.padding = '15px';
			filterInner.style.paddingBottom = '40px';
			// Поиск оптимального расположения
			if (document.documentElement.scrollTop > 100) {
				filterBody.style.top = document.documentElement.scrollTop + 'px';
				filterInner.style.height = `100%`;
				filterInner.style.maxHeight = '100vh';
			} else {
				filterBody.style.top =
					+headerHeight.slice(0, headerHeight.length - 2) + 8 + 'px';
				filterInner.style.maxHeight = `calc(100vh - ${headerHeight})`;
			}
		}
	});

	// Скрыть фильтр
	function hideFilter() {
		bodyUnlock();
		document.documentElement.classList.remove('filter-open');
	}

	// Клие по кнопке "Назад"
	document.addEventListener('click', function (e) {
		if (bodyLockStatus && e.target.closest('.filter__back')) {
			hideFilter();
		}
	});
	// Закрытия фильтра при клике вне его
	document.addEventListener('click', e => {
		let its_filter = e.target == filterBody || filterBody.contains(e.target);
		let its_filterButton =
			e.target == filterButton || filterButton.contains(e.target);
		let filter_is_active =
			document.documentElement.classList.contains('filter-open');

		if (!its_filter && !its_filterButton && filter_is_active) {
			hideFilter();
		}
	});
}

// Фикс заблокировки
document.addEventListener('click', function (e) {
	if (
		document.documentElement.classList.contains('lock') &&
		!e.target.closest('.showfilter') &&
		!e.target.closest('.filter') &&
		!e.target.closest('.icon-menu') &&
		!e.target.closest('.topmenu') &&
		!e.target.closest('.toggleButton') &&
		!e.target.closest('.toggleMenu')
	) {
		bodyUnlock();
	}
});

// Поднятие кнопки фильтра

if (filterBody) {
	const filterResultsButton = document.querySelector('.filter__btn'),
		filterResultsButtonAbsolute = document.querySelector(
			'.filter__btn-absolute'
		),
		filterResultsButtonHeight =
			window.getComputedStyle(filterResultsButton).height;

	filterInner.addEventListener('scroll', () => {
		if (
			filterResultsButton.getBoundingClientRect().top >
			window.innerHeight -
				+filterResultsButtonHeight.slice(
					0,
					filterResultsButtonHeight.length - 2
				)
		) {
			filterResultsButtonAbsolute.style.display = 'block';
			filterResultsButton.style.visibility = 'hidden';
			filterResultsButtonAbsolute.style.bottom = '40px';
		} else {
			filterResultsButtonAbsolute.style.display = 'none';
			filterResultsButton.style.visibility = 'visible';
			filterResultsButtonAbsolute.style.bottom = '';
		}
	});
}

//\\//\\//\\\//\\ Авторизация //\\//\\//\\\//\\

// Переменные
const auth = document.querySelector('.auth'),
	authOnlineBody = document.querySelector('.auth__online'),
	authListBody = document.querySelector('.auth__list');

// Клик
document.addEventListener('click', e => {
	if (e.target.closest('.auth__online')) {
		document.documentElement.classList.toggle('auth-open');
	}
});

// // Наведение мыши
// document.addEventListener('mouseover', e => {
// 	if (e.target.closest('.auth__online')) {
// 		document.documentElement.classList.add('auth-open');
// 	}
// });

// Снятие мышки
document.addEventListener('mouseout', e => {
	if (e.target.closest('.auth__list')) {
		document.documentElement.classList.remove('auth-open');
	}
});

// Закрытие меню авторизации при клике вне меню
document.addEventListener('click', e => {
	let its_authMenu =
		e.target == authListBody || authListBody.contains(e.target);
	let its_authMenuButton = e.target == auth || auth.contains(e.target);
	let authMenu_is_active =
		document.documentElement.classList.contains('auth-open');

	if (!its_authMenu && !its_authMenuButton && authMenu_is_active) {
		document.documentElement.classList.remove('auth-open');
	}
});



//\\//\\//\\\//\\ Редактирование //\\//\\//\\\//\\