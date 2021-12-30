const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next');

let slides = document.querySelectorAll('.slide');

let dots = document.querySelectorAll ('.dot');

let index = 0;

let activeSlider = n => {
    for(let slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

let dotsSlider = n => {
    for(let dot of dots) {
        dot.classList.remove ('active')
    }
    dots[n].classList.add ('active');
}

let showSlider  = () => {
    activeSlider(index);
    dotsSlider(index);
}

function prevSlider(){
    if(index == 0) {
        index = slides.length - 1;
        showSlider(index);
    } else {
        index--;
        showSlider(index);
    }
}

function nextSlider() {
    if(index == slides.length -1) {
        index = 0;
        showSlider(index);
    } else {
        index++;
        showSlider(index);
    }

}

prev.addEventListener('click', prevSlider);
next.addEventListener('click', nextSlider);