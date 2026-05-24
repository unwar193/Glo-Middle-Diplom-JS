const smoothScroll = () => {
    const scrollBtn = document.querySelector(".smooth-scroll");
    const firstSection = document.querySelector("#offer"); // ищем первую секцию (проверь класс!)

    if (!scrollBtn || !firstSection) return;

    // изначально скрыта
    scrollBtn.style.display = "none";

    // следим за прокруткой
    window.addEventListener("scroll", () => {
        const sectionBottom = firstSection.offsetTop + firstSection.offsetHeight;

        if (window.scrollY > sectionBottom) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    // плавный скролл вверх
    scrollBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

export default smoothScroll
