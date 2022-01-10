/* Маски для полей (в работе) */

// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import "inputmask/dist/inputmask.min.js";

const inputMasks = document.querySelectorAll('input[name=phone]');
if (inputMasks.length) {
	flsModules.inputmask = Inputmask({"mask": "+7 (***)-***-****"}).mask(inputMasks);
}