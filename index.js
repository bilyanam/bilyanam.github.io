gsap.registerPlugin(ScrollTrigger);

function init(){

    gsap.from('#fade', {duration:2, opacity:0, x: 20,
        stagger: {
            each: 0.5
        },
        scrollTrigger: {
        trigger: '#fade',
        start: "top 90%",
        end: "bottom bottom-=150",
        scrub: true,
    }});
    gsap.from('#fade1', {duration:1, opacity:0, y: -20,
        scrollTrigger: {
        trigger: '#fade1',
        start: "top 90%",
        end: "bottom bottom-=300",
        scrub: true,
    }});
    gsap.to('#scroll', {duration:2, opacity:0,
        stagger: {
            each: 0.5
        },
        scrollTrigger: {
        trigger: '#scroll',
        start: "top 50%",
        end: "bottom bottom-=150",
        scrub: true,
    }});
    gsap.from(".fade", {duration:1, opacity:0,  y: 40,
        stagger: {
            each: 0.2
        },
        scrollTrigger: {
        trigger: ".fade",
        start: "top 80%",
        end: "bottom bottom-=300",
        scrub: true,
    }});
    gsap.from(".fadex", {duration:1, opacity:0,  x: -20,
        stagger: {
            each: 0.2
        },
        scrollTrigger: {
        trigger: ".fadex",
        start: "top 80%",
        end: "bottom bottom-=300",
        scrub: true,
    }});

    gsap.from(".fade1", {duration:1, opacity:0,  y: 40,
        stagger: {
            each: 0.5
        },
        scrollTrigger: {
        trigger: ".fade1",
        start: "top 80%",
        end: "bottom bottom-=250",
        scrub: true,
    }});
    gsap.from(".fade2", {duration:1, opacity:0, y: 15,
        stagger: {
            each: 0.5
        },
        scrollTrigger: {
        trigger: ".fade2",
        start: "top 85%",
        end: "bottom bottom-=250",
        scrub: true,
    }});
    gsap.from(".fade3", {duration:1, opacity:0,
        stagger: {
            each: 0.3
        },
        scrollTrigger: {
        trigger: ".fade3",
        start: "top 85%",
        end: "bottom bottom-=350",
        scrub: true,
    }});
    gsap.from(".fade4", {duration:1, opacity:0, y: -10,
        stagger: {
            each: 0.5
        },
        scrollTrigger: {
        trigger: ".fade4",
        start: "top 90%",
        end: "bottom bottom-=250",
        scrub: true,
    }});
    gsap.from(".fade5", {duration:1, opacity:0,
        stagger: {
            each: 0.5
        },
        scrollTrigger: {
        trigger: ".fade5",
        start: "top 90%",
        end: "bottom bottom-=100",
        scrub: true,
    }});
    gsap.from(".fade-x", {duration:1, opacity:0,  y: 30,
        stagger: {
            each: 0.2
        },
        scrollTrigger: {
        trigger: ".fade-x",
        start: "top 80%",
        end: "bottom bottom-=300",
        scrub: true,
    }});
    gsap.from(".vang", {duration:0.5, opacity:0,  x: -40,
        scrollTrigger: {
        trigger: ".vang",
        start: "top 80%",
        end: "bottom bottom-=100",
        scrub: true,
    }});
    gsap.from(".hero", {duration:0.5, opacity:0,  x: 40,
        scrollTrigger: {
        trigger: ".hero",
        start: "top 80%",
        end: "bottom bottom-=100",
        scrub: true,
    }});
    gsap.from(".img", {duration:1, opacity:0,  y: -30,
        scrollTrigger: {
        trigger: ".img",
        start: "top 80%",
        end: "bottom bottom-=100",
        scrub: true,
    }});

}

window.addEventListener('load', function(){
    init();
});

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

gsap.from(".up", {
    scrollTrigger: {
        trigger: ".up",
        start: "top 100%",
        end: "top 20%",
       toggleActions: "restart none reverse none"
    },
    y: 50,
    duration: 0.2,
    marker: true
});
