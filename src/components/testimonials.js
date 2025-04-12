export function initializeTestimonials() {
    if (typeof Swiper === 'undefined') {
        console.error('Swiper is not defined. Make sure the Swiper library is loaded.');
        return;
    }

    const swiperElement = document.querySelector('.testimonialSwiper');

    if (!swiperElement) return;

    const swiper = new Swiper('.testimonialSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoHeight: false, // Disabilita l'altezza automatica
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
}
