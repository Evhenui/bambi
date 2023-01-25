export let cardProductSliders = function () {
    const carProduct = document.querySelector("[data-wrapper-car-product]");
    if (carProduct != null) {
      //----slider zoom----
      const sliderNavZoom = new Swiper('.modal-zoom__container-navigation', {
        direction: 'vertical',
        slidesPerView: 7, 
        spaceBetween: 12, 
        navigation: { 
          nextEl: '.modal-zoom__button-next', 
          prevEl: '.modal-zoom__button-prev'
        },
        freeMode: true, 
        breakpoints: { 
          0: { 
            direction: 'horizontal',
          },
          768: { 
            direction: 'vertical', 
          }
        },
      });


      const sliderMainZoom = new Swiper('.modal-zoom__container-basic', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 32,
        mousewheel: true,
        navigation: {
          nextEl: '.modal-zoom__button-next', 
          prevEl: '.modal-zoom__button-prev'
        },
        grabCursor: true,
        thumbs: { 
          swiper: sliderNavZoom 
        },
        breakpoints: {
          0: { 
            direction: 'horizontal',
          },
          768: { 
            direction: 'horizontal',
          }
        },
        on: {
          init: function () {
              $('.threesixty .nav_bar').css('top', '50px');
              window.mainSwiperPopUp = this;
              window.mainSwiperAttachedEventsPopUp = true;
          },
          slideChange: function() {
              window.mainSwiper.slideTo(this.realIndex, 100, true); // sync to main slaider

              let i360 = this.isEnd && $(this.slides[this.realIndex]).find('.productPopUp').length > 0; // check if 360

              if (i360) {
                  if (window.mainSwiperAttachedEventsPopUp) {
                      this.detachEvents();
                      window.mainSwiperAttachedEventsPopUp = false;
                  }

              } else {
                  if (!window.mainSwiperAttachedEventsPopUp) {
                      this.attachEvents();
                      window.mainSwiperAttachedEventsPopUp = true;
                  }

              }
          }
        }
      });

      //----slider main------
      const sliderMain = new Swiper('.main-slider-card-prod__container-navigation', {
        direction: 'horizontal',
        slidesPerView: 6, 
        spaceBetween: 12, 
        navigation: { 
        nextEl: '.main-slide-card-prodr__button-next', 
        prevEl: '.main-slider-card-prod__button-prev'
        },
        freeMode: true, 
        breakpoints: { 
        0: { 
            slidesPerView: 4.6, 
            spaceBetween: 8, 
            direction: 'horizontal',
        },
        960: { 
            spaceBetween: 12, 
            direction: 'vertical', 
        }
        }
      });

   


      const sliderMainNav = new Swiper('.main-slider-card-prod__container-basic', {
        direction: 'horizontal',
        slidesPerView: 1,
        mousewheel: true,
        navigation: {
        nextEl: '.main-slider-card-prod__button-next', 
        prevEl: '.main-slider-card-prod__button-prev'
        },
        grabCursor: true,
        thumbs: { 
        swiper: sliderMain
        },
        breakpoints: {
        0: { 
            direction: 'horizontal',
        },
        768: { 
            direction: 'horizontal',
        }
        },
        on: {
          init: function () {
              $('.threesixty .nav_bar').css('top', '50px');
              window.mainSwiper = this;
              window.mainSwiperAttachedEvents = true;
          },
          slideChange: function() {
              window.mainSwiperPopUp.slideTo(this.realIndex, 100, true); // sync to main popUp slaider

              let i360 = this.isEnd && $(this.slides[this.realIndex]).find('.product1').length > 0; // check if 360

              if (i360) {
                  if (window.mainSwiperAttachedEvents) {
                      $('.card-product-all-info__slider-button-turn-around').hide();
                      this.detachEvents();
                      window.mainSwiperAttachedEvents = false;
                  }

              } else {
                  if (!window.mainSwiperAttachedEvents) {
                      $('.card-product-all-info__slider-button-turn-around').show();
                      this.attachEvents();
                      window.mainSwiperAttachedEvents = true;
                  }
              }
          }
        }
      }); 


      //----slider footer----
      const sliderFooter = new Swiper('.card-product-spare-parts__slider-container', {
        navigation: {
            nextEl: ".card-product-spare-parts__button-next",
            prevEl: ".card-product-spare-parts__button-prev",
          },
          pagination: {
            el: ".card-product-spare-parts__pagination",
            clickable: true,
            type: 'bullets',
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
          },
          slidesPerView: 4,
          breakpoints: {
            860: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            680: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2.2,
            },
           
            0: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
          },
      });
      //-----slider picture---
      const sliderPictures = new Swiper('.card-product-gallery__slider', {
        pagination: {
          el: ".card-product-gallery__slider-pagination",
          clickable: true,
          type: 'bullets',
        },
          slidesPerView: 4,
          spaceBetween: 16,
          breakpoints: {
            640: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            376: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
            0: {
              slidesPerView: 1.1,
              spaceBetween: 16,
            },
          },
      });
    }
}