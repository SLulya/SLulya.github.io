let slides = document.querySelector('.slides');
let slide = document.querySelectorAll('.slide');

function slideLeft(){
    if(getMargin() >= -((slide.length - 2)*500)){ 
    slides.style.marginLeft = `${getMargin()-500}px`;
    }
}
function slideRight(){
    if(getMargin() < 0){ 
    slides.style.marginLeft = `${getMargin()+500}px`;
    }
}
function getMargin(){
    return Number(slides.style.marginLeft.replace('px', ''))
}