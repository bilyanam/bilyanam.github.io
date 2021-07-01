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

function check() {
    if (document.getElementById('bio1').checked) {
        document.getElementById('ifBio1').style.display = 'block';
    }
    else document.getElementById('ifBio1').style.display = 'none';

    if (document.getElementById('bio2').checked) {
        document.getElementById('ifBio2').style.display = 'block';
    }
    else document.getElementById('ifBio2').style.display = 'none';

    if (document.getElementById('bio3').checked) {
        document.getElementById('ifBio3').style.display = 'block';
    }
    else document.getElementById('ifBio3').style.display = 'none';
}


    const btn = document.querySelector('button.mobile-menu-button');
    const menu = document.querySelector('.mobile-menu');

    btn.addEventListener('click', () => {
        menu.classList.toggle("hidden");
    });

        function _toArray(arr) {
            return Array.isArray(arr) ? arr : Array.from(arr)
        }
        function makeSpans(selector) {
            var _document$querySelect = document.querySelectorAll(selector)
            var _document$querySelect2 = _toArray(_document$querySelect)
            var elements = _document$querySelect2.slice(0)
            return elements.map(function (element) {
                var text = element.innerText.split('')
                var spans = text.map(function (letter){
                    return '<span>' + letter + '</span>'
                }).join('')
                return element.innerHTML = spans
            })
        }
        makeSpans('h2')
