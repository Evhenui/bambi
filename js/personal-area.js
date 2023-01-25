export let personalArea = function () {
  const itemTabMenu = document.querySelectorAll(".js-personal-area-navigation__item"),
        tabsItems = document.querySelectorAll(".js-personal-area-section"),
        accordion = document.querySelector('[data-accordion]'),
        productButton = document.querySelectorAll('.js-product-button'),
        modalWindow = document.querySelector('[data-popup-modal]'),
        sortingFavourite = document.querySelector('.personal-area-favorites__sorting-navigation'),
        sortingList = document.querySelector('.personal-area-favorites__sorting-wrp'),
        comparison = document.querySelector('[data-personal-comparison-wrp]');

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
buttonCloseModal.forEach((item)=> {
  item.addEventListener('click', function() {
    modalWindow.classList.remove('active');
  })
  document.addEventListener('click',(e)=>{
    const click = e.composedPath().includes(modalContainer);
    if(!click) {
      modalWindow.classList.remove('active');
    }
  })
})   
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
    const paramCharacteristic = comparison.querySelectorAll('[data-characteristic-param]');
    const sectionParam = comparison.querySelectorAll('[data-section-param]');

    const config = {
      attributes: true,
    };

    const callback = function(mutationsList, observer) {
      characteristicItems.forEach((item, index) => {

        sectionParam.forEach(item => {
          if(item.children[index].offsetHeight < characteristicItems[index].offsetHeight) {
            item.children[index].style.height = characteristicItems[index].offsetHeight + 'px'
          } else {
            characteristicItems[index].style.height = item.children[index].offsetHeight + 'px'
          }
        })
      })
    };

    const observer = new MutationObserver(callback);
    observer.observe(comparison, config);
  }

};
