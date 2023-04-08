export let inputanim = function() {
    const inputWrp = document.querySelector('[data-input-wrp]');

    if(inputWrp != null) {
        const inputsWrapper = document.querySelectorAll('[data-input-wrp-item]');
        const input = inputWrp.querySelectorAll('[data-input]');  
        const btn = document.querySelector('[data-btn-send]');
        const inputLabel = document.querySelectorAll('.input-style__text');

        inputsWrapper.forEach((el, index) => {
            el.addEventListener('click', () => {
                inputLabel[index + 1].classList.add('active');
                el.classList.add('active');
                input[index].focus()
                input[index].addEventListener('focusout', () => {
                    if(input[index].value.trim().length === 0) {
                        inputLabel[index + 1].classList.remove('active');
                        el.classList.remove('active');
                    }
                })
            })
        })

/*         input.forEach((item, index) => {
            item.addEventListener('input', function() {
                if(input[0].value && input[1].value && input[2].value) {
                    btn.classList.add('btn-red');
                    btn.classList.remove('btn-red-disabled');
                } else {
                    btn.classList.add('btn-red-disabled');
                    btn.classList.remove('btn-red');
                }
            })
        }) */
    }
}