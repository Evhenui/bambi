export let basket = function () {
    const basket = document.querySelector('[data-basket-section]');
  
    if(basket !== null) {
        const dropdownRegion = basket.querySelector('[data-dropdown-region]'),
              dropdownCity = basket.querySelector('[data-dropdown-city]'),
              dropdownDepartmentNumber = basket.querySelector('[data-dropdown-department-number]'),
              dropdowns = basket.querySelectorAll('[data-dropdown]'),
              accordion = basket.querySelector('[data-order-accordion]'),
              popupModal = basket.querySelector('[data-modal-enter]');
        const buttonAgree = basket.querySelector("[data-button-confirm]");

        let validInputs = false;
        let validRegion = false;
        let validCity = false;
        let validDepartmentNumber = false;
        let validSelected = false;
         
            function delActive (params) {
                params.forEach((el) => {
                    el.classList.remove('active');
                  })
            }    

            function changeLable (items, dropdown) {
                items.forEach((item)=> {
                    item.addEventListener('click', ()=> {
                        dropdown.innerText = item.innerText;
                    })
                })
            }

            function closeMenu (section, dropdown ,selected, label) {
                section.addEventListener('click', function(e) {
                    const click = e.composedPath().includes(dropdown);
                    if(!click) {
                        dropdown.classList.remove('active');
                        if(selected.innerText === '') {
                            label.classList.remove('active');
                        }   
                    }
                })
                
            }

        if(accordion !== null) {
                const content = accordion.querySelector('[data-my-order-mobile-full-information]');
                const header = accordion.querySelector('.my-order__header');

                function checkWindowSize() {
                    accordion.classList.remove('active');

                    if(window.innerWidth > 960) {
                        content.style.height = "auto";
                    } else {
                        content.style.height = 0;
                    }
                }

                window.addEventListener("resize", checkWindowSize)

                header.addEventListener('click', function() {
                    if(window.innerWidth < 960) {
                        accordion.classList.toggle('active');
                        if(accordion.classList.contains('active')) {
                            content.style.height = content.scrollHeight + 'px';
                        } else {
                            content.style.height = 0 + 'px';
                        }
                    }           
            })

        }

        if(dropdownRegion !== null) {

            const dropdownRegionSelectItems = basket.querySelectorAll('[data-dropdown-region-item]'),
                  dropdownRegionSelected = basket.querySelector('[data-dropdown-region-selected]'),
                  dropdownRegionLabel = basket.querySelector('[data-dropdown-region-label]');

            dropdownRegion.addEventListener('click', function() {
                if (this.classList.contains('active')) {
                    this.classList.remove('active');
                }
                else {
                    delActive(dropdowns);
                    this.classList.add('active');
                }
                
                if(dropdownRegionSelected.innerText === '') {
                    dropdownRegionLabel.classList.toggle('active');
                } 
                //close
                closeMenu(basket, dropdownRegion, dropdownRegionSelected, dropdownRegionLabel)
            })
            changeLable(dropdownRegionSelectItems, dropdownRegionSelected)
        }
        
        if(dropdownCity !== null) {

            const dropdownRegionSelectItems = basket.querySelectorAll('[data-dropdown-city-item]'),
                  dropdownRegionSelected = basket.querySelector('[data-dropdown-city-selected]'),
                  dropdownRegionLabel = basket.querySelector('[data-dropdown-city-label]');

                  dropdownCity.addEventListener('click', function() {
                    if (this.classList.contains('active')) {
                        this.classList.remove('active');
                    }
                    else {
                        delActive(dropdowns);
                        this.classList.add('active');
                    }
                if(dropdownRegionSelected.innerText === '') {
                    dropdownRegionLabel.classList.toggle('active');
                } 
                //close
                closeMenu(basket, dropdownCity, dropdownRegionSelected, dropdownRegionLabel)
            })
            changeLable(dropdownRegionSelectItems, dropdownRegionSelected)
        }
        
        if(dropdownDepartmentNumber !== null) {

            const dropdownRegionSelectItems = basket.querySelectorAll('[data-dropdown-department-number-item]'),
                  dropdownRegionSelected = basket.querySelector('[data-dropdown-department-number-selected]'),
                  dropdownRegionLabel = basket.querySelector('[data-dropdown-department-number-label]');

                dropdownDepartmentNumber.addEventListener('click', function() {               
                    if (this.classList.contains('active')) {
                        this.classList.remove('active');
                    }
                    else {
                        delActive(dropdowns);
                        this.classList.add('active');
                    }
                    
                if(dropdownRegionSelected.innerText === '') {
                    dropdownRegionLabel.classList.toggle('active');
                } 
                //close
                closeMenu(basket, dropdownDepartmentNumber, dropdownRegionSelected, dropdownRegionLabel)
            })
            changeLable(dropdownRegionSelectItems, dropdownRegionSelected)
        }

        if(popupModal !== null) {
            const   modalLink = popupModal.querySelectorAll('.js-modal-tab-item'),
                    tabsItems = popupModal.querySelectorAll(".js-modal-tab-section"),
                    buttonCloseModal = popupModal.querySelectorAll('[data-close-modal]'),
                    modalContainer = popupModal.querySelector('[data-popup-modal-container]'),
                    body = document.querySelector("#body-cont"),
                    buttonOpenModal = basket.querySelector('[data-open-popup]');

                    if(buttonOpenModal !== null) {
                        buttonOpenModal.addEventListener('click', function() {
                            popupModal.classList.add('active');
                            body.style.overflow = 'hidden';
                        })   
                    }

                          
  //----------modal tabs----------------------------------------------
            modalLink.forEach(function(item) {
              item.addEventListener("click", function () {
                const tabId = item.getAttribute("data-modal-tab-item"),
                      currentTub = popupModal.querySelector(tabId);
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
  //----------modal close---------------------------------------------
            buttonCloseModal.forEach((item)=> {
              item.addEventListener('click', function() { 
                popupModal.classList.remove('active');
                body.style.overflow = 'auto';
              })
              popupModal.addEventListener('click',(e)=>{
                const click = e.composedPath().includes(modalContainer);
                if(!click) {
                    popupModal.classList.remove('active');
                    body.style.overflow = 'auto';

                }
              })
            })   
        }

        const selectCityWrp = basket.querySelector("[data-wrp-selected-city]");

        if(selectCityWrp !== null) {
            const selectCity = basket.querySelector("[data-select-city]");
            const selectInput = basket.querySelector("[data-select-input-city]");
            const selectCaption = basket.querySelector("[data-caption-city]");
            const selectedItem = basket.querySelectorAll("[data-option-list-city]");
            const listCity = basket.querySelector("[data-list-city]");
            
            selectInput.addEventListener("input", () => {
                if(selectInput.value === "") {
                    validCity = false
                }

                validSelected = validCity && validRegion && validDepartmentNumber ? true : false;
            })  
    
            selectCity.addEventListener("click", () => {
                selectCity.classList.toggle("active")
                listCity.classList.toggle("active")
                selectInput.focus()
                if(!selectInput.value) {
                    selectCaption.classList.toggle("active")
                }
            })
    
            basket.addEventListener("click", (e) => {
                const click = e.composedPath().includes(selectCityWrp);
                if(!click) {
                    selectCity.classList.remove("active")
                    listCity.classList.remove("active") 
                    selectInput.blur()
                    if(!selectInput.value) {
                        selectCaption.classList.remove("active")
                    }
                }
            })
    
            selectedItem.forEach(el => {
                el.addEventListener("click", () => {
                    selectInput.value = el.innerText;
                    validCity = true;

                    selectCity.classList.remove("active")
                    listCity.classList.remove("active")
    
                    if(!selectInput.value) {
                        selectCaption.classList.remove("active")
                    }

                    validSelected = validCity && validRegion && validDepartmentNumber ? true : false;
                })
            })
        }

        const selectRegionWrp = basket.querySelector("[data-wrp-selected-region]");

        if(selectRegionWrp !== null) {
            const selectRegion = basket.querySelector("[data-select-region]");
            const selectInput = basket.querySelector("[data-select-input-region]");
            const selectCaption = basket.querySelector("[data-caption-region]");
            const selectedItem = basket.querySelectorAll("[data-option-list-region]");
            const listRegion = basket.querySelector("[data-list-region]");
            
            selectInput.addEventListener("input", () => {
                if(selectInput.value === "") {
                    validRegion = false
                }

                validSelected = validCity && validRegion && validDepartmentNumber ? true : false;
            })  
    
            selectRegion.addEventListener("click", () => {
                selectRegion.classList.toggle("active")
                listRegion.classList.toggle("active")
                selectInput.focus()
                if(!selectInput.value) {
                    selectCaption.classList.toggle("active")
                }
            })
    
            basket.addEventListener("click", (e) => {
                const click = e.composedPath().includes(selectRegionWrp);
                if(!click) {
                    selectRegion.classList.remove("active")
                    listRegion.classList.remove("active") 
                    selectInput.blur()
                    if(!selectInput.value) {
                        selectCaption.classList.remove("active")
                    }
                }
            })
    
            selectedItem.forEach(el => {
                el.addEventListener("click", () => {
                    selectInput.value = el.innerText;
                    validRegion = true;
    
                    selectRegion.classList.remove("active")
                    listRegion.classList.remove("active")
    
                    if(!selectInput.value) {
                        selectCaption.classList.remove("active")
                    }

                    validSelected = validCity && validRegion && validDepartmentNumber ? true : false;
                })
            })
        }

        const selectDepartmentNumber = basket.querySelector("[data-wrp-selected-department-number]");

        if(selectDepartmentNumber !== null) {
            const selectDepartmentNumber = basket.querySelector("[data-select-department-number]");
            const selectInput = basket.querySelector("[data-select-input-department-number]");
            const selectCaption = basket.querySelector("[data-caption-department-number]");
            const selectedItem = basket.querySelectorAll("[data-option-list-department-number]");
            const listDepartmentNumber = basket.querySelector("[data-list-department-number]");
    
            selectDepartmentNumber.addEventListener("click", () => {
                selectDepartmentNumber.classList.toggle("active")
                listDepartmentNumber.classList.toggle("active")

                selectInput.focus()
    
                if(!selectInput.value) {
                    selectCaption.classList.toggle("active")
                }
            })

            selectInput.addEventListener("input", () => {
                if(selectInput.value === "") {
                    validDepartmentNumber = false
                }

                validSelected = validCity && validRegion && validDepartmentNumber ? true : false;
            })  
    
            basket.addEventListener("click", (e) => {
                const click = e.composedPath().includes(selectDepartmentNumber);
                if(!click) {
                    selectDepartmentNumber.classList.remove("active")
                    listDepartmentNumber.classList.remove("active") 
                    selectInput.blur()
                    if(!selectInput.value) {
                        selectCaption.classList.remove("active")
                    }
                }
            })
            
    
            selectedItem.forEach(el => {
                el.addEventListener("click", () => {
                    selectInput.value = el.innerText;
                    validDepartmentNumber = true;
                    selectDepartmentNumber.classList.remove("active")
                    listDepartmentNumber.classList.remove("active")
    
                    if(!selectInput.value) {
                        selectCaption.classList.remove("active")
                    }

                    validSelected = validCity && validRegion && validDepartmentNumber ? true : false;
                })
            })
        }

        const inputFirstName = basket.querySelector("[data-input-name]");
        const labelFirstName = basket.querySelector("[data-label-name]");

        const inputSecondName = basket.querySelector("[data-input-surname]");
        const labelSecondName = basket.querySelector("[data-label-surname]");

        const inputEmail = basket.querySelector("[data-input-email]");
        const labelEmail = basket.querySelector("[data-label-email]");
        const inputPhone = basket.querySelector("[data-input-tel]");
        const labelPhone = basket.querySelector("[data-label-tel]");
        const btnBasket = basket.querySelector("[data-button-confirm]");

        const dropRegion = basket.querySelector("[data-select-input-region]");
        const dropCity = basket.querySelector("[data-select-input-city]");
        const dropDepart = basket.querySelector("[data-select-input-department-number]");

        var maskOptions = {
            mask: '+{38} (000)-000-00-00'
        };

        var mask = IMask(inputPhone, maskOptions);

        const regEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]/;

        function checkEmail() {
            if(regEmail.test(inputEmail.value) && validator.isEmail(inputEmail.value)) {
                inputEmail.classList.remove("is-invalid")
                labelEmail.classList.remove("is-invalid")
            } else {
                inputEmail.classList.add("is-invalid")
                labelEmail.classList.add("is-invalid")
            }
        }

        function checkTel() {
            if(!validator.isMobilePhone(inputPhone.value.replace(/[^0-9]/g, '').substring(2), ['uk-UA'])) {
                inputPhone.classList.add("is-invalid")
                labelPhone.classList.add("is-invalid")
            } else {
                inputPhone.classList.remove("is-invalid")
                labelPhone.classList.remove("is-invalid")
            }
        }

        function checkFirstName() {
            if(inputFirstName.value.length > 1) {
                inputFirstName.classList.remove("is-invalid");
                labelFirstName.classList.remove("is-invalid");
            } else {
                inputFirstName.classList.add("is-invalid");
                labelFirstName.classList.add("is-invalid");
            }
        }

        function checkSecondName() {
            if(inputSecondName.value !== "" && inputSecondName.value.length > 1) {
                inputSecondName.classList.remove("is-invalid");
                labelSecondName.classList.remove("is-invalid");
            } else {
                inputSecondName.classList.add("is-invalid");
                labelSecondName.classList.add("is-invalid");
            }
        }

        function checkValidForm() {
          if(regEmail.test(inputEmail.value) && validator.isEmail(inputEmail.value)  
            && validator.isMobilePhone(inputPhone.value.replace(/[^0-9]/g, '').substring(2), ['uk-UA'])  && inputPhone.value.length === 19
            && inputFirstName.value !== "" && inputFirstName.value.length > 1 && inputSecondName.value !== "" && inputSecondName.value.length > 1) {
              validInputs = true
          }else {
            validInputs = false
          }
        }

        checkEmail()
        checkTel()
        checkFirstName()
        checkSecondName()
        checkValidForm()

        inputFirstName.addEventListener('input', () => {
            checkValidForm()
        })

        inputFirstName.addEventListener('blur', () => {
            if(inputFirstName.value.length > 1) {
                inputFirstName.classList.remove("is-invalid");
                labelFirstName.classList.remove("is-invalid");
            } else {
                inputFirstName.classList.add("is-invalid");
                labelFirstName.classList.add("is-invalid");
            }
        })

        inputSecondName.addEventListener('input', () => {
            checkValidForm()
        })

        inputSecondName.addEventListener('blur', () => {
            if(inputSecondName.value.length > 1) {
                inputSecondName.classList.remove("is-invalid");
                labelSecondName.classList.remove("is-invalid");
            } else {
                inputSecondName.classList.add("is-invalid");
                labelSecondName.classList.add("is-invalid");
            }
        })

        inputEmail.addEventListener('input', () => {
            checkValidForm()
        })
    
        inputEmail.addEventListener('blur', () => {
            checkEmail()
        })

        inputPhone.addEventListener('input', () => {
            checkValidForm()
        })
    
        inputPhone.addEventListener('focus', () => {
            inputPhone.placeholder = '+38 (';
        })
    
        inputPhone.addEventListener('blur', () => {
            inputPhone.placeholder = '';
    
            checkTel()
        })

        const selectDepart = basket.querySelector("[data-select-input-department-number]");
        const selectCity = basket.querySelector("[data-select-input-city]");
        const selectRegion = basket.querySelector("[data-select-input-region]");
        const departDrop = basket.querySelector("[data-wrp-selected-department-number]");
        const inputWrpDelivery = basket.querySelector('[data-home-delivery]');  
        const inputUkrPost = basket.querySelector('[data-home-ukrpost]');
        const inputDelivery = basket.querySelector("[data-input-delivery]");
        const checkboxes = basket.querySelectorAll(".basket__checkbox");

        let switchState = "department";

        departDrop.classList.add("active")

        function checkDelivery() {
            if (switchState === "department") {
                departDrop.classList.replace("hidden", "active");
            
                inputUkrPost.classList.replace('active', 'hidden');
                inputWrpDelivery.classList.replace('active', 'hidden');
            } else if (switchState === "delivery") {
                inputWrpDelivery.classList.replace("hidden", "active");
            
                departDrop.classList.replace("active", "hidden");
                inputUkrPost.classList.replace('active', 'hidden');
            } else if (switchState === "ukrPost") {
                inputUkrPost.classList.replace('hidden', 'active');
            
                departDrop.classList.replace("active", "hidden");
                inputWrpDelivery.classList.replace("active", "hidden");
            }
        }

        checkDelivery()

        checkboxes[0].addEventListener("change", ()=> {
            switchState = "department"

            checkDelivery()
        })

        checkboxes[1].addEventListener("change", ()=> {
            switchState = "delivery"

            checkDelivery()
        })

        checkboxes[2].addEventListener("change", ()=> {
            switchState = "ukrPost"

            checkDelivery()
        })

        buttonAgree.addEventListener("click", ()=> {
            if(!validInputs) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if(!selectDepart.value && !selectCity.value && (!selectRegion.value || !inputDelivery.value) && validInputs) {
                window.scrollTo({ top: 400, behavior: 'smooth' });
            }
        })
    } 

}