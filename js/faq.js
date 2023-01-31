export let faq = function() {
 const faq = document.querySelector('[data-faq]');

  if( faq !== null ) {
    const dropsHeader = faq.querySelectorAll('[data-dropdown-header]');
    const dropBody = faq.querySelectorAll('[data-dropdown-body]');

    dropsHeader.forEach((item, index) => {
      item.addEventListener('click', function() {

        dropsHeader[index].classList.toggle('active');

        if(dropsHeader[index].classList.contains('active')) {
          window.getComputedStyle(dropBody[index]).getPropertyValue('--height');
          dropBody[index].style.setProperty('--height', dropBody[index].scrollHeight + 'px');
        } else {
          window.getComputedStyle(dropBody[index]).getPropertyValue('--height');
          dropBody[index].style.setProperty('--height', 0);
        }
      })
    });
  }
}