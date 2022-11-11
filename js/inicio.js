let index = 1;

showSlider(index);

setInterval(()=>{
    showSlider(index+=1);
}, 8000);

function showSlider(n){
    let i;
    const slider = document.getElementsByClassName('miSlider');

    if(n > slider.length){
        index = 1;
    }
    if(n < 1){
        index = slider.length();
    }
    for(i = 0; i < slider.length; i++){
        slider[i].style.display = 'none';
    }

    slider[index-1].style.display = 'block';
}


const swiper = new Swiper('.swiper-hero', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    allowTouchMove: true, 


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar


    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    breakpoints: {
        // when window width is >= 320px
        1021: {
            slidesPerView: 2,
            spaceBetween: 60
        }
    }
});