export let personalArea = function () {
  const itemTabMenu = document.querySelectorAll(".js-personal-area-navigation__item"),
        tabsItems = document.querySelectorAll(".js-personal-area-section"),
        accordion = document.querySelector('[data-accordion]'),
        productButton = document.querySelectorAll('.js-product-button'),
        modalWindow = document.querySelector('[data-popup-modal]'),
        sortingFavourite = document.querySelector('.personal-area-favorites__sorting-navigation'),
        sortingList = document.querySelector('.personal-area-favorites__sorting-wrp'),
        comparison = document.querySelector('[data-personal-comparison-wrp]');

        if(sortingFavourite !== null) {

          sortingFavourite.addEventListener('click', () => {
            if(sortingList.classList.contains('active')) {
              sortingList.classList.remove('active');
            } else {
              sortingList.classList.add('active');
            }
          })

          document.addEventListener('click',(e)=>{
            const click = e.composedPath().includes(sortingList);
            if(!click) {
              sortingList.classList.remove('active');
            }
          })
        }


//----------------------tab menu-----------------
  if (itemTabMenu != null && tabsItems != null) {
    itemTabMenu.forEach(function (item) {
      item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTub = document.querySelector(tabId);
        if (!currentBtn.classList.contains("active")) {
          itemTabMenu.forEach(function (item) {
            item.classList.remove("active");
          });
          tabsItems.forEach(function (item) {
      
            item.classList.remove("active");
          });
          currentBtn.classList.add("active");
          currentTub.classList.add("active");
        }
      });
    });
  }

  if (modalWindow != null) {
    const modalLink = modalWindow.querySelectorAll('.js-modal-tab-item'),
          tabsItems = modalWindow.querySelectorAll(".js-modal-tab-section"),
          buttonCloseModal = modalWindow.querySelectorAll('[data-close-modal]'),
          modalContainer = modalWindow.querySelector('[data-popup-modal-container]');
//----------modal tabs------------------------------------
          modalLink.forEach(function(item) {
            item.addEventListener("click", function () {
              const tabId = item.getAttribute("data-modal-tab-item"),
                    currentTub = modalWindow.querySelector(tabId);
              if (!item.classList.contains("active")) {
                modalLink.forEach(function (item) {
                  item.classList.remove("active");
                });
                tabsItems.forEach(function (item) {
                  item.classList.remove("active");
                });
                item.classList.add("active");
                currentTub.classList.add("active");
              }
            })
          })
//----------modal close------------------------------------
          const bgModal = document.querySelector('.personal-area-modal__mask');

          buttonCloseModal.forEach((item)=> {
            item.addEventListener('click', function() {
              if(modalWindow.classList.contains('active')) {
                modalWindow.classList.remove('active')
                document.documentElement.style.overflow = "auto";
              }
            })
            bgModal.addEventListener('click',(e)=>{
              const click = e.composedPath().includes(modalContainer);
              if(!click) {
                if(modalWindow.classList.contains('active')) {
                  modalWindow.classList.remove('active');
                  document.documentElement.style.overflow = "auto";
                }
              }
            })
          })   

      const inputEmail = modalWindow.querySelector("[data-modal-input-email]");
      const labelEmail = modalWindow.querySelector("[data-modal-label-email]");

      const inputName = modalWindow.querySelector("[data-modal-input-name]");
      const labelName = modalWindow.querySelector("[data-modal-label-name]");

      const inputPhone = modalWindow.querySelector("[data-modal-input-phone]");
      const labelPhone = modalWindow.querySelector("[data-modal-label-phone]");

      const inputPass = modalWindow.querySelector("[data-modal-input-password]");
      const labelPass = modalWindow.querySelector("[data-modal-label-password]");

      const inputPassFirst = modalWindow.querySelector("[data-modal-input-password-first]");
      const labelPassFirst = modalWindow.querySelector("[data-modal-label-password-first]");

      const inputPassSecond = modalWindow.querySelector("[data-modal-input-password-re]");
      const labelPassSecond = modalWindow.querySelector("[data-modal-label-password-re]");

      function activeLabel(input, label) {
        input.addEventListener('focus', () => {
          label.classList.add('active')
        })

        input.addEventListener('blur', () => {
          if(input.value === "") {
            label.classList.remove('active')
          }
        })
      }

      activeLabel(inputEmail, labelEmail)

      activeLabel(inputName, labelName)

      activeLabel(inputPhone, labelPhone)

      activeLabel(inputPass, labelPass)

      activeLabel(inputPassFirst, labelPassFirst)

      activeLabel(inputPassSecond, labelPassSecond)
  }
