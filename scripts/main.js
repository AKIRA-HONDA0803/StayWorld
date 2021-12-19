document.addEventListener('DOMContentLoaded', function () {
    // const cb = function (el, inview) {
    //     if(inview) {
    //         const ta = new TweenTextAnimation(el);
    //         ta.animate();
    //     }
    // }

    // const so = new ScrollObserver('.tween-animate-title', cb); 
    // const _inviewAnimation = function(el, inview) {
    //     if(inview) {
    //         el.classList.add('inview');
    //     }else{
    //         el.classList.add('inview');
    //     }
    // }
    // const so2 = new ScrollObserver('.cover-slide', this._inviewAnimation);

    // headerクラスのtriggeredのオンオフを操作
    // const header = document.querySelector('.header');
    // const _navAnimation = function(el, inview) {
    //     if(inview) {
    //         header.classList.add('triggered');
    //     }else{
    //         header.classList.add('triggered');
    //     }
    // }
    // const so3 = new ScrollObserver('.nav-trigger', _inviewAnimation, {once: false});
    const main = new Main();
});

class Main {
    constructor() {
        this.header = document.querySelector('.header');
        this._observers = [];
        this._scrollInit();
        this._init()
    }

    _init() {
        new MobileMenu();

        this.hero = new HeroSlider('.swiper-container');
        this._scrollInit();
    }

    _inviewAnimation = function(el, inview) {
        if(inview) {
            el.classList.add('inview');
        }else{
            el.classList.add('inview');
        }
    }

    _navAnimation(el, inview) {
        if(inview) {
            this.header.classList.add('triggered');
        }else{
            this.header.classList.add('triggered');
        }
    }
    _textAnimation(el, inview) {
        if(inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    _toggleSlideAnimation(el, inview) {
        if(inview) {
            this.hero.start();
        }else{
            this.hero.stop();
        }
    }


    _scrollInit() {
        this._observers.push (
            new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {once: false})
        );
        this._observers.push(
            new ScrollObserver('.cover-slide', this._inviewAnimation)
        );
        new ScrollObserver('.tween-animate-title', this._textAnimation);
        new ScrollObserver('.swiper-container', this._toggleSlideAnimation.bind(this), {once: false}); 
    }
}

