export let mainPageDropDawnList = function() {
    const mainPageDropDawnWrp = document.querySelector('[data-main-page-drop-dawn-wrp]');

    if(mainPageDropDawnWrp != null) {
        const mainPageDropDawnBtn = mainPageDropDawnWrp.querySelector('[data-dron-btn-main-page]');
        const mainPageDropDawn = mainPageDropDawnWrp.querySelector('[data-dron-main-page]');
        const itemsDropdown = mainPageDropDawnWrp.querySelectorAll('[data-dropdown-itm]');
        const selectedDropdown = mainPageDropDawnWrp.querySelector('[data-selected-dropdown]');

        mainPageDropDawnBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            mainPageDropDawnBtn.classList.toggle('active');
            mainPageDropDawn.classList.toggle('active');
        });

        document.addEventListener('click', () => {
            if(mainPageDropDawnBtn.classList.contains('active')) {
                mainPageDropDawnBtn.classList.remove('active');
                mainPageDropDawn.classList.remove('active');
            }
        });

        itemsDropdown.forEach(item => {
            item.addEventListener('click', function() {
                selectedDropdown.innerText = item.childNodes[1].innerText;
            })
            
        })
    };
        
}