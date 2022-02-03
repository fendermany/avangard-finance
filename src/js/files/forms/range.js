// Подключение из node_modules
import * as noUiSlider from 'nouislider';
// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss
import '@js/libs/wNumb.min';
// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const stepsSlider = document.getElementById('steps-slider'),
		input0 = document.getElementById('range_min'),
		input1 = document.getElementById('range_max'),
		inputs = [input0, input1];

	if (stepsSlider) {
		noUiSlider.create(stepsSlider, {
			start: [200000, 10000000],
			animate: true,
			animationDuration: 1600,
			format: wNumb({
				decimals: 0,
				thousand: ' ',
			}),
			connect: true,
			tooltips: false,
			range: {
				min: [200000, 50000],
				'50%': [5000000, 500000],
				max: 10000000,
			},
		});

		stepsSlider.noUiSlider.on('update', function (values, handle) {
			inputs[handle].value = values[handle];
			// console.log(stepsSlider.noUiSlider.get());
		});

		const setButton500 = document.getElementById('set-sliders-500'),
			setButton10 = document.getElementById('set-sliders-10');

		setButton500.addEventListener('click', function (e) {
			stepsSlider.noUiSlider.set([200000, 500000]);
			e.target.classList.add('_active');
			setButton10.classList.remove('_active');
		});

		setButton10.addEventListener('click', function (e) {
			stepsSlider.noUiSlider.set([200000, 10000000]);
			e.target.classList.add('_active');
			setButton500.classList.remove('_active');
		});

		input0.addEventListener('input', function () {
			stepsSlider.noUiSlider.set([this.value, null]);
		});

		input1.addEventListener('input', function () {
			stepsSlider.noUiSlider.set([null, this.value]);
		});
	}
}
rangeInit();
