const initSlider = () => {
    const wrapper = document.querySelector('.benefits-wrap');
    const slides = document.querySelectorAll('.benefits__item');
    const prevBtn = document.querySelector('.benefits__arrow--left');
    const nextBtn = document.querySelector('.benefits__arrow--right');
    
    if (!wrapper || !slides.length) return;
    
    let currentIndex = 0;
    let slidesToShow = window.innerWidth < 576 ? 1 : 3;
    const totalSlides = slides.length;
    
    const update = () => {
        // Сначала скрываем все слайды
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        // Показываем нужное количество слайдов
        for (let i = currentIndex; i < currentIndex + slidesToShow && i < totalSlides; i++) {
            slides[i].style.display = '';
        }
        
        // Обновляем состояние кнопок
        if (prevBtn) {
            prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
            prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
        }
        
        if (nextBtn) {
            const maxIndex = totalSlides - slidesToShow;
            nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
            nextBtn.style.cursor = currentIndex >= maxIndex ? 'not-allowed' : 'pointer';
        }
    };
    
    const next = () => {
        const maxIndex = totalSlides - slidesToShow;
        if (currentIndex < maxIndex) {
            currentIndex++;
            update();
        }
    };
    
    const prev = () => {
        if (currentIndex > 0) {
            currentIndex--;
            update();
        }
    };
    
    const onResize = () => {
        const newSlidesToShow = window.innerWidth < 576 ? 1 : 3;
        if (newSlidesToShow !== slidesToShow) {
            slidesToShow = newSlidesToShow;
            currentIndex = 0;
            update();
        }
    };
    
    // Стили для wrapper
    wrapper.style.display = 'flex';
    wrapper.style.gap = '20px';
    
    update();
    
    window.addEventListener('resize', () => {
        setTimeout(onResize, 150);
    });
    
    if (prevBtn) prevBtn.addEventListener('click', prev);
    if (nextBtn) nextBtn.addEventListener('click', next);
};

export default initSlider;