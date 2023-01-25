export let blogWrp = function () {
    blogWrp = document.querySelector('[data-blog-wrp]');
    if(blogWrp != null) {
       const blogItem = blogWrp.querySelectorAll('[data-blog-item]');
       const blogContItem = blogWrp.querySelectorAll('[data-wrp-item-news]');
       blogItem.forEach((el, index) =>  {
            el.addEventListener('click', function(){
                delActiveBlog(blogItem);
                delActiveBlog(blogContItem);
                el.classList.add('active');
                blogContItem[index].classList.add('active');
            })
        });

        function delActiveBlog (param) {
            param.forEach((el) => {
                el.classList.remove('active')
            })
        }


        const blogNav = blogWrp.querySelector('[data-nav]');
        window.addEventListener('scroll', function() {
            const blogWrpPosition = blogWrp.getBoundingClientRect();
            if (blogWrpPosition.top <= 76 && window.innerWidth >= 860) {
                    blogNav.classList.add('active')
            } else {
                blogNav.classList.remove('active')
            }
        })

        // const scrolSize = window.pageYOffset;
        // console.log(scrolSize);
        // const blogWrpPosition = blogWrp.getBoundingClientRect();
        // console.log(blogWrpPosition);
    }
}