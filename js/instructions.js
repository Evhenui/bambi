export let instructions = function() {
  const instructions = document.querySelector('[data-instructions]');

  if( instructions !== null ) {
    const downloadItems = instructions.querySelectorAll('[data-download-item]');
    const modal = instructions.querySelector('[data-modal]');
    const btnCancel = instructions.querySelector('[data-cancel-btn]');
    const btnDownload = instructions.querySelector('[data-download-btn]');
    const modalContent = instructions.querySelector('[date-modal-content]');
    const modalImg = instructions.querySelector('[data-modal-img]');

    downloadItems.forEach(item => {
      item.addEventListener('click', () => {
        modal.classList.add('active');
      })
    })

    btnCancel.addEventListener('click', () => {
      modal.classList.remove('active')
      modalImg.classList.remove('active')
    })

    window.addEventListener('resize', () => {
      if(modal.classList.contains('active')) {
        modal.classList.remove('active')
        modalImg.classList.remove('active')
      }
    })

    modal.addEventListener('click', function(event) {
      if(event.target === modal) {
        modal.classList.remove('active')
        modalImg.classList.remove('active')
      }
    })

    btnDownload.addEventListener('click', () => {
      modalImg.classList.add('active')
    })
  }
}