export let cardProduct = function () {
  const carProduct = document.querySelector("[data-wrapper-car-product]");

  if (carProduct !== null) {

    const navigationItem = carProduct.querySelectorAll(
        "[data-item-navigation-car-product]"
      ),
      selectionColor = carProduct.querySelectorAll("[data-select-color]"),
      buttonUp = carProduct.querySelector("[data-botton-up]"),
      hiddenNavigation = carProduct.querySelector("[data-hidden-navigation]"),
      instruction = carProduct.querySelector("[data-download-instruction]"),
      headerWrapper = carProduct.querySelector("[data-header-wrapper-hidden]"),
      buttonLike = carProduct.querySelector("[data-navigation-like]"),
      modalOnClick = carProduct.querySelector("[data-modal-on-click]"),
      modalZoom = document.querySelector("[data-modal-zoom]"),
      modalBasket = document.querySelector("[data-modal-basket]"),
      sectionReviews = carProduct.querySelector("[data-card-product-reviews]"),
      characteristicsSection = carProduct.querySelector(
        "[data-characteristics-section]"
      );

    //------show all characteristics-------------------
    if (characteristicsSection != null) {
      const buttonShowMore = characteristicsSection.querySelector(
          "[data-show-all-characteristics]"
        ),
        sectionShowMore =
          characteristicsSection.querySelector("[data-show-more]"),
        characteristicsBlock = characteristicsSection.querySelectorAll(
          "[data-characteristics-block]"
        );
      buttonShowMore.addEventListener("click", function () {
        console.log('fv');
        console.log(sectionShowMore);
        sectionShowMore.classList.toggle("active");
        characteristicsBlock.forEach((item) => {
          item.classList.toggle("active");
        });
      });
    }

    //-----add class active groop------
    function addActiveClass(list) {
      list.forEach((item) => {
        item.addEventListener("click", function () {
          if (!item.classList.contains("active")) {
            list.forEach(function (item) {
              item.classList.remove("active");
            });
            item.classList.add("active");
          }
        });
      });
    }
    addActiveClass(navigationItem);
    addActiveClass(selectionColor);
    //-----button up------
    buttonUp.addEventListener("click", function () {
      window.scrollTo(0, 0);
    });
    //-----hidden nav-----
    if (hiddenNavigation !== null) {
      const navigationShare = carProduct.querySelector(
        "[data-navigation-share]"
      );
      navigationShare.addEventListener("click", function () {
        hiddenNavigation.classList.toggle("active");
        navigationShare.classList.toggle("active");
      });
      document.addEventListener("click", (e) => {
        const click = e.composedPath().includes(navigationShare);
        if (!click) {
          hiddenNavigation.classList.remove("active");
          navigationShare.classList.remove("active");
        }
      });
    }
    //------active-----
    buttonLike.addEventListener("click", function () {
      buttonLike.classList.toggle("active");
    });
    instruction.addEventListener("click", function () {
      instruction.classList.toggle("active");
    });
    //------hidden header----
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        headerWrapper.classList.add("active");
        buttonUp.classList.add("active");
      } else {
        headerWrapper.classList.remove("active");
        buttonUp.classList.remove("active");
      }
    });

    //----------modal zoom--------------------
    if (modalZoom !== null) {
      const body = document.querySelector("#body-cont"),
        modalZoomContainer = document.querySelector(
          "[data-modal-zoom-container]"
        ),
        modalZoomClose = document.querySelector("[data-modal-zoom-close]"),
        modalZoomButtonBuy = document.querySelector("[data-modal-zoom__buy]"),
        modalZoomButtonBuyOnClick = document.querySelector(
          "[data-modal-zoom__buy-on-click]"
        ),
        modalBuyOnClickOpen = document.querySelector("[data-modal-on-click]");

        function closeModalZoom() {
          if(window.innerWidth < 960) {
            modalZoom.classList.remove("active");
            document.documentElement.style.overflow = "auto";
          }
        }

        closeModalZoom()
        window.addEventListener('resize', closeModalZoom)

      modalZoomClose.addEventListener("click", function () {
        modalZoom.classList.remove("active");
        document.documentElement.style.overflow = "auto";
      });

      modalZoom.addEventListener("click", function (e) {
        const click = e.composedPath().includes(modalZoomContainer);
        if (!click) {
          modalZoom.classList.remove("active");
          document.documentElement.style.overflow = "auto";
        }
      });

      modalZoomButtonBuy.addEventListener("click", function () {
        modalZoom.classList.remove("active");
        modalBasket.classList.add("active");
      });

      modalZoomButtonBuyOnClick.addEventListener("click", function () {
        modalZoom.classList.remove("active");
        modalBuyOnClickOpen.classList.add("active");
      });

    }
    //----------modal on click--------------------
    if (modalOnClick !== null) {
      const buttonOpenModalOnClick =
          carProduct.querySelector("[data-by-on-click]"),
        buttonCloseModalOnClick = carProduct.querySelector(
          "[data-close-modal-on-click]"
        ),
        modalOnClickContainer = carProduct.querySelector(
          "[data-modal-on-click-container]"
        ),
        body = document.querySelector("#body-cont");

      buttonOpenModalOnClick.addEventListener("click", function () {
        modalOnClick.classList.toggle("active");
        body.classList.add("lock");
      });
      buttonCloseModalOnClick.addEventListener("click", function () {
        modalOnClick.classList.remove("active");
        body.classList.remove("lock");
      });
      modalOnClick.addEventListener("click", function (e) {
        const click = e.composedPath().includes(modalOnClickContainer);
        if (!click) {
          modalOnClick.classList.remove("active");
          body.classList.remove("lock");
        }
      });
    }
    //----------modal basket----------------------
    const openBasket = carProduct.querySelector("[data-by-modal-basket]");
    const body = document.querySelector("#body-cont");

    openBasket.addEventListener('click', () => {
      modalBasket.classList.add('active')
      document.documentElement.style.overflow = "hidden";
    })


    if (sectionReviews !== null) {
      const textArea = sectionReviews.querySelector(
          "[data-text-area-feedback]"
        ),
        textAreaLabel = sectionReviews.querySelector(
          "[data-text-area-feedback-label]"
        );
      sectionReviews.addEventListener("click", (e) => {
        const click = e.composedPath().includes(textArea);
        console.log(click);
        if (!click) {
          textAreaLabel.classList.remove("active");
        }
      });
      textArea.addEventListener("click", () => {
        textAreaLabel.classList.add("active");
      });
    }
  }
};