//----------------------button show menu comparison-----------------
  if (productButton != null) {
    productButton.forEach(function(item) {
      const btnNavParonal = document.querySelectorAll('.js-compare-menu-list');
      const activeProductButtonArr = document.querySelectorAll('.js-compare-button-nav');
      item.addEventListener('click', function(event) {
        const self = event.currentTarget,
              productMenu = self.querySelector('.js-compare-menu-list'),
              activeProductButton = self.querySelector('.js-compare-button-nav');
        document.addEventListener('click',(e)=>{
          const click = e.composedPath().includes(item);
          if(!click) {
              productMenu.classList.remove('active');
              activeProductButton.classList.remove('active');
          }
        })
        if(activeProductButton.classList.contains('active')) {
          productMenu.classList.remove('active');
          activeProductButton.classList.remove('active');
        } else {
          delActive(btnNavParonal);
          delActive(activeProductButtonArr);
          productMenu.classList.add('active');
          activeProductButton.classList.add('active');
        }     
      })
      function delActive(params) {
        params.forEach((el) => {
          el.classList.remove('active');
        })
      }
    });
    
  }
//----------------------accordion-----------------
  if (accordion != null) {
    const accordionItem = accordion.querySelectorAll('[data-accordion-item]');
    const topSection = accordion.querySelectorAll('.order__abbreviated-information')
    const accordionContent = accordion.querySelectorAll('[data-accordion-content]');

    window.addEventListener('resize', ()=> {
      accordionItem.forEach((item, index) => {
        item.classList.remove('active')
        accordionContent[index].style.height = 0;
      })
    })

    topSection.forEach((item, index) => {
      item.addEventListener('click', () => {
        accordionItem[index].classList.toggle('active');

        if(accordionItem[index].classList.contains('active')){
          accordionContent[index].style.height = accordionContent[index].scrollHeight + 'px';
        } else {
          accordionContent[index].style.height = 0 + 'px';
        }
      })
    })

  }

  if(comparison !== null) {
    const characteristicItems = comparison.querySelectorAll('[data-characteristic-category]');
    const paramCharacteristic = comparison.querySelectorAll('[data-characteristic-zone]');
    const mobileZone = comparison.querySelectorAll('[data-slider-footer]');
    const testParam = comparison.querySelectorAll('[data-characteristic-param]');
    let acum = [];

    const config = {
      attributes: true,
    };

    function getSize() {
      if(window.innerWidth > 960) {
        characteristicItems.forEach((el, index) => {
          paramCharacteristic.forEach(item => {
            if(paramCharacteristic[index].offsetHeight < characteristicItems[index].offsetHeight) {
              paramCharacteristic[index].style.height = characteristicItems[index].offsetHeight + 'px'
            } else {
              characteristicItems[index].style.height = paramCharacteristic[index].offsetHeight + 'px'
            }
          })
        })
      } else {
        characteristicItems.forEach((el, index) => {
          paramCharacteristic.forEach(item => {
            paramCharacteristic[index].style.height = 'auto'
            characteristicItems[index].style.height = 'auto'
          })
        })
      }
    }

    const testArr = []

    const callback = function(mutationsList, observer) {
      window.addEventListener('resize', getSize)
      getSize()
    };

    const observer = new MutationObserver(callback);
    observer.observe(comparison, config);
  }



};
