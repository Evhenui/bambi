

export let importantSlider = function() {
    const importantWrp = document.querySelector('[data-important-wrp]');
    if(importantWrp != null) {

      
      const importantTextArr = importantWrp.querySelectorAll('[data-important-text]');
      const importantBtntArr = importantWrp.querySelectorAll('[data-important-btn]');
      const importantImgWrp = importantWrp.querySelector('[data-impotr-img-wrp]');
      const importantImgArr = importantWrp.querySelectorAll('[data-important-img]');
      const a = importantWrp.querySelector('[data-test]')
      
     
      importantBtntArr.forEach((el, index) => {
        el.addEventListener('click', function() {
          delActive(importantBtntArr);
          delActive(importantTextArr);
          el.classList.add('active');

          importantTextArr[index].classList.add('active');
          if (window.innerWidth <= 860) {
            window.getComputedStyle(importantImgWrp).getPropertyValue('--counter-import-slider');
            importantImgWrp.style.setProperty('--counter-import-slider', (-index * 327) + 'px');
          } else {
            window.getComputedStyle(importantImgWrp).getPropertyValue('--counter-import-slider');
            importantImgWrp.style.setProperty('--counter-import-slider', (-index * 796) + 'px');
          }
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


        })

        //л6огика свайпа на моб
        if(window.innerWidth <= 860) {
          importantImgWrp.addEventListener('touchstart', handleTouchStart, false);
          importantImgWrp.addEventListener('touchmove', handleTouchMove, false);
          importantImgWrp.addEventListener('touchend', handleTouchEnd, false);
          console.log('dsrf');
          let x1 = null;
          let count = 0;

          function handleTouchStart(event) {
              const firstTouch = event.touches[0]
              x1 = firstTouch.clientX;
              console.log(x1);
          }
          let xDiffObj = {}

          function handleTouchMove(event) {
              if(!x1) {
                  return false;
              }
              let x2 =  event.touches[0].clientX;
              let xDiff = x2 - x1;
              xDiffObj.xDiff = xDiff;
              x1 = null;
          }
          
          function handleTouchEnd() {
              if(xDiffObj.xDiff > 0) {
                  if(count >= 0) {
                      count--;
                      console.log(count);  
                      window.getComputedStyle(importantImgWrp).getPropertyValue('--counter-import-slider');
                      importantImgWrp.style.setProperty('--counter-import-slider', (-count * 327) + 'px'); 
                  }
              } else {
                  if(count < (importantImgArr.length - 1))
                  count++;
                  window.getComputedStyle(importantImgWrp).getPropertyValue('--counter-import-slider');
                  importantImgWrp.style.setProperty('--counter-import-slider', (-count * 327) + 'px');
                  
              }
          }
        }
      })
      let delActive = function (param) {
        param.forEach((el) => {
            el.classList.remove('active')
        })
      }

        function isOnVisibleSpace(element) {
            var bodyHeight = window.innerHeight;
            var elemRect = element.getBoundingClientRect();
            var offset   = elemRect.top;// - bodyRect.top;
            if(offset<0) return false;
            if(offset>bodyHeight) return false;
            return true;
        }
        var listenedElements = [];
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
        el=> {
            // функция вызываемая при выпадении элемента из зоны видимости
        // тут вставляем код остановки анимации
        // el.innerHTML = "000000000000000000000000";
        // window.alert("элемент вне зоны видимости");
        }
    );
    }

    
}
