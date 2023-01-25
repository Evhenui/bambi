export let filters = function () {
    const filterWrp = document.querySelector('.js-filter-wrp');
    if (filterWrp != null) {
        const filterBntOpen = filterWrp.querySelector('.js-btn-filter-open');
        const filterWrpContent = filterWrp.querySelector('[data-filter-wrp-content]');
        const filterBtnItem = filterWrp.querySelectorAll('[data-filter-icon-btm]');
        const filterDefault = filterWrp.querySelector('.js-filter-default');
        const filterActive = filterWrp.querySelector('.js-filter-active');
        const prodWrp = filterWrp.querySelector('[data-prod="active"]');
        const navFilterTypeBtn = filterWrp.querySelectorAll('[js-nav-type]');
        const btnFilterWrp = filterWrp.querySelectorAll('[btn-switching-goods]');
        const heightItemFilter = filterWrp.querySelectorAll('[data-height-item-filter]');
        const wrpFilterProd =  filterWrp.querySelector('[data-wrp-filter-prod]');
        const filterMobBtnClose = filterWrp.querySelectorAll('[data-filter-mob-btn-close]');
        const navRow = document.querySelector('[data-catalog-nav-row]');

        filterBntOpen.addEventListener('click', function (event) {
            filterWrpContent.classList.toggle('active');
            
            if(wrpFilterProd.classList.contains('active')) {
                setTimeout(function() {
                    wrpFilterProd.classList.remove('active');
                }, 300) 
            } else {
                wrpFilterProd.classList.add('active');
                console.log(navRow.getBoundingClientRect())

                if(window.innerHeight - 312 > navRow.scrollHeight) {
                     window.getComputedStyle(navRow).getPropertyValue('--height-nav');
                     navRow.style.setProperty('--height-nav', navRow.scrollHeight + 'px');
                 } else {
                    window.getComputedStyle(navRow).getPropertyValue('--height-nav');
                    navRow.style.setProperty('--height-nav', window.innerHeight - 292 + 'px');
                 }

            }
            window.getComputedStyle(filterWrpContent).getPropertyValue('--height-filter');
            filterWrpContent.style.setProperty('--height-filter', (heightItemFilter.length * 40 + 400) + 'px');

            if (prodWrp.classList.contains('active')) {
                setTimeout(function() {
                    prodWrp.classList.remove('active');
                }, 200)
            } else {
                prodWrp.classList.add('active');
            }
            if(filterDefault.classList.contains('active')) {
                filterDefault.classList.remove('active');
                filterActive.classList.remove('active');
            } else {
                filterDefault.classList.add('active');
                filterActive.classList.add('active');
                
            }
            if (window.innerWidth < 860) {
                document.documentElement.classList.add('notOverY');
            }
            
        });
        filterBtnItem.forEach((el) => {
            el.addEventListener('click', function() {
               el.closest('.product-catalog-filters__container').querySelector('.js-content-item').classList.toggle('active');
               el.classList.toggle('active');
            })
            
        });

        // закруть мобильную версию фильтров
        filterMobBtnClose.forEach((el) => [
            el.addEventListener('click', () => {
                filterWrpContent.classList.remove('active');
                document.documentElement.classList.remove('notOverY');
    
            })
        ])


        //логика навигации на странице категории с товарами, по типу товара
        navFilterTypeBtn.forEach((el) => {
            el.addEventListener('click', function() {
                delActive(navFilterTypeBtn);
                this.classList.add('active');
            })
        });
        
        function delActive(param) {
            param.forEach((el) => {
                el.classList.remove('active')
            })
        }
        //логика переключение карточек товара
        btnFilterWrp.forEach((el, index) => {
            el.addEventListener('click', function () {
                delActive(btnFilterWrp);
                el.classList.add('active');
                if(index === 1) {
                    prodWrp.classList.add('horizontal-card');
                } else {
                    prodWrp.classList.remove('horizontal-card');
                }
                // if()
                
            })
        })
        window.addEventListener('resize', function() {
            if(window.innerWidth > 860) {
                prodWrp.classList.remove('horizontal-card');
            }
        })
        //логика выподашки сортировки, колво товаров
        const sortingItem = filterWrp.querySelectorAll('[data-sorting-item]');
        const sortingWindow = filterWrp.querySelectorAll('[data-sorting-window]')
        sortingItem.forEach((el) => {
            el.addEventListener('click', function (event) {
                delActive(sortingItem);
                event.stopPropagation();
                
                this.classList.add('active');
                
            })
        })
        sortingWindow.forEach((el) => {
            el.addEventListener('click', function(event) {
                event.stopPropagation();
            })
        })
        document.addEventListener('click', function() {
            delActive(sortingItem)
        });
        
        const wrp = document.querySelector('[data-wrp-nav-prod]');
        let startX = 0;
        let diff = 0;

        const onMove = (event) => {
            diff = event.clientX - startX;
            wrp.scroll({left: -diff});
        }

        const onEndMove = () => {
            startX = 0;
            diff = 0;
            removeEventListener('mousemove', onMove);
        }

        const onStartMove = (event) => {
            startX = event.clientX;
            addEventListener('mousemove', onMove);
            addEventListener('mouseup', onEndMove, {once: true});
        }

        wrp.addEventListener('dragstart', (e) => e.preventDefault())
        wrp.addEventListener('mousedown', onStartMove);

        //меню прилепает к хедеру
        const filtersStatic = filterWrp.querySelectorAll('[data-filters-static]')
        window.addEventListener('scroll', () => {
            if(window.innerWidth > 860) {
                filtersStatic.forEach((el) => {
                    if(window.pageYOffset === 0) {
                        el.classList.remove('active')
                        if(wrpFilterProd.classList.contains('active')) {
                
                            if(window.innerHeight - 312 > navRow.scrollHeight) {
                                window.getComputedStyle(navRow).getPropertyValue('--height-nav');
                                navRow.style.setProperty('--height-nav', navRow.scrollHeight + 'px');
                            } else {
                               window.getComputedStyle(navRow).getPropertyValue('--height-nav');
                               navRow.style.setProperty('--height-nav', window.innerHeight - 292 + 'px');
                            }
                        }
                    } else {
                        el.classList.add('active')
                        if(wrpFilterProd.classList.contains('active')) {
                
                            if(window.innerHeight - 312 > navRow.scrollHeight) {
                                window.getComputedStyle(navRow).getPropertyValue('--height-nav');
                                navRow.style.setProperty('--height-nav', navRow.scrollHeight + 'px');
                            } else {
                               window.getComputedStyle(navRow).getPropertyValue('--height-nav');
                               navRow.style.setProperty('--height-nav', window.innerHeight - 155 + 'px');
                            }
                        }
                    }
                    
                })
            }
        })
    }
}