export let cardProductSliders = function () {
    const carProduct = document.querySelector("[data-wrapper-car-product]");
    const dualSlide = document.querySelector('[data-dual-slider]');
    if (carProduct != null) {

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

    if(dualSlide !== null) {
      const nextSlide = dualSlide.querySelector('[data-next-slide]');
      const prevSlide = dualSlide.querySelector('[data-prev-slide]');
      const pagination = dualSlide.querySelector('[data-pagination]');
      const slidesPreview = dualSlide.querySelectorAll('[data-slides-preview]');
      const sliderMain = dualSlide.querySelector('[data-slider-main]');
      const slidesMain = dualSlide.querySelectorAll('[data-slides-main]');
      const btnModal = dualSlide.querySelector('[data-btn-modal-zoom]');
      const modalZoom = document.querySelector('[data-modal-zoom]');
      const paginationWrp = document.querySelector('[data-pagination-wrp]');

      const nextSlideZoom = document.querySelector('[data-next-slide-zoom]');
      const prevSlideZoom = document.querySelector('[data-prev-slide-zoom]');
      const paginationZoom = document.querySelector('[data-pagination-zoom]');
      const slidesPreviewZoom = document.querySelectorAll('[data-slides-preview-zoom]');
      const sliderMainZoom = document.querySelector('[data-slider-main-zoom]');
      const slidesMainZoom = document.querySelectorAll('[data-slides-main-zoom]');
      const body = document.querySelector("#body-cont");
      const movingBtn = document.querySelector('[data-moving-btn]');

      let counter = 0;
      let sliderLength = pagination.children.length;
      let indexSlide = 0;
      let activeTouches = false;
      let startPosition = 0;
      let positionLeft = 0;
      let moving = 0;
      let difference = 0;

//----------------------slider----------------------------------------
      function delActive(items) {
        items.forEach(el => {
          el.classList.remove('active');
        });
      }

      function changeSlider() {
        delActive(slidesPreview)
        slidesPreview[indexSlide].classList.add('active');

        pagination.scrollTop = counter * slidesPreview[0].offsetWidth;

        sliderMain.style.transform = `translateX(-${counter * slidesMain[0].offsetWidth}px)`;
      }

      function changeSliderModal() {
        delActive(slidesPreviewZoom)
        slidesPreviewZoom[indexSlide].classList.add('active');

        if(slidesPreviewZoom[indexSlide].id) {
          movingBtn.classList.add('hidden')
        }else {
          movingBtn.classList.remove('hidden')
        }

        paginationZoom.scrollTop = counter * slidesPreviewZoom[0].offsetWidth;

        sliderMainZoom.style.transform = `translateX(-${counter * slidesMainZoom[0].offsetWidth}px)`;
      }

      function changeCounter(state) {
        if(state) {
          indexSlide++;
          counter++;

          delActive(slidesPreview)
          slidesPreview[indexSlide].classList.add('active');

          if(slidesPreview[counter].id) {
            movingBtn.classList.remove('ok')
          }else {
            movingBtn.classList.add('ok')
          }

          if(window.innerWidth > 960) {
            pagination.scrollTop = counter * slidesPreview[0].offsetWidth;
          } else {
            paginationWrp.scrollLeft = counter * slidesPreview[0].offsetWidth;
          }
          

          sliderMain.style.transform = `translateX(-${counter * slidesMain[0].offsetWidth}px)`;
        } else {
          indexSlide--;
          counter--;

          delActive(slidesPreview)
          slidesPreview[indexSlide].classList.add('active');

          if(slidesPreview[counter].id) {
            movingBtn.classList.remove('ok')
          }else {
            movingBtn.classList.add('ok')
          }

          if(window.innerWidth > 960) {
            pagination.scrollTop = counter * slidesPreview[0].offsetWidth;
          } else {
            paginationWrp.scrollLeft = counter * slidesPreview[0].offsetWidth;
          }

          sliderMain.style.transform = `translateX(-${counter * slidesMain[0].offsetWidth}px)`;
        }
      }

      function changeCounterZoom(state) {
        if(state) {
          indexSlide++;
          counter++;

          delActive(slidesPreviewZoom)
          slidesPreviewZoom[indexSlide].classList.add('active');

          paginationZoom.scrollTop = counter * slidesPreviewZoom[0].offsetWidth;

          sliderMainZoom.style.transform = `translateX(-${counter * slidesMainZoom[0].offsetWidth}px)`;
        } else {
          indexSlide--;
          counter--;

          delActive(slidesPreviewZoom)
          slidesPreviewZoom[indexSlide].classList.add('active');

          paginationZoom.scrollTop = counter * 64;

          sliderMainZoom.style.transform = `translateX(-${counter * slidesMainZoom[0].offsetWidth}px)`;
        }
      }

      slidesPreview[indexSlide].classList.add('active');
      slidesPreviewZoom[indexSlide].classList.add('active');

      nextSlide.addEventListener('click', () => {
        if (counter < sliderLength - 1) {
          changeCounter(true)
          changeSliderModal()
        }
      })

      prevSlide.addEventListener('click', () => {
        if (counter !== 0) {
          changeCounter(false)
          changeSliderModal()
        }
      }) 

      window.addEventListener('resize', () => {
        pagination.scrollTop = 0;
        counter = 0;
        indexSlide = 0;

        delActive(slidesPreview)
        slidesPreview[0].classList.add('active');

        sliderMain.style.transform = `translateX(${0}px)`;
      })

      slidesPreview.forEach((el, index) => {
        el.addEventListener('click', () => {
          indexSlide = index;
          counter = index;
          changeSliderModal()

          delActive(slidesPreview)
          slidesPreview[index].classList.add('active')

          pagination.scrollTop = counter * slidesPreview[0].offsetWidth;

          sliderMain.style.transform = `translateX(-${counter * slidesMain[0].offsetWidth}px)`;
        })
      })

      sliderMain.addEventListener('touchstart', (event) => {
        activeTouches = true;
        positionLeft = event.touches[0].clientX;
        startPosition = event.touches[0].clientX;
      })

      sliderMain.addEventListener('touchmove', (event) => {
        if (activeTouches) {
          const positionMove = event.touches[0].clientX;
          const diff = positionMove - positionLeft;
          const fingerSpace = 30;
        
          if (
            startPosition - event.touches[0].clientX < fingerSpace &&
            startPosition - event.touches[0].clientX > - fingerSpace
          ) {
            return false;
          } else {
            if (!positionLeft) return false;
        
            difference = diff;
        
            if (difference > 0) {
              if (counter !== 0) {
                changeCounter(false)
                changeSliderModal()
              }
            } else {
              if (counter !== sliderLength - 1) {
                changeCounter(true)
                changeSliderModal()
              }
            }
            positionLeft = null;
          }
        }
      })

      sliderMain.addEventListener('touchend', () => {
        activeTouches = false;
      })
      
      sliderMain.addEventListener('mousedown', (event) => {
        activeTouches = true;
        positionLeft = event.pageX;

        sliderMain.classList.add('move');
        startPosition = event.pageX;
      })

      sliderMain.addEventListener('mousemove', (event) => {
        if (activeTouches) {
          const positionMove = event.pageX;
          const diff = positionMove - positionLeft;
          const fingerSpace = 30;
        
          if (
            startPosition - event.pageX < fingerSpace &&
            startPosition - event.pageX > - fingerSpace
          ) {
            return false;
          } else {
            if (!positionLeft) return false;
        
            difference = diff;
        
            if (difference > 0) {
              if (counter !== 0) {
                changeCounter(false)
                changeSliderModal()
              }
            } else {
              if (counter !== sliderLength - 1) {
                changeCounter(true)
                changeSliderModal()
              }
            }
            positionLeft = null;
          }
        }
      })
      
      sliderMain.addEventListener('mouseup', () => {
        activeTouches = false;
        sliderMain.classList.remove('move');
      })

      btnModal.addEventListener('click', () => {
        modalZoom.classList.add('active');
        document.documentElement.style.overflow = "hidden";
      })
//-------------------------------------------------------------------

    
      nextSlideZoom.addEventListener('click', () => {
        if (counter < sliderLength - 1) {
          changeCounterZoom(true)
          changeSlider()
        }
      })

      prevSlideZoom.addEventListener('click', () => {
        if (counter !== 0) {
          changeCounterZoom(false)
          changeSlider()
        }
      }) 

      window.addEventListener('resize', () => {
        paginationZoom.scrollTop = 0;
        counter = 0;
        indexSlide = 0;

        delActive(slidesPreviewZoom)
        slidesPreviewZoom[0].classList.add('active');

        sliderMainZoom.style.transform = `translateX(${0}px)`;
      })

      slidesPreviewZoom.forEach((el, index) => {
        el.addEventListener('click', () => {
          indexSlide = index;
          counter = index;
          changeSlider()

          delActive(slidesPreviewZoom)
          slidesPreviewZoom[index].classList.add('active')

          paginationZoom.scrollTop = counter * slidesPreviewZoom[0].offsetWidth;

          sliderMainZoom.style.transform = `translateX(-${counter * slidesMainZoom[0].offsetWidth}px)`;
        })
      })

      sliderMainZoom.addEventListener('touchstart', (event) => {
        activeTouches = true;
        positionLeft = event.touches[0].clientX;
        startPosition = event.touches[0].clientX;
      })

      sliderMainZoom.addEventListener('touchmove', (event) => {
        if (activeTouches) {
          const positionMove = event.touches[0].clientX;
          const diff = positionMove - positionLeft;
          const fingerSpace = 30;
        
          if (
            startPosition - event.touches[0].clientX < fingerSpace &&
            startPosition - event.touches[0].clientX > - fingerSpace
          ) {
            return false;
          } else {
            if (!positionLeft) return false;
        
            difference = diff;
        
            if (difference > 0) {
              if (counter !== 0) {
                changeCounterZoom(false)
                changeSlider()
              }
            } else {
              if (counter !== sliderLength - 1) {
                changeCounterZoom(true)
                changeSlider()
              }
            }
            positionLeft = null;
          }
        }
      })

      sliderMainZoom.addEventListener('touchend', () => {
        activeTouches = false;
      })

      sliderMainZoom.addEventListener('mousedown', (event) => {
        activeTouches = true;
        positionLeft = event.pageX;

        sliderMainZoom.classList.add('move');
        startPosition = event.pageX;
      })

      sliderMainZoom.addEventListener('mousemove', (event) => {
        if (activeTouches) {
          const positionMove = event.pageX;
          const diff = positionMove - positionLeft;
          const fingerSpace = 30;
        
          if (
            startPosition - event.pageX < fingerSpace &&
            startPosition - event.pageX > - fingerSpace
          ) {
            return false;
          } else {
            if (!positionLeft) return false;
        
            difference = diff;
        
            if (difference > 0) {
              if (counter !== 0) {
                changeCounterZoom(false)
                changeSlider()
              }
            } else {
              if (counter !== sliderLength - 1) {
                changeCounterZoom(true)
                changeSlider()
              }
            }
            positionLeft = null;
          }
        }
      })

      sliderMainZoom.addEventListener('mouseup', () => {
        activeTouches = false;
        sliderMainZoom.classList.remove('move');
      })

    }
}