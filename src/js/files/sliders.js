/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Lazy, EffectFade, Autoplay } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import '../../scss/base/swiper.scss';
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
// function bildSliders() {
// 	//BildSlider
// 	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
// 	if (sliders) {
// 		sliders.forEach(slider => {
// 			slider.parentElement.classList.add('swiper');
// 			slider.classList.add('swiper-wrapper');
// 			for (const slide of slider.children) {
// 				slide.classList.add('swiper-slide');
// 			}
// 		});
// 	}
// }
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	// bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.about__slider')) {
		new Swiper('.about__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Lazy],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			lazy: true,
			// Dotts
			//pagination: {
			//	el: '.slider-quality__pagging',
			//	clickable: true,
			//},
			// Arrows
			navigation: {
				nextEl: '.about__more .more__item_next',
				prevEl: '.about__more .more__item_prev',
			},

			breakpoints: {
				0: {
					spaceBetween: 10,
				},
				768: {
					spaceBetween: 30,
				},
			},

			on: {},
		});
	}

	if (document.querySelector('.topbar-cars')) {
		new Swiper('.topbar-cars', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Lazy],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 12,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			lazy: true,
			// Dotts
			//pagination: {
			//	el: '.slider-quality__pagging',
			//	clickable: true,
			//},
			// Arrows
			navigation: {
				nextEl: '.topbar-cars-next',
				prevEl: '.topbar-cars-prev',
			},

			// breakpoints: {
			// 	0: {
			// 		spaceBetween: 10,
			// 	},
			// 	768: {
			// 		spaceBetween: 30,
			// 	},
			// },

			on: {},
		});
	}
	if (document.querySelector('.enter-mobile__slider')) {
		new Swiper('.enter-mobile__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, Navigation, Lazy],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 500,
			// autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			lazy: true,
			// Dotts
			pagination: {
				el: '.enter-mobile__pagination',
				clickable: true,
			},
			// Arrows
			navigation: {
				nextEl: '.enter-mobile-button-next',
				prevEl: '.enter-mobile-button-prev',
			},

			// breakpoints: {
			// 	0: {
			// 		spaceBetween: 10,
			// 	},
			// 	768: {
			// 		spaceBetween: 30,
			// 	},
			// },

			on: {},
		});
	}
	if (document.querySelector('.enter-desktop__slider')) {
		new Swiper('.enter-desktop__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, Navigation, Lazy, EffectFade, Autoplay],
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			// autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			lazy: true,
			// Dotts
			pagination: {
				el: '.enter-desktop__pagination',
				clickable: true,
			},
			// Arrows
			// navigation: {
			// 	nextEl: '.enter-desktop-button-next',
			// 	prevEl: '.enter-desktop-button-prev',
			// },

			// breakpoints: {
			// 	0: {
			// 		spaceBetween: 10,
			// 	},
			// 	768: {
			// 		spaceBetween: 30,
			// 	},
			// },

			on: {},
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	// bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar =
				sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false,
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener('DOMContentLoaded', function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
