const back2Top = document.querySelector('#back2Top');
const htmlEl = document.querySelector("html");
htmlEl.style.scrollBehavior = "smooth";


window.addEventListener('scroll', (e) => {
    if (window.scrollY >= 400) {

        back2Top.classList.remove("hidden");
        back2Top.classList.add("block");
        
    } else {

        back2Top.classList.add("hidden");
        back2Top.classList.remove("block");
    }
});

const smoothScroll = (target, duration) => {
    const ssTarget = document.querySelector(target);
    const ssStart = window.pageYOffset;
    const ssTargetTop = ssTarget.getBoundingClientRect().top;
    let startTime = 0;

    const ssAni = (now) => {
        if(startTime === 0) startTime = now;

        let elapsedTime = now - startTime;
        let ease = easing(Math.min(elapsedTime / duration, 1));

        window.scroll(0, ssStart + ssTargetTop * ease);

        if(elapsedTime < duration){
            requestAnimationFrame(ssAni);
        }
    };

    requestAnimationFrame(ssAni);

};

const easing = (t) => {
    //easeOutQuint
    return 1 + --t * t * t * t * t;
};
back2Top.addEventListener('click', (e) => {
    e.preventDefault();
    if(getComputedStyle(htmlEl).scrollBehavior === 'smooth') {
    window.scroll({top: 0, left: 0, behavior:'smooth' });
    } else{
        smoothScroll('html', 1000);
    }
});