export let inputValidate = function() {
  const modalWindow = document.querySelector('[data-popup-modal]'),
        personalArea = document.querySelector('[data-personal-area-section]'),
        carProduct = document.querySelector("[data-wrapper-car-product]");

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
//-----------------------modal-------------------------------------------------------
/*                 inputEmailModal = modalWindow.querySelector("[data-modal-input-email]"),
                labelEmailModal = modalWindow.querySelector("[data-modal-label-email]"),
                inputButtonEnterModal = modalWindow.querySelector("[data-modal-button-enter]"),
                inputsModal = modalWindow.querySelectorAll('.js-modal-input'),
                inputNameModal = modalWindow.querySelector("[data-modal-input-name]"),
                inputPhoneModal = modalWindow.querySelector("[data-modal-input-phone]"),
                inputPasswordFirstModal = modalWindow.querySelector("[data-modal-input-password-first]"),
                inputPasswordReModal = modalWindow.querySelector("[data-modal-input-password-re]"),
                labelNameModal = modalWindow.querySelector("[data-modal-label-name]"),
                labelPhoneModal = modalWindow.querySelector("[data-modal-label-phone]"),
                labelPasswordFirstModal = modalWindow.querySelector("[data-modal-label-password-first]"),
                labelPasswordReModal = modalWindow.querySelector("[data-modal-label-password-re]"),
                inputButtonRegisterModal = modalWindow.querySelector("[data-modal-button-register]"); */
        
            const regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                  regText = /^([A-Za-z\-\']{1,50})|([??-????-??\-\']{1,50})$/,
                  regEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]/;

                    function inputValidate (button) {
                    button.addEventListener("click", function (event) {
                        event.preventDefault();
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
                    
                    isActiveButton(inputs, inputButton, inputButtonMobile)
   /*                  isActiveButton(inputsModal, inputButtonEnterModal);
                    isActiveButton(inputsModal, inputButtonRegisterModal); */

                    inputValidate(inputButton);
                    inputValidate(inputButtonMobile);

                /*     inputValidate(inputButtonEnterModal);
                    inputValidate(inputButtonRegisterModal); */
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
             regText = /^([A-Za-z\-\']{1,50})|([??-????-??\-\']{1,50})$/;

            function validInput(regex, input) {
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
            }

            inputNameModalOnClick.addEventListener('input', function(){
              exam(regText, labelNameModalOnClick, inputNameModalOnClick)
            });
            inputPhoneModalOnClick.addEventListener('input', function(){
              exam(regPhone, labelPhoneModalOnClick, inputPhoneModalOnClick)
            });
          
            inputsChange(inputsModalOnClick, buttonModalOnClick);

            buttonModalOnClick.addEventListener('click', function(event){
              event.preventDefault();
              if(validInput(regText, inputNameModalOnClick) && validInput(regPhone, inputPhoneModalOnClick)) {
                modalOnClick.classList.add('done'); 
              }
            });
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

    const regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
          regText = /^([A-Za-z\-\']{1,50})|([??-????-??\-\']{1,50})$/,
          regEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]/;

      function inputValidate (button) {
      button.addEventListener("click", function (event) {
          event.preventDefault();

          exam(regEmail, labelEmailModal, inputEmailModal);
          exam(regPhone, labelPhoneModal, inputPhoneModal);
          exam(regText, labelNameModal, inputNameModal);
          validPassword(inputPasswordFirstModal, inputPasswordReModal, labelPasswordFirstModal, labelPasswordReModal);
      }
      );
      }

      inputEmailModal.addEventListener('input', () => {
        if(inputEmailModal.value !== '' && inptPassEnter.value !== '') {
          inputButtonEnterModal.classList.add('active')
        }
      })

      inptPassEnter.addEventListener('input', () => {
        if(inputEmailModal.value !== '' && inptPassEnter.value !== '') {
          inputButtonEnterModal.classList.add('active')
        }
      })



      inputNameModal.addEventListener('input', () => {
        if(inputEmailModal.value !== '' && inputPhoneModal.value !== ''
        && inputNameModal.value !== '' && inputPasswordFirstModal.value !== '' && inputPasswordReModal.value !== '') {
          inputButtonRegisterModal.classList.add('active')
        }
      })

      inputPhoneModal.addEventListener('input', () => {
        if(inputEmailModal.value !== '' && inputPhoneModal.value !== ''
        && inputNameModal.value !== '' && inputPasswordFirstModal.value !== '' && inputPasswordReModal.value !== '') {
          inputButtonRegisterModal.classList.add('active')
        }
      })

      inputEmailModal.addEventListener('input', () => {
        if(inputEmailModal.value !== '' && inputPhoneModal.value !== ''
        && inputNameModal.value !== '' && inputPasswordFirstModal.value !== '' && inputPasswordReModal.value !== '') {
          inputButtonRegisterModal.classList.add('active')
        }
      })

      inputPasswordFirstModal.addEventListener('input', () => {
        if(inputEmailModal.value !== '' && inputPhoneModal.value !== ''
        && inputNameModal.value !== '' && inputPasswordFirstModal.value !== '' && inputPasswordReModal.value !== '') {
          inputButtonRegisterModal.classList.add('active')
        }
      })

      inputPasswordReModal.addEventListener('input', () => {
        if(inputEmailModal.value !== '' && inputPhoneModal.value !== ''
        && inputNameModal.value !== '' && inputPasswordFirstModal.value !== '' && inputPasswordReModal.value !== '') {
          inputButtonRegisterModal.classList.add('active')
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
}
