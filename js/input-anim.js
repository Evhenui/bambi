export let inputanim = function() {
    const inputWrp = document.querySelector('[data-input-wrp]');

    if(inputWrp != null) {
        const inputsWrapper = document.querySelectorAll('[data-input-wrp-item]');
        const input = inputWrp.querySelectorAll('[data-input]');  
        const btn = document.querySelector('[data-btn-send]');

        input.forEach((el) => {
            el.addEventListener('click', () => {
                el.previousElementSibling.classList.add('active');
                el.closest('[data-input-wrp-item]').classList.add('active');
                el.addEventListener('focusout', () => {
                    if(el.value.trim().length === 0) {
                        el.previousElementSibling.classList.remove('active');
                        el.closest('[data-input-wrp-item]').classList.remove('active');
                    }
                })
            });
        })

        input.forEach((item, index) => {
            item.addEventListener('input', function() {
                if(input[0].value && input[1].value && input[2].value) {
                    btn.classList.add('btn-red');
                    btn.classList.remove('btn-red-disabled');
                } else {
                    btn.classList.add('btn-red-disabled');
                    btn.classList.remove('btn-red');
                }
            })
        })
    }
}