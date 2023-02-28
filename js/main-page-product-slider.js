export let mainPageProductSlider = function() {
    const productSliderWrp = document.querySelector('.js-product-slider');
    if(productSliderWrp != null) {
        const productSliderBtm = productSliderWrp.querySelectorAll('.js-product-slider-btm');
        const productSliderLine = productSliderWrp.querySelectorAll('.js-product-slider-line');
        const productSliderContent = productSliderWrp.querySelectorAll('.js-product-slider-content')
        productSliderBtm.forEach((el, index) => {
            el.addEventListener('click', () => {
                delActive(productSliderLine);
                delActive(productSliderContent);
                productSliderContent[index].classList.add('active')
                el.querySelector('.js-product-slider-line').classList.add('active');
            })
        });
        function delActive(param) {
            param.forEach((item) => {
                item.classList.remove('active')
            })
        }
        new Swiper('.main-page-product__carousel-top', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function(index, className) {
                    if(window.innerWidth > 860) {
                        return '<span class="'+ className + '">' + (index + 1) + '</span>'
                    } else {
                        return '<span class="'+ className + '">' + '</span>'
                    }
                }    
            },
            slidesPerView: 4,
            breakpoints: {
                1180: {
                    lidesPerView: 3,
                    spaceBetween: 48,
                },
                860: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                680: {
                    slidesPerView: 2.5,
                    spaceBetween: 16,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                460: {
                    slidesPerView: 1.8,
                    spaceBetween: 16,
                },
                440: {
                    slidesPerView: 1.2,
                    spaceBetween: 16,

                },
                0: {
                    slidesPerView: 1.1,
                    spaceBetween: 16,
                    // spaceBetween: 8,
                }
            }
        });
    }
}