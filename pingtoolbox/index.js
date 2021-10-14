const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

const htmlEl = document.querySelector("html");
htmlEl.style.scrollBehavior = "smooth";

const smoothScroll = (target, duration) => {
    const ssTarget = document.querySelector(target);
    const ssStart = window.pageYOffset;
    const ssTargetTop = ssTarget.getBoundingClientRect().top;
    let startTime = 0;

    const ssAni = (now) => {
        if(startTime === 0) startTime = now;

        let elapsedTime = now - startTime;
        let ease = easing(Math.min(elapsedTime / duration, 2));

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



