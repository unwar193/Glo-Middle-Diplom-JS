const services = () => {
const servicesSection = document.getElementById('services');
if (servicesSection) {
    const slides = Array.from(servicesSection.querySelectorAll('.col-md-12'));
    const leftArrow = servicesSection.querySelector('.services__arrow--left');
    const rightArrow = servicesSection.querySelector('.services__arrow--right');
    const modal = document.querySelector('.services-modal');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.services-modal__close');
    
    let currentIndex = 0;
    let slidesPerView = window.innerWidth >= 576 ? 2 : 1;

    function renderSlides() {
        slides.forEach(slide => slide.style.display = 'none');
        
        for (let i = currentIndex; i < currentIndex + slidesPerView && i < slides.length; i++) {
            if (slides[i]) slides[i].style.display = 'block';
        }
        
        if (leftArrow) {
            leftArrow.style.opacity = currentIndex === 0 ? '0.5' : '1';
            leftArrow.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
        }
        if (rightArrow) {
            rightArrow.style.opacity = currentIndex + slidesPerView >= slides.length ? '0.5' : '1';
            rightArrow.style.pointerEvents = currentIndex + slidesPerView >= slides.length ? 'none' : 'auto';
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex -= slidesPerView;
            if (currentIndex < 0) currentIndex = 0;
            renderSlides();
        }
    }

    function nextSlide() {
        if (currentIndex + slidesPerView < slides.length) {
            currentIndex += slidesPerView;
            renderSlides();
        }
    }

    function openModal(event) {
        event.preventDefault();
        const slide = event.currentTarget.closest('.col-md-12');
        const title = slide ? slide.querySelector('h3').textContent : '';
        
        if (modal) {
            modal.style.display = 'block';
            const titleElem = modal.querySelector('.box-modal_topic');
            if (titleElem) titleElem.textContent = title;
            const subjectInput = modal.querySelector('input[name="subject"]');
            if (subjectInput) subjectInput.value = title;
        }
        if (overlay) overlay.style.display = 'block';
    }

    function closeModal() {
        if (modal) modal.style.display = 'none';
        if (overlay) overlay.style.display = 'none';
    }

    function handleResize() {
        const newPerView = window.innerWidth >= 576 ? 2 : 1;
        if (newPerView !== slidesPerView) {
            slidesPerView = newPerView;
            currentIndex = 0;
            renderSlides();
        }
    }

    if (leftArrow) leftArrow.addEventListener('click', prevSlide);
    if (rightArrow) rightArrow.addEventListener('click', nextSlide);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);
    window.addEventListener('resize', handleResize);

    slides.forEach(slide => {
        const btns = slide.querySelectorAll('.service-button .btn');
        btns.forEach(btn => btn.addEventListener('click', openModal));
    });

    renderSlides();
}
}

export default services
