export let mainPageMainSlider = function() {
    const mainSliderBr = document.querySelector('[data-main-page-main-slider]')
    if(mainSliderBr != null) {
        let widthScreenMain = window.innerWidth;
        let hidthSizePageMain = document.documentElement.clientHeight;
        const mainCont = document.querySelector('.js-main');
        //слайдер swiper
        const sliderWrpMainPage = document.querySelector('.main-slider');
        if(sliderWrpMainPage != null) {
            const mainSlider =  new Swiper('.main-slider', {
                //Стрелки
                navigation: {
                    // nextEl: '.btn-next',
                    // prevEl: '.btn-prev'
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                //Навигация
                //пргресс бар
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    spaceBetween: 30,
                    // dynamicBullets: true,
                },
                grabCursor: true,
                loop: true,
                autoplay: {
                    delay: 5000,
                    stopOnLastSlide: true,
                    disableOnInteraction: true,
                }
            });
        }
        

        positionBtnSlider();
        window.addEventListener('resize', () => {
            widthScreenMain = window.innerWidth;
            if(widthScreenMain <= 460) {
              /*   menuHeader.style.setProperty('width', widthScreenMain + 'px'); */

            }
            positionBtnSlider();
        })

    //кнопки слайдера их растояние от экрана 

    

        function positionBtnSlider () {
            const btnSliderLeft = mainCont.querySelector('.js-btn-left-slider');
            const btnSliderRight = mainCont.querySelector('.js-btn-right-slider');
            if(btnSliderLeft != null && btnSliderRight != null) {
                if(widthScreenMain > 1440) {
                    btnSliderLeft.style.setProperty('left', ((widthScreenMain - 1344) / 2) + 'px');
                    btnSliderRight.style.setProperty('right', ((widthScreenMain - 1344) / 2) + 'px');
                }
            }
        }
            const imgSliderMain = document.querySelector('.js-img-slider');
            if(imgSliderMain != null) {
                imgSliderMain.style.setProperty('height', hidthSizePageMain + 'px');
            }

        const heightSliderText = document.querySelector('.js-height-slider-text');
        const heightSlider = document.querySelector('.js-height-slider')
        if(heightSliderText != null && heightSlider != null) {

            window.getComputedStyle(heightSlider).getPropertyValue('--width-page');
            heightSlider.style.setProperty('--width-page', widthScreenMain + 'px');

            window.getComputedStyle(heightSlider).getPropertyValue('--height-monitor');
            heightSlider.style.setProperty('--height-monitor', hidthSizePageMain + 'px');
        }
    }
}