export let mainPageRangeFun = function() {
    const mainPageRange = document.querySelector('.js-main-page-range-wrp');

    if(mainPageRange != null) {

        const mainPageRangeArr = mainPageRange.querySelectorAll('.js-main-page-range');
        const mainPageRangeCircle = mainPageRange.querySelectorAll('.js-main-page-range-circle-wrp');
        const mainPageRangeCircleRed = mainPageRange.querySelectorAll('.js-main-page-range-circle');
        const mainPageRangeImgArr = mainPageRange.querySelectorAll('.js-main-page-range-img');
        const widthSliderTotal = mainPageRange.querySelector('.js-width-slid');

        let width;
        let count = 0;

        let interval = -1;
        let intervalCount = 0;

        window.addEventListener('scroll', ()=> {
            if(window.scrollY >= mainPageRange.offsetTop) {
                clearInterval(interval)
                interval = setInterval(startInterval, 5000);
            }
        })

        function startInterval() {
            width = mainPageRange.querySelector('.js-width-slid-wrp').offsetWidth;
            delActivRange(mainPageRangeCircle);
            delActivRange(mainPageRangeCircleRed);
            delActivRange(mainPageRangeImgArr);

            if(count < mainPageRangeImgArr.length - 1) {
                count++;
            } else {
                count = 0
            }

            mainPageRangeCircle[count].classList.add('active');
            mainPageRangeCircleRed[count].classList.add('active');
            mainPageRangeImgArr[count].classList.add('active');

            if(window.innerWidth < 1090) {
                widthSliderTotal.style.transform = 'translate(-'+ count * width + 'px)';
            }  
        }

        clearInterval(interval)
        interval = setInterval(startInterval, 5000);
        
        mainPageRangeArr.forEach((el, index) => {
            width = mainPageRange.querySelector('.js-width-slid-wrp').offsetWidth;
            el.addEventListener('click', function() {
                delActivRange(mainPageRangeCircle);
                delActivRange(mainPageRangeCircleRed);
                delActivRange(mainPageRangeImgArr);
                
                mainPageRangeCircle[index].classList.add('active');
                mainPageRangeCircleRed[index].classList.add('active');
                mainPageRangeImgArr[index].classList.add('active');
                count = index;

                if(window.innerWidth < 1090) {
                    widthSliderTotal.style.transform = 'translate(-'+count*width+'px)';
                }

            })
        });

        function delActivRange(param) {
            param.forEach((el) => {
                el.classList.remove('active')
            })
        } 

        function init() {       
            if(window.innerWidth <= 1090) {
                width = mainPageRange.querySelector('.js-width-slid-wrp').offsetWidth;
                widthSliderTotal.style.transform = 'translate(-'+count*width+'px)';
                if(window.innerWidth < 1090) {
                    
                    widthSliderTotal.style.width = width * mainPageRangeImgArr.length + 'px'; 
                }
                mainPageRangeImgArr.forEach(item => {
                    item.style.maxWidth = width + 'px';
                })
            } else {
                widthSliderTotal.style.transform = 'translate(-'+ 0 +'px)';
                widthSliderTotal.style.width = 100 + '%'; 

                mainPageRangeImgArr.forEach(item => {
                    item.style.maxWidth = 544 + 'px';
                })
            }
        }

        window.addEventListener('resize', init);

        init();

        // моб логика
        if(window.innerWidth <= 1090) {

            function roolSlider() {
                widthSliderTotal.style.transform = 'translate(-'+count*width+'px)';
            }

            widthSliderTotal.addEventListener('touchstart', handleTouchStart, false);
            widthSliderTotal.addEventListener('touchmove', handleTouchMove, false);
            widthSliderTotal.addEventListener('touchend', handleTouchEnd, false)
    
            let x1 = null;
            let y1 = null;
    
            function handleTouchStart(event) {
                const firstTouch = event.touches[0]
                x1 = firstTouch.clientX;
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
                        delActivRange(mainPageRangeCircle);
                        // delActivRange(mainPageRangeArr)
                        count--;
                        if(count != undefined) {
                            mainPageRangeCircle[count].classList.add('active')
                            roolSlider()
                        }   
                    }
                } else {
                    if(count < (mainPageRangeImgArr.length - 1))
                    delActivRange(mainPageRangeCircle);
                    count++;
                    if(count != undefined) {
                        mainPageRangeCircle[count].classList.add('active')
                    }
                    roolSlider();
                }
            }
        }
        
    }
}