export let inputValidate = function() {
  const modalWindow = document.querySelector('[data-popup-modal]'),
        personalArea = document.querySelector('[data-personal-area-section]'),
        carProduct = document.querySelector("[data-wrapper-car-product]");
  const homePage = document.querySelector(".main-page-partner");

  //------------------input validate---------------------
    function validate(regex, input) {
    return regex.test(input);

    }
    function valid(input, label, value) {
    if (value) {
        input.classList.remove("is-invalid");
        label.classList.remove("is-invalid");
    } else {
        input.classList.add("is-invalid");
        label.classList.add("is-invalid");
    }
    }
    function validPassword(
    password,
    passwordRe,
    labelPassword,
    labelPasswordRepeat
    ) {
    if (password.value !== passwordRe.value) {
        password.classList.add("is-invalid");
        passwordRe.classList.add("is-invalid");
        labelPassword.classList.add("is-invalid");
        labelPasswordRepeat.classList.add("is-invalid");
    } else {
        password.classList.remove("is-invalid");
        passwordRe.classList.remove("is-invalid");
        labelPassword.classList.remove("is-invalid");
        labelPasswordRepeat.classList.remove("is-invalid");
    }
    }
    function exam(reg, label, input) {
    if (!validate(reg, input.value) && input.value != "") {
        valid(input, label, false);
    } else {
        valid(input, label, true);
    }
    }
    function isActiveButton(inputList, button, buttonMobile) {
      inputList.forEach(function(item) {
        item.addEventListener('input', function(){
        if(item.value !== '' || inputCheckbox.checked ) {
          if(buttonMobile) {
            buttonMobile.classList.add('active');
          }
          button.classList.add('active');
        } else{
          button.classList.remove('active');
          if(buttonMobile) {
            buttonMobile.classList.remove('active');
          }
        }
        })
      })
    }
    
    if (personalArea !== null) {
        const   inputName = personalArea.querySelector(".js-input-name"),
                inputSurname = personalArea.querySelector(".js-input-surname"),
                inputPhone = personalArea.querySelector(".js-input-phone"),
                inputCheckbox = personalArea.querySelector(".js-input-checkbox"),
                inputEmail = personalArea.querySelector(".js-input-email"),
                inputButton = personalArea.querySelector(".js-btn"),
                inputButtonMobile = personalArea.querySelector(".js-btn-mobile"),
                inputPassword = personalArea.querySelector(".js-password"),
                inputPasswordRe = personalArea.querySelector(".js-password-repead"),
                labelName = personalArea.querySelector(".js-label-name"),
                labelSurname = personalArea.querySelector(".js-label-surname"),
                labelPhone = personalArea.querySelector(".js-label-phone"),
                labelEmail = personalArea.querySelector(".js-label-email"),
                labelPassword = personalArea.querySelector(".js-label-password"),
                labelPasswordRepeat = personalArea.querySelector(".js-label-password-repeat"),
                inputs = personalArea.querySelectorAll('.js-input');

                const regEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]/;

                var maskOptions = {
                  mask: '+{38} (000)-000-00-00'
                };
            
                var mask = IMask(inputPhone, maskOptions);

                function checkFirstName() {
                  if(inputName.value.length > 1 && inputName.value !== "") {
                    inputName.classList.remove("is-invalid")
                    labelName.classList.remove("is-invalid")
                  } else {
                    inputName.classList.add("is-invalid")
                    labelName.classList.add("is-invalid")
                  }
                }

                function checkSecondName() {
                  if(inputSurname.value.length > 1 && inputSurname.value !== "") {
                    inputSurname.classList.remove("is-invalid")
                    labelSurname.classList.remove("is-invalid")
                  } else {
                    inputSurname.classList.add("is-invalid")
                    labelSurname.classList.add("is-invalid")
                  }
                }

                function checkPhone() {
                  if(!validator.isMobilePhone(inputPhone.value.replace(/[^0-9]/g, '').substring(2), ['uk-UA'])) {
                    inputPhone.classList.add("is-invalid")
                    labelPhone.classList.add("is-invalid")
                  } else {
                    inputPhone.classList.remove("is-invalid")
                    labelPhone.classList.remove("is-invalid")
                  }
                }

                function checkEmail() {
                  if(!regEmail.test(inputEmail.value) && !validator.isEmail(inputEmail.value)) {
                    inputEmail.classList.add("is-invalid")
                    labelEmail.classList.add("is-invalid")
                  } else {
                    inputEmail.classList.remove("is-invalid")
                    labelEmail.classList.remove("is-invalid")
                  }
                }

                function inputValidate (button) {
                  button.addEventListener("click", function (event) {
                 /*      event.preventDefault(); */
                      exam(regPhone, labelPhone, inputPhone);
                      exam(regText, labelName, inputName);
                      exam(regText, labelSurname, inputSurname);
                      exam(regEmail, labelEmail, inputEmail);
                      validPassword(inputPassword, inputPasswordRe, labelPassword, labelPasswordRepeat);
/*   
                      exam(regEmail, labelEmailModal, inputEmailModal);
                      exam(regPhone, labelPhoneModal, inputPhoneModal);
                      exam(regText, labelNameModal, inputNameModal);
                      validPassword(inputPasswordFirstModal, inputPasswordReModal, labelPasswordFirstModal, labelPasswordReModal); */
                  }
                  );
                }

                checkFirstName()
                checkSecondName()
                checkPhone()
                checkEmail()

                inputPhone.addEventListener('blur', () => {
                  checkPhone()
                })

                inputEmail.addEventListener('blur', () => {
                  checkEmail()
                })      
                    
                isActiveButton(inputs, inputButton, inputButtonMobile)

                inputValidate(inputButton);
                inputValidate(inputButtonMobile);
}

    if(carProduct !== null ) {
      const  inputNameModalOnClick = carProduct.querySelector("[data-modal-on-click-input-name]"),
             inputPhoneModalOnClick = carProduct.querySelector("[data-modal-on-click-input-phone]"),
             labelNameModalOnClick = carProduct.querySelector("[data-modal-on-click-label-name]"),
             labelPhoneModalOnClick = carProduct.querySelector("[data-modal-on-click-label-phone]"),
             inputsModalOnClick = carProduct.querySelectorAll(".js-modal-on-click-input"),
             buttonModalOnClick = carProduct.querySelector("[data-modal-on-click-button]"),
             modalOnClick = carProduct.querySelector('[data-modal-on-click-container]');
             
      const  regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
             regText = /^([A-Za-z\-\']{1,50})|([А-Яа-я\-\']{1,50})$/;

            var maskOptions = {
              mask: '+{38} (000)-000-00-00'
            };
        
            var mask = IMask(inputPhoneModalOnClick, maskOptions);

        /*     function validInput(regex, input) {
              return regex.test(input.value);
            }

            function inputsChange(inputs, button) {
              inputs.forEach((item)=>{
                item.addEventListener('input', function() {
                 if(inputs[0].value && inputs[1].value) {
                  if(validInput(regText, inputNameModalOnClick) && validInput(regPhone, inputPhoneModalOnClick)){
                    button.classList.add('active')
                  } 
                 }
                })
              })
            } */

            function checkValid() {
              if(validator.isMobilePhone(inputPhoneModalOnClick.value.replace(/[^0-9]/g, '').substring(2), ['uk-UA']) && inputNameModalOnClick.value.length > 1){
                buttonModalOnClick.disabled = false
                buttonModalOnClick.classList.add("active")
              } else {
                buttonModalOnClick.disabled = true
                buttonModalOnClick.classList.remove("active")
              }
            }

            checkValid()

            inputPhoneModalOnClick.addEventListener('focus', () => {
              inputPhoneModalOnClick.placeholder = '+38 (';
            })
      
            inputPhoneModalOnClick.addEventListener('blur', () => {
              inputPhoneModalOnClick.placeholder = '';
      
              if(!validator.isMobilePhone(inputPhoneModalOnClick.value.replace(/[^0-9]/g, '').substring(2), ['uk-UA'])) {
                inputPhoneModalOnClick.classList.add("is-invalid")
                labelPhoneModalOnClick.classList.add("is-invalid")
              } else {
                inputPhoneModalOnClick.classList.remove("is-invalid")
                labelPhoneModalOnClick.classList.remove("is-invalid")
              }
            })

            inputNameModalOnClick.addEventListener('blur', () => {
              if(inputNameModalOnClick.value.length > 1) {
                inputNameModalOnClick.classList.remove("is-invalid")
                labelNameModalOnClick.classList.remove("is-invalid")
              } else {
                inputNameModalOnClick.classList.add("is-invalid")
                labelNameModalOnClick.classList.add("is-invalid")
              }
            })

            inputNameModalOnClick.addEventListener('input', function(){
              if(validator.isMobilePhone(inputPhoneModalOnClick.value.replace(/[^0-9]/g, '').substring(2), ['uk-UA']) && inputNameModalOnClick.value.length > 1){
                buttonModalOnClick.disabled = false
                buttonModalOnClick.classList.add("active")
              } else {
                buttonModalOnClick.disabled = true
                buttonModalOnClick.classList.remove("active")
              }
            });

            inputPhoneModalOnClick.addEventListener('input', function(){
              if(validator.isMobilePhone(inputPhoneModalOnClick.value.replace(/[^0-9]/g, '').substring(2), ['uk-UA']) && inputNameModalOnClick.value.length > 1){
                buttonModalOnClick.disabled = false
                buttonModalOnClick.classList.add("active")
              } else {
                buttonModalOnClick.disabled = true
                buttonModalOnClick.classList.remove("active")
              }
            });
          
            /* inputsChange(inputsModalOnClick, buttonModalOnClick); */

     /*        buttonModalOnClick.addEventListener('click', function(event){
              event.preventDefault();
              if(validInput(regText, inputNameModalOnClick) && validInput(regPhone, inputPhoneModalOnClick)) {
                modalOnClick.classList.add('done'); 
              }
            }); */
    }
   //------------------show password--------------------- 
   if (modalWindow !== null) {
    const btnShowPassModal = document.querySelectorAll('[data-show-password]');

    function showPass(buttons) {
      buttons.forEach((item) => {
        item.addEventListener('click', function() {
          let target = this.getAttribute("data-target");
          let input = document.querySelector(target);

          if (input.getAttribute("type") === "password") {
            input.setAttribute("type", "text");
            item.classList.add("active");
          } else {
            input.setAttribute("type", "password");
            item.classList.remove("active");
          } 
        })
      })
    }
    showPass(btnShowPassModal)

    const inputEmailModal = modalWindow.querySelector("[data-modal-input-email]");
    const labelEmailModal = modalWindow.querySelector("[data-modal-label-email]");
    const inputEmailModalReg = modalWindow.querySelector("[data-modal-input-email-reg]");
    const labelEmailModalReg = modalWindow.querySelector("[data-modal-label-email-reg]");
    const inputButtonEnterModal = modalWindow.querySelector("[data-modal-button-enter]");
    const inputsModal = modalWindow.querySelectorAll('.js-modal-input');
    const inptPassEnter = modalWindow.querySelector('[data-modal-input-password]');
    const inputNameModal = modalWindow.querySelector("[data-modal-input-name]");
    const inputPhoneModal = modalWindow.querySelector("[data-modal-input-phone]");
    const inputPasswordFirstModal = modalWindow.querySelector("[data-modal-input-password-first]");
    const inputPasswordReModal = modalWindow.querySelector("[data-modal-input-password-re]");
    const labelNameModal = modalWindow.querySelector("[data-modal-label-name]");
    const labelPhoneModal = modalWindow.querySelector("[data-modal-label-phone]");
    const labelPasswordFirstModal = modalWindow.querySelector("[data-modal-label-password-first]");
    const labelPasswordReModal = modalWindow.querySelector("[data-modal-label-password-re]");
    const inputButtonRegisterModal = modalWindow.querySelector("[data-modal-button-register]");

    var maskOptions = {
      mask: '+{38} (000)-000-00-00'
    };

    var mask = IMask(inputPhoneModal, maskOptions);

    const regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
          regText = /^([A-Za-z\-\']{1,50})|([А-Яа-я\-\']{1,50})$/,
          regEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]/;

      function inputValidate (button) {
      button.addEventListener("click", function (event) {
/*           event.preventDefault(); */

        /*   exam(regEmail, labelEmailModal, inputEmailModal);
          exam(regPhone, labelPhoneModal, inputPhoneModal); */
          exam(regText, labelNameModal, inputNameModal);
          validPassword(inputPasswordFirstModal, inputPasswordReModal, labelPasswordFirstModal, labelPasswordReModal);
      }
      );
      }

      //-------------------------------------------------------------
      inputEmailModal.addEventListener('input', () => {
        if(regEmail.test(inputEmailModal.value) && validator.isEmail(inputEmailModal.value) && inptPassEnter.value.length >= 4) {
          inputButtonEnterModal.classList.add('active');
        }else {
          inputButtonEnterModal.classList.remove('active')
        }
      })

      inputEmailModal.addEventListener('blur', () => {
        if(!regEmail.test(inputEmailModal.value) && !validator.isEmail(inputEmailModal.value)) {
          inputEmailModal.classList.add("is-invalid")
          labelEmailModal.classList.add("is-invalid")
        } else {
          inputEmailModal.classList.remove("is-invalid")
          labelEmailModal.classList.remove("is-invalid")
        }
      })

      inptPassEnter.addEventListener('input', () => {
        if(regEmail.test(inputEmailModal.value) && validator.isEmail(inputEmailModal.value) && inptPassEnter.value.length >= 4) {
          inputButtonEnterModal.classList.add('active')
        } else {
          inputButtonEnterModal.classList.remove('active')
        }

      })

      //-------------------------------------------------------------

      inputNameModal.addEventListener('input', () => {
        if(regEmail.test(inputEmailModalReg.value) && validator.isEmail(inputEmailModalReg.value) && validator.isMobilePhone(inputPhoneModal.value.replace(/[^0-9]/g, '').substring(2), ['uk-UA'])
        && inputNameModal.value !== '' && inputPasswordFirstModal.value !== '' && inputPasswordReModal.value !== '' && inputPhoneModal.value.length === 19 && inputPasswordFirstModal.value === inputPasswordReModal.value) {
          inputButtonRegisterModal.classList.add('active')
          inputButtonRegisterModal.disabled = false;
        }else {
          inputButtonRegisterModal.classList.remove('active')
          inputButtonRegisterModal.disabled = true;
        }
      })

      inputPhoneModal.addEventListener('input', () => {
        if(regEmail.test(inputEmailModalReg.value) && validator.isEmail(inputEmailModalReg.value) && validator.isMobilePhone(inputPhoneModal.value.replace(/[^0-9]/g, '').substring(2), ['uk-UA']) 
        && inputNameModal.value !== '' && inputPasswordFirstModal.value !== '' && inputPasswordReModal.value !== '' && inputPhoneModal.value.length === 19 && inputPasswordFirstModal.value === inputPasswordReModal.value) {
          inputButtonRegisterModal.classList.add('active')
          inputButtonRegisterModal.disabled = false;
        }else {
          inputButtonRegisterModal.classList.remove('active')
          inputButtonRegisterModal.disabled = true;
        }
      })

      inputPhoneModal.addEventListener('focus', () => {
        inputPhoneModal.placeholder = '+38 (';
      })

      inputPhoneModal.addEventListener('blur', () => {
        inputPhoneModal.placeholder = '';

        if(!validator.isMobilePhone(inputPhoneModal.value.replace(/[^0-9]/g, '').substring(2), ['uk-UA'])) {
          inputPhoneModal.classList.add("is-invalid")
          labelPhoneModal.classList.add("is-invalid")
        } else {
          inputPhoneModal.classList.remove("is-invalid")
          labelPhoneModal.classList.remove("is-invalid")
        }
      })

      inputEmailModalReg.addEventListener('input', () => {
        if(regEmail.test(inputEmailModalReg.value) && validator.isEmail(inputEmailModalReg.value) && validator.isMobilePhone(inputPhoneModal.value.replace(/[^0-9]/g, '').substring(2), ['uk-UA'])
        && inputNameModal.value !== '' && inputPasswordFirstModal.value !== '' && inputPasswordReModal.value !== '' && inputPhoneModal.value.length === 19 && inputPasswordFirstModal.value === inputPasswordReModal.value) {
          inputButtonRegisterModal.classList.add('active')
          inputButtonRegisterModal.disabled = false;
        } else {
          inputButtonRegisterModal.classList.remove('active')
          inputButtonRegisterModal.disabled = true;
        }
      })

      inputEmailModalReg.addEventListener('blur', () => {
        if(!validator.isEmail(inputEmailModalReg.value) && !regEmail.test(inputEmailModalReg.value)) {
          inputEmailModalReg.classList.add("is-invalid")
          labelEmailModalReg.classList.add("is-invalid")
        } else {
          inputEmailModalReg.classList.remove("is-invalid")
          labelEmailModalReg.classList.remove("is-invalid")
        }
      })

      inputPasswordFirstModal.addEventListener('input', () => {
        if(regEmail.test(inputEmailModalReg.value) && validator.isEmail(inputEmailModalReg.value) && validator.isMobilePhone(inputPhoneModal.value.replace(/[^0-9]/g, '').substring(2), ['uk-UA'])
        && inputNameModal.value !== '' && inputPasswordFirstModal.value !== '' && inputPasswordReModal.value !== '' && inputPhoneModal.value.length === 19 && inputPasswordFirstModal.value === inputPasswordReModal.value) {
          inputButtonRegisterModal.classList.add('active')
          inputButtonRegisterModal.disabled = false;
        }else {
          inputButtonRegisterModal.classList.remove('active')
          inputButtonRegisterModal.disabled = true;
        }
      })

      inputPasswordReModal.addEventListener('input', () => {
        if(regEmail.test(inputEmailModalReg.value) && validator.isEmail(inputEmailModalReg.value) && validator.isMobilePhone(inputPhoneModal.value.replace(/[^0-9]/g, '').substring(2), ['uk-UA'])
        && inputNameModal.value !== '' && inputPasswordFirstModal.value !== '' && inputPasswordReModal.value !== '' && inputPhoneModal.value.length === 19 && inputPasswordFirstModal.value === inputPasswordReModal.value) {
          inputButtonRegisterModal.classList.add('active')
          inputButtonRegisterModal.disabled = false;
        } else {
          inputButtonRegisterModal.classList.remove('active')
          inputButtonRegisterModal.disabled = true;
        }
      })

      inputValidate(inputButtonEnterModal);
      inputValidate(inputButtonRegisterModal);

    }

    if (personalArea !== null) {
      const btnShowPassPersonalArea = document.querySelectorAll('[data-show-password-personal-area]');
  
      function showPass(buttons) {
        buttons.forEach((item) => {
          item.addEventListener('click', function() {
            let target = this.getAttribute("data-target"),
                input = document.querySelector(target);
                if (input.getAttribute("type") === "password") {
                  input.setAttribute("type", "text");
                  item.classList.add("active");
                } else {
                  input.setAttribute("type", "password");
                  item.classList.remove("active");
                } 
          })
        })
      }

      showPass(btnShowPassPersonalArea)

    }

    const footerInput = document.querySelector(".footer-content__input");
    const footerButton = document.querySelector(".footer-content__form-btn");

    const regEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]/;

    if(footerInput !== null) {
      footerInput.addEventListener('input', () => {
        if(regEmail.test(footerInput.value) && validator.isEmail(footerInput.value)) {
          footerButton.classList.remove('btn-red-disabled')
          footerButton.classList.add('btn-red')
        } else {
          footerButton.classList.add('btn-red-disabled')
          footerButton.classList.remove('btn-red')
        }
      })
    }

    if(homePage !== null) {
      const wrpLastName = homePage.querySelector("[data-wrp-last-name]");
      const labelLastName = homePage.querySelector("[data-home-label-last-name]");
      const inputLastName = homePage.querySelector("[data-home-input-last-name]");

      const wrpTel = homePage.querySelector("[data-wrp-tel]");
      const labelTel = homePage.querySelector("[data-home-label-tel]");
      const inputTel = homePage.querySelector("[data-home-input-tel]");

      const wrpTextarea = homePage.querySelector("[data-wrp-textarea]");
      const labelTextarea = homePage.querySelector("[data-home-textarea-label]");
      const inputTextarea = homePage.querySelector("[data-home-textarea]");

      const txtTelError = homePage.querySelector('#error_telephone');

      const btn = homePage.querySelector("[data-btn-send]");

      var maskOptions = { mask: '+{38} (000)-000-00-00' };
  
      var mask = IMask(inputTel, maskOptions);

      function checkValidInputs() {
        if(validator.isMobilePhone(inputTel.value.replace(/[^0-9]/g, '').substring(2), ['uk-UA']) 
        && inputLastName.value.length > 1 && inputTel.value.length === 19 && inputTextarea.value.length > 1) {
          btn.disabled = false;
          btn.classList.remove('btn-red-disabled');
          btn.classList.add('btn-red');
        }else {
          btn.disabled = true;
          btn.classList.add('btn-red-disabled');
          btn.classList.remove('btn-red');
        }
      }

      checkValidInputs()

      inputLastName.addEventListener("blur", () => {
        if(inputLastName.value.length > 1 && inputLastName.value !== "") {
          wrpLastName.classList.remove("invalid")
        } else {
          wrpLastName.classList.add("invalid")
        }
      })

      inputTel.addEventListener('focus', () => {
        inputTel.placeholder = '+38 (';
      })

      inputTel.addEventListener('blur', () => {
        inputTel.placeholder = '';

        if(!validator.isMobilePhone(inputTel.value.replace(/[^0-9]/g, '').substring(2), ['uk-UA'])) {
          wrpTel.classList.add("invalid");
          txtTelError.classList.add('show')
        } else {
          wrpTel.classList.remove("invalid")
          txtTelError.classList.remove('show')
        }
      })

      inputTextarea.addEventListener("blur", () => {
     /*    if(inputTextarea.value.length > 1) {
          wrpTextarea.classList.remove("invalid")
        } else {
          wrpTextarea.classList.add("invalid")
        } */
      })

      inputLastName.addEventListener("input", checkValidInputs)
      inputTel.addEventListener("input", checkValidInputs)
      inputTextarea.addEventListener("input", checkValidInputs)

    }
}
