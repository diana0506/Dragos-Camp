const slider = () => {
    const img = [];
    img[0] = 'img/slider/slider-01.jpg';
    img[1] = 'img/slider/slider-02.jpg'; // more if needed


    let i = 0;
    let x = (img.length) - 1;
    let intval = 8000;
    let first = true;


    const elements = {
        slider: document.querySelector('.header'),
        btn: {
            left: document.querySelector('.controls__arrow--prev'),
            right: document.querySelector('.controls__arrow--next'),
            animated: document.querySelector('.btn--animated')
        },
        textBox: document.querySelectorAll('.header__text-box')
    }

    console.log(elements.textBox)

    const changeImg = () => {
        setTimeout(() => {
            elements.slider.classList.toggle('active');
            if (first) {
                first = false;
            } else {
                elements.btn.animated.classList.toggle('btn--animated');
            }
        }, 60);
        elements.slider.style.backgroundImage = 'url(' + img[i] + ')';
        arrTextBox = [...elements.textBox];
        arrTextBox.forEach(elem => {
            elem.classList.remove('active');
        });
        arrTextBox[i].classList.add('active');

        console.log(arrTextBox[i])
    }


    const showNext = () => {
        elements.slider.classList.remove('active');
        elements.btn.animated.classList.remove('btn--animated');
        (i >= x) ? i = 0: i++;
        changeImg(i);
    };

    interval = setInterval(showNext, intval);

    const stopInterval = () => {
        clearInterval(interval);
    }

}

slider();