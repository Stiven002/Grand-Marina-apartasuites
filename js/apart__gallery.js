var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: false,
    watchSlidesProgress: true,
    allowTouchMove: true, 
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        // when window width is >= 320px
        770: {
            slidesPerView: 4,
            spaceBetween: 10
        }
    },
    breakpoints: {
        // when window width is >= 320px
        1021: {
            slidesPerView: 5,
            spaceBetween: 20
        }
    }
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    allowTouchMove: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
    autoplay: {
        delay: 5000,
    },
});