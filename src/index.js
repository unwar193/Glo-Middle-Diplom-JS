import modal from "./modules/modal.js";
import initSlider from './modules/benefitsCarousel.js'

modal();
document.addEventListener('DOMContentLoaded', () => {
    initSlider();
});