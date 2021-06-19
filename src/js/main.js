import modals from './moduls/modals';
import sliders from './moduls/sliders';
import forms from './moduls/forms';
import mask from './moduls/mask';
import checkTextInput from './moduls/checkTextInput';
import showMoreStyles from './moduls/showMoreStyles';
import calc from './moduls/calc';
import  filter from './moduls/filter';
import pictureSize from './moduls/pictureSize';
import accordion from './moduls/accordion';
import burger from './moduls/burger';
import scrolling from './moduls/scrolling';
import drop from './moduls/drop';

document.addEventListener('DOMContentLoaded', ()=>{
    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInput('[name="name"]');
    checkTextInput('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading');
    burger('.burger-menu', '.burger');
    scrolling('.pageup');
    drop();

});