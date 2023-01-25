

export let delActive = function (param) {
    param.forEach((el) => {
        el.classList.remove('active')
    })
}