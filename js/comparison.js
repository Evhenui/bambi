export let comparison = function() {
  const comparison = document.querySelector('[data-comparison-single]');

    if(comparison !== null) {
      const sliderWindow = comparison.querySelector('[data-slider-window]');
      const sliderWidth = comparison.querySelector('[data-slider-width]');
      const slidesLength = comparison.querySelectorAll('[data-personal-area-comp-item]');
      const sliderBodyElements = comparison.querySelectorAll('[data-slider-footer]');
      const btnPrevSlide = comparison.querySelector('[data-comparison-slider-btn-prev]');
      const btnNextSlide = comparison.querySelector('[data-comparison-slider-btn-next]');
      const bodySlider = comparison.querySelector('[data-body-slider]');

    if(slidesLength.length) {
        
      let distance = 0;
      let translateX = 0;
      let counter = 0;

      let mobileTranslateX = 0;
      let difference = 0;
      let activeTouches = 0;
      let startPosition = 0;

      function getWidthHeader() {
        sliderWidth.style.width = bodySlider.offsetWidth + 'px';
      }

      function viewButtons() {
        if(sliderWindow.offsetWidth < sliderWidth.scrollWidth) {
          btnPrevSlide.classList.remove('hidden')
          btnNextSlide.classList.remove('hidden')
        } else {
          btnPrevSlide.classList.add('hidden')
          btnNextSlide.classList.add('hidden')
        }
      }

      function nextSlide() {
        const maxStep = Math.round(sliderWidth.children.length - sliderWindow.offsetWidth / slidesLength[0].offsetWidth);
        distance = sliderWidth.scrollWidth - sliderWindow.offsetWidth - (translateX + slidesLength[0].offsetWidth);

        if (distance >= 0 && counter < maxStep - 1) {
          counter++;
          translateX = (slidesLength[0].offsetWidth + 8) * counter;
        } else {
          translateX = sliderWidth.scrollWidth + 8 - sliderWindow.offsetWidth;
          counter = maxStep;
        }

        window.getComputedStyle(sliderWidth).getPropertyValue('--height-page');
        sliderWidth.style.setProperty('--personal-area-translateX', - translateX + 'px');

        sliderBodyElements.forEach(el => {
          window.getComputedStyle(el).getPropertyValue('--height-page');
          el.style.setProperty('--personal-area-translateX', -translateX + 'px');
        })
          
      }

      function prevSlide() {
        const startingPosition = 0;
        const maxStep = Math.round(sliderWidth.children.length - sliderWindow.offsetWidth / slidesLength[0].offsetWidth);
        distance = sliderWidth.scrollWidth - sliderWindow.offsetWidth - (translateX - slidesLength[0].offsetWidth);

        if (distance <= sliderWidth.scrollWidth - sliderWindow.offsetWidth) {
          counter--;
          translateX = (slidesLength[0].offsetWidth + 8) * counter;

        } else {
          translateX = startingPosition;
        }

        window.getComputedStyle(sliderWidth).getPropertyValue('--height-page');
        sliderWidth.style.setProperty('--personal-area-translateX', - translateX + 'px');

        sliderBodyElements.forEach(el => {
          window.getComputedStyle(el).getPropertyValue('--height-page');
          el.style.setProperty('--personal-area-translateX', -translateX + 'px');
        })
      }

      function handleTouchStart(event) {
        activeTouches = true;
        mobileTranslateX = event.touches[0].clientX;
        startPosition = event.touches[0].clientX;
      }

      function handleTouchMove(event) {
        const positionMove = event.touches[0].clientX;
        const diff = positionMove - mobileTranslateX;
        const fingerSpace = 30;
        if ( startPosition - positionMove < fingerSpace &&
          startPosition - positionMove > - fingerSpace) {
          return false;
        } else {
          if (activeTouches) {
            if (!mobileTranslateX) return false;
            difference = diff;
            difference > 0 ? prevSlide() : nextSlide();
            mobileTranslateX = null;
          }
        }
      }

      function handleTouchEnd() {
        activeTouches = false;
      }

      getWidthHeader()

      btnNextSlide.addEventListener('click', nextSlide);
      btnPrevSlide.addEventListener('click', prevSlide);
      viewButtons();

      sliderWindow.addEventListener('touchstart', handleTouchStart)
      sliderWindow.addEventListener('touchmove', handleTouchMove)
      sliderWindow.addEventListener('touchend', handleTouchEnd)

      bodySlider.addEventListener('touchstart', handleTouchStart)
      bodySlider.addEventListener('touchmove', handleTouchMove)
      bodySlider.addEventListener('touchend', handleTouchEnd)

      window.addEventListener('resize', prevSlide);
      window.addEventListener('resize', viewButtons);
      window.addEventListener('resize', getWidthHeader);
    } 
  }
}