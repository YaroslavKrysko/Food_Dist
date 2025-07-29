require('es6-promise').polyfill();

import tabs from './modules/tabs';
import modal from './modules/modals'
import timer from './modules/timer';
import slider from './modules/slider';
import form from './modules/form';
import cards from './modules/cards';
import calculator from './modules/calculator';
import { openModal } from './modules/modals';

window.addEventListener('DOMContentLoaded', function () {
const modalTimerId = setTimeout(()=> openModal('.modal', modalTimerId), 300000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items','tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2026-06-11');
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field:'.offer__slider-inner'
    });
    form('form', modalTimerId);
    cards();
    calculator();
});