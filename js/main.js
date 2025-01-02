const scroller = document.querySelector(".custom-animation");


if (!window.matchMedia("(prefers-reduced: reduce)").matches){
    addAnimation();
}

function addAnimation(){
    scroller.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicateItem = item.cloneNode(true);
            duplicateItem.setAttribute('aria-hidden', true);
        })
    })
}