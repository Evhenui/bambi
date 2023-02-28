

export let importantSlider = function() {
  const importantWrp = document.querySelector('[data-important-wrp]');
  if(importantWrp != null) {

    const importantTextArr = importantWrp.querySelectorAll('[data-important-text]');
    const importantBtntArr = importantWrp.querySelectorAll('[data-important-btn]');
    const importantImgWrp = importantWrp.querySelector('[data-impotr-img-wrp]');
    const importantImgArr = importantWrp.querySelectorAll('[data-important-img]');
    const sliderTitlesParent = importantWrp.querySelector('[data-drawing-titles]');
    const paginationParent = importantWrp.querySelector('[data-psgintaion-important]');
    const drawingSlider = importantWrp.querySelector('[data-drawing-slider]');

    let activeTouches = false;
    let positionLeft = 0;
    let moving = false;
    let startPosition = 0;
    let difference = 0;
    let counter = 0;
    var listenedElements = [];

    function actualTransition() {
      window.getComputedStyle(importantImgWrp).getPropertyValue('--counter-import-slider');
      importantImgWrp.style.setProperty('--counter-import-slider', (-counter * importantImgArr[counter].offsetWidth) + 'px');
    }

    function delActive(param) {
      param.forEach((el) => {
        el.classList.remove('active')
      })
    }

    function startDrawing() {
      new Vivus(
        'import-img-car-2',
        {
          type: 'delayed',
          duration: 100,
          animTimingFunction: Vivus.EASE
        }
      );

      new Vivus(
        'import-img-car-2-mob',
        {
          type: 'delayed',
          duration: 100,
          animTimingFunction: Vivus.EASE
        }
      );

      new Vivus(
        'import-img-car-1',
        {
          type: 'delayed',
          duration: 100,
          animTimingFunction: Vivus.EASE
        }
      );

      new Vivus(
        'import-img-car-1-mob',
        {
          type: 'delayed',
          duration: 100,
          animTimingFunction: Vivus.EASE
        }
      );

      new Vivus(
        'import-img-car',
        {
          type: 'delayed',
          duration: 100,
          animTimingFunction: Vivus.EASE
        }
      );    

      new Vivus(
        'import-img-car-mob',
        {
          type: 'delayed',
          duration: 100,
          animTimingFunction: Vivus.EASE
        }
      ); 

    }

    function movingSlider() {
      window.getComputedStyle(importantImgWrp).getPropertyValue('--counter-import-slider');
      importantImgWrp.style.setProperty('--counter-import-slider', (-counter * importantImgArr[counter].offsetWidth) + 'px');

      delActive(importantBtntArr)
      delActive(importantTextArr)
      paginationParent.children[counter].classList.add('active');
      sliderTitlesParent.children[counter].classList.add('active');
    } 
    
    function getMovePosition(position) {
      const positionMove = position;
      const diff = positionMove - positionLeft;
      const fingerSpace = 30;
    
      if (
        startPosition - position < fingerSpace &&
        startPosition - position > -fingerSpace
      ) {
        return false;
      } else {
        if (!positionLeft) return false;
    
        difference = diff;
    
        if (difference > 0) {
          if (counter !== 0) {
            counter--;
            movingSlider()
          }
        } else {
          if (counter !== importantImgWrp.children.length - 1) {
            counter++;
            movingSlider()
          }
        }
        positionLeft = null;
      }
    }

    drawingSlider.addEventListener('mousedown', event => {
      activeTouches = true;
      positionLeft = event.pageX;
      moving = true;
      drawingSlider.style.cursor = "grabbing";
      startPosition = event.pageX;
    })

    drawingSlider.addEventListener('mousemove', event => {
      if(moving) {
        drawingSlider.style.cursor = "grabbing";
      }
      if (activeTouches) {
        getMovePosition(event.pageX);
        startDrawing()
      }
    })

    drawingSlider.addEventListener('mouseup', event => {
      activeTouches = false;
      moving = false;
      drawingSlider.style.cursor = "grab";
    })

    drawingSlider.addEventListener('touchstart', event => {
      activeTouches = true;
      positionLeft = event.touches[0].clientX;
      startPosition = event.touches[0].clientX;
    })

    drawingSlider.addEventListener('touchmove', event => {
      if (activeTouches) {
        getMovePosition(event.touches[0].clientX);
        startDrawing()
      }
    })

    drawingSlider.addEventListener('touchend', event => {
      activeTouches = false;
    })
   
    importantBtntArr.forEach((el, index) => {
      el.addEventListener('click', function() {
        counter = index;
        movingSlider()
        startDrawing()
      })
    })

    function isOnVisibleSpace(element) {
      var bodyHeight = window.innerHeight;
      var elemRect = element.getBoundingClientRect();
      var offset   = elemRect.top;// - bodyRect.top;
      if( offset < 0) return false;
      if(offset > bodyHeight) return false;
      return true;
    }
      
    window.onscroll = function() {
      listenedElements.forEach(item=>{
        // проверяем находится ли элемент в зоне видимости
        var result = isOnVisibleSpace(item.el);
        
        // если элемент находился в зоне видимости и вышел из нее
        // вызываем обработчик выпадения из зоны видимости
        if(item.el.isOnVisibleSpace && !result){
            item.el.isOnVisibleSpace = false;
          item.outVisibleSpace(item.el);
          return;
        }
        // если элемент находился вне зоны видимости и вошел в нее
        // вызываем обработчик попадания в зону видимости
        if(!item.el.isOnVisibleSpace && result){
            item.el.isOnVisibleSpace = true;
          item.inVisibleSpace(item.el);
          return;
        }
      });
    }

    function onVisibleSpaceListener(elementId, cbIn, cbOut) {
          // получаем ссылку на объект элемента
      //   let el = document.getElementById(elementId);
        // добавляем элемент и обработчики событий 
        // в массив отслеживаемых элементов
      listenedElements.push({
        el: importantWrp,
        inVisibleSpace: cbIn,
        outVisibleSpace: cbOut    
      });
    }

    onVisibleSpaceListener("video", 
      el=> {
        new Vivus(
          'import-img-car',
          {
            type: 'delayed',
            duration: 400,
            animTimingFunction: Vivus.EASE
          }
        );

        new Vivus(
          'import-img-car-mob',
          {
            type: 'delayed',
            duration: 400,
            animTimingFunction: Vivus.EASE
          }
        ); 
          
        new Vivus(
          'import-img-car-mob',
          {
            type: 'delayed',
            duration: 400,
            animTimingFunction: Vivus.EASE
          }
        ); 
      },
      el => {
          // функция вызываемая при выпадении элемента из зоны видимости
      // тут вставляем код остановки анимации
      // el.innerHTML = "000000000000000000000000";
      // window.alert("элемент вне зоны видимости");
      }
    );

    window.addEventListener("resize", actualTransition)
  }
}