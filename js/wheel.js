export let wheel = function() {
    const wheelWpr = document.querySelector('[data-whel-wrp]');
    if(wheelWpr != null) {
        const wheelBack = wheelWpr.querySelector('[data-wheel-back]');
    const wheelImg = wheelWpr.querySelector('[data-wheel-img]');
    
    window.addEventListener('resize', () => {
        let widthScreen = window.innerWidth;
        window.getComputedStyle(wheelBack).getPropertyValue('--width-page');
        wheelBack.style.setProperty('--width-page', widthScreen + 'px');

        if(widthScreen < 1440) {

            window.getComputedStyle(wheelImg).getPropertyValue('--position-wheel-bottom');
            wheelImg.style.setProperty('--position-wheel-bottom', (window.innerWidth / 20) + 'px');
        }
        
    });
    window.getComputedStyle(wheelImg).getPropertyValue('--position-wheel-bottom');
    wheelImg.style.setProperty('--position-wheel-bottom', (window.innerWidth / 20) + 'px');

    $(function() {
        let w = $(window);
        w.on('scroll', function() {
            let top = $(this).scrollTop();
            parallax(top);
        })
    });
    function parallax(top) {
       $('.main-page-about-company__img-wheel').css(
        
        'right', ((top - 2200) / -4) + 'px'
       )
       $('.main-page-about-company__img-wheel').css(
        'bottom', (((top) / 4) / +4) + 'px'
       ) 
       $('.main-page-about-company__img-wheel').css(
        'transform', 'rotate('+ ((top) / +4) + 'deg)'
       )
    //    $('.main-page-about-company__img-tread').css(
    //     // 'width', ((top * 5) / +4) + 'px'
    //    )
        if(top >= 2234) {
            $('.main-page-about-company__img-tread-wrp').css(
                'width', ((top / 5) + 5) + '%'
            )
            $('.main-page-about-company__img-wheel').css(
                'bottom', (((top) / 4.2) / +4) + 'px'
            ) 
        } if(top > 2100) {
            $('.main-page-about-company__img-tread-wrp').css(
                'width', (((top / 7) / +3.9) + 5) + '%'
            )
        }
        if(widthScreen < 1440) {
            $('.main-page-about-company__img-wheel').css(
                'bottom', (((top) / 4.5) / +4) + 'px'
            ) 
        }

        if(widthScreen < 1300) {
            $('.main-page-about-company__img-wheel').css(
                'bottom', (((top) / 4.9) / +4) + 'px'
            ) 
        }

        if(widthScreen < 1230) {
            $('.main-page-about-company__img-wheel').css(
                'bottom', (((top) / 5.5) / +4) + 'px'
            )
            $('.main-page-about-company__img-tread-wrp').css(
                'width', (((top / 6.9) / +3.9) + 5) + '%'
            ) 
        }
        if(widthScreen < 1080) {
            $('.main-page-about-company__img-wheel').css(
                'bottom', (((top) / 7) / +4) + 'px'
            )
            $('.main-page-about-company__img-tread-wrp').css(
                'width', (((top / 6.9) / +3.9) + 5) + '%'
            ) 
        }

        if(widthScreen < 950) {
            $('.main-page-about-company__img-wheel').css(
                'bottom', (((top) / 8) / +4) + 'px'
            )
            $('.main-page-about-company__img-tread-wrp').css(
                'width', (((top / 7.5) / +3.9) + 5) + '%'
            ) 
        }

        if(widthScreen < 860) {
            $('.main-page-about-company__img-wheel').css(
                'bottom', (((top) / 9) / +4) + 'px'
            )
            $('.main-page-about-company__img-tread-wrp').css(
                'width', (((top / 6.6) / +3.9) + 5) + '%'
            )
        }

        if(widthScreen < 690) {
            $('.main-page-about-company__img-wheel').css(
                'bottom', (((top) / 12) / +4) + 'px'
            )
            $('.main-page-about-company__img-tread-wrp').css(
                'width', (((top / 7) / +3.9) + 5) + '%'
            )
        }

        if(widthScreen < 580) {
            $('.main-page-about-company__img-wheel').css(
                'bottom', (((top) / 17) / +4) + 'px'
            )
            $('.main-page-about-company__img-tread-wrp').css(
                'width', (((top / 7) / +3.9) + 5) + '%'
            )
        }

        if(widthScreen < 480) {
            $('.main-page-about-company__img-tread-wrp').css(
                'width', (((top / 10) / +3.9) + 5) + '%'
            )
            $('.main-page-about-company__img-wheel').css(
                'bottom', ((top / 35) / +8) + 'px'
            )
        }
        if(widthScreen > 1920) {
            // console.log(widthScreen);
        }
    }
    }
    
}