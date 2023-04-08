export let header = function() {
    const bodyCont = document.getElementById('body-cont');
    const blurMenu = document.querySelector('.js-clacc-blur');
    const modalBasket = document.querySelector('[data-modal-basket]');
    // if(blurMenu != null) {
    // window.getComputedStyle(blurMenu).getPropertyValue('--height-page');
    // blurMenu.style.setProperty('--height-page', (bodyCont.scrollHeight * 1.5) + 'px');
    // } 

    let widthScreen = window.innerWidth;
    let hidthSizePage = document.documentElement.clientHeight;
    window['widthScreen'] = widthScreen

    //каталог в меню
    
    const btnCMenuCatalog = document.querySelectorAll('.js-menu-btn');
    btnCMenuCatalog.forEach((el) => {
        el.addEventListener('click', function () {
            el.closest('.js-menu-wrp').querySelector('.header__menu-item-link-wrp').classList.toggle('active');
            this.querySelector('.header__menu-name-categoty-icon').classList.toggle('active');
        })
    })

    //меню кнопка 
    const menuBtn = document.querySelector('.js-btn-menu'),
        menuBtnLine = menuBtn.querySelector('.header__menu-btn-line');
    const menuHeader = document.querySelector('.js-menu');
    const mobItemMenu = document.querySelectorAll('.js-mob-item');
    const mobItemMenuActiv = document.querySelectorAll('.js-mob-item-active');
    const mobItemMenuActivLeft = document.querySelector('.js-mob-item-active-left');
    const mobItemMenuActivRight = document.querySelector('.js-mob-item-active-right');
    const menuTelMob =  document.querySelector('.header__menu-work-time');
    const openModalEnter = document.querySelector('[data-open-enter-modal]');
    const modalEnter = document.querySelector('[data-popup-modal]');
    const arrActivBlock = [menuBtnLine, menuHeader, bodyCont];
    const comparisonMenu = document.querySelector('[data-comparison-link]');

    const mobileCart = document.querySelector('[data-cart-mobile]');
    const enterMobile = document.querySelector('[data-enter-mobile]');
    const registerMobile = document.querySelector('[data-register-mobile]');

    const modalRegId = document.querySelector('#modal-register');
    const modalEnterId = document.querySelector('#modal-enter');
    const modalTabs = document.querySelectorAll('.js-modal-tab-item');

    function removeActive() {
        menuTelMob.classList.remove('active');

        mobItemMenuActivLeft.classList.remove('active');
        mobItemMenuActivRight.classList.remove('active');

        arrActivBlock.forEach((el) => {
            el.classList.remove('active');
        });
        
        mobItemMenu.forEach((el) => {
            el.classList.remove('active');
        });

        mobItemMenuActiv.forEach((el) => {
            el.classList.remove('active');
        });

        closeActive([phoneMenyHeader, jsHeaderCatalog, comparisonPopUp]);
    }

    mobileCart.addEventListener('click', () => {
        removeActive()

        modalBasket.classList.add('active');
        menuHeader.style.setProperty('height', 0);
    })

    enterMobile.addEventListener('click', ()=> {
        removeActive()

        modalEnter.classList.add('active');

        modalEnterId.classList.remove('active')
        modalRegId.classList.remove('active')
        modalTabs[0].classList.remove('active')
        modalTabs[1].classList.remove('active')

        modalEnterId.classList.add('active')
        modalTabs[0].classList.add('active')

        menuHeader.style.setProperty('height', 0);
    })

    registerMobile.addEventListener('click', ()=> {
        removeActive()

        modalRegId.classList.add('active')

        modalEnterId.classList.remove('active')
        modalRegId.classList.remove('active')
        modalTabs[0].classList.remove('active')
        modalTabs[1].classList.remove('active')

        modalRegId.classList.add('active')
        modalTabs[1].classList.add('active')

        modalEnter.classList.add('active');
        menuHeader.style.setProperty('height', 0);
    })


    if(openModalEnter) {
        openModalEnter.addEventListener('click', () => {
            modalEnter.classList.add('active');
            document.documentElement.style.overflow = "hidden";
        })
    }

    menuBtn.addEventListener('click', function (event) {
        menuTelMob.classList.toggle('active');

        if(menuHeader.classList.contains('active')) {
            menuHeader.style.setProperty('height', 0);
            document.documentElement.style.overflow = "auto";
        } else {
            menuHeader.style.setProperty('height', 100 + 'vh');
            document.documentElement.style.overflow = "hidden";
        }

        event.stopPropagation();
        event.target.classList.toggle('active');
        
        closeMain(blurMenu);
        blurDel(menuBtn);

        arrActivBlock.forEach((el) => {
            el.classList.toggle('active');
        });
        
        mobItemMenu.forEach((el) => {
            el.classList.toggle('active');
        });

        mobItemMenuActiv.forEach((el) => {
            el.classList.toggle('active');
        });

        mobItemMenuActivLeft.classList.toggle('active');
        mobItemMenuActivRight.classList.toggle('active');

        closeActive([phoneMenyHeader, jsHeaderCatalog, comparisonPopUp]);
    })

    closeMain(menuBtn, menuHeader);
    closeMain(menuBtnLine);
    closeMain(menuHeader);
    closeMain(bodyCont)

    //поиск
    const searchHeader = document.querySelector('.js-search'),
        searchBnt = searchHeader.querySelector('.js-btn-search'),
        searchBntMobClose = searchHeader.querySelector('.js-btn-search-mob-close'),
        searchInput = searchHeader.querySelector('.js-search-input');

        searchInput.addEventListener('focus', () => {
            searchInput.classList.add('focus')
        })

        searchInput.addEventListener('blur', () => {
            if(searchInput.value === "") {
                searchInput.classList.remove('focus')
            }
        })

    searchBntMobClose.addEventListener('click', () => {
        if(widthScreen <= 860) {
            searchHeader.classList.remove('activeSerch');
            searchBntMobClose.classList.remove('activeSerch');
        }
    })

    searchBnt.addEventListener('click', (event) => {
        event.preventDefault()
        searchInput.classList.toggle('activeSerch');
        if(widthScreen <= 860) {
            searchHeader.classList.add('activeSerch');
            searchBntMobClose.classList.add('activeSerch');
        }
        event.stopPropagation();

    });
    
    closeMain(searchInput, searchInput);
    

    //смена языкоа header
    const btnLanguages = document.querySelectorAll('.js-header-languages');

    btnLanguages.forEach((el) => {
        el.addEventListener('click', (event) => {
            delActivLanguagea();
            event.target.classList.add('active');
        })
    });
    function delActivLanguagea() {
        btnLanguages.forEach((el) => {
            el.classList.remove('active')
        })
    } 
    
    //выпадающий калог header
    const headerBtnCatalog = document.querySelector('.js-header-btn-catalog');
    const jsHeaderCatalog = document.querySelector('.js-header-catalog');
    
    headerBtnCatalog.addEventListener('click', (event) => {
        event.stopPropagation();
        jsHeaderCatalog.classList.toggle('active');
        blurDel(jsHeaderCatalog);
        searchInput.classList.remove('activeSerch');
        menuHeader.style.setProperty('height', 0);
        closeActive([phoneMenyHeader, menuHeader, menuBtn, menuBtnLine, comparisonPopUp]);
        closeMain(blurMenu);
      
    });
    closeMain(jsHeaderCatalog, jsHeaderCatalog);
    // closeMain(mainCont);
    closeMain(blurMenu);

    //телефон модалка оставить контакты
    const phoneHeader = document.querySelector('.js-phone');
    const phoneMenyHeader = phoneHeader.querySelector('.js-phone-menu')

    phoneHeader.addEventListener('click', function(event) {
        event.stopPropagation();
        phoneMenyHeader.classList.toggle('active');
            blurDel(phoneMenyHeader);
        closeActive([jsHeaderCatalog, menuHeader, menuBtn, menuBtnLine, comparisonPopUp]);
        menuHeader.style.setProperty('height', 0);
    })
    closeMain(phoneMenyHeader, phoneMenyHeader);

// функция удаляет актив если кликаеш по body
    function closeMain(params, stopRrop) {
        if(bodyCont != null) {
            bodyCont.addEventListener('click', () => {
                params.classList.remove('active');
                document.documentElement.style.overflow = "auto";
                menuHeader.style.setProperty('height', 0);
            })
        }
        if(stopRrop != null) {
            stopRrop.addEventListener('click', (event) => {
                event.stopPropagation();
            })
        }
    }

    function closeActive(params) {
        params.forEach((el) => {
            el.classList.remove('active')
        })
    }
    //Функция удаления блюра

    function blurDel(params) {
        if(params.classList.contains('active')) {
            blurMenu.classList.add('active');
        } else {
            blurMenu.classList.remove('active');
        }
    }

    //---------------------open basket-------
    const btnBasket = document.querySelector('[data-btn-basket]');

    const modalBasketContainer = document.querySelector('[data-modal-basket-container]');
    const closeBasketBtn = document.querySelector('[data-close-modal-basket]');
    const body = document.querySelector("#body-cont");
    const btnContinue = document.querySelector('.modal-basket__button-continue');

    btnBasket.addEventListener('click', () => {
        modalBasket.classList.add('active');
        document.documentElement.style.overflow = "hidden";
    });

    closeBasketBtn.addEventListener('click', () => {
        modalBasket.classList.remove('active')
        document.documentElement.style.overflow = "auto";
    })

    btnContinue.addEventListener('click', () => {
        modalBasket.classList.remove('active')
        document.documentElement.style.overflow = "auto";
    })

    modalBasket.addEventListener("click", function (e) {
        const click = e.composedPath().includes(modalBasketContainer);
        if (!click) {
          modalBasket.classList.remove("active");
          document.documentElement.style.overflow = "auto";
        }
    });


    //Сравниние pop-up
    const comparisonIcon = document.querySelector('[data-comparison-icon]');
    const comparisonPopUp = document.querySelector('[data-comparison-pop-up]');

    comparisonIcon.addEventListener('mouseenter', (event) => {
        event.stopPropagation();
        closeActive([jsHeaderCatalog, menuHeader, menuBtn, menuBtnLine, phoneMenyHeader]);
        comparisonPopUp.classList.toggle('active');
        
    });

    comparisonPopUp.addEventListener('click', function(event) {
        event.stopPropagation();
    })

    document.addEventListener('click', () => {
        closeActive([comparisonPopUp]);
    })


    const messageSection = document.querySelector("[data-message]");

    if(messageSection !== null) {
        const itemCart = messageSection.querySelector("[data-message-cart]")
        const itemCompare = messageSection.querySelector("[data-message-compare]")
        const itemFavorites = messageSection.querySelector("[data-message-favorites]")

        const cart = document.querySelector("[data-modal-basket]");
        const btnShowCart = messageSection.querySelector("[data-show-basket]");
        const linkCompare = messageSection.querySelector("[data-show-comparison]");
        const linkFavorites = messageSection.querySelector("[data-show-favorites]");

        function hiddenMessage() {
            itemCart.classList.remove("active")
            itemCompare.classList.remove("active")
            itemFavorites.classList.remove("active")
        }

        btnShowCart.addEventListener("click", () => {
            cart.classList.add("active");

            hiddenMessage()
        })

        linkCompare.addEventListener("click", () => {
            hiddenMessage()
        })

        linkFavorites.addEventListener("click", () => {
            hiddenMessage()
        })
    }

    const modalInfo = document.querySelector("[data-modal-info]");

    if(modalInfo !== null) {
        const btnClose = modalInfo.querySelector("[data-close-modal-info]");
        const container = modalInfo.querySelector("[data-modal-info-container]");

        btnClose.addEventListener("click", () => {
            modalInfo.classList.remove("active");
        })

        modalInfo.addEventListener("click", function (e) {
            const click = e.composedPath().includes(container);
            if (!click) {
                modalInfo.classList.remove("active");
                document.body.style.overflow = "auto";
            }
          });
    }
}