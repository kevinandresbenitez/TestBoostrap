// Animation Inicio Section
let Inicio_Section = document.getElementById('Inicio');
let Animated_Text_Inicio = Inicio_Section.querySelectorAll('.text__Animated');

if(Animated_Text_Inicio){
    window.addEventListener('load',()=>{
        Animated_Text_Inicio.forEach((domElement)=>{
            domElement.style.animation = 'showText__Animation 1s';
        })
    })
}


// Animating Cards scroll
const Cards_Observer = new IntersectionObserver((Intersections)=>{
    Intersections.forEach((intersection)=>{
        if(intersection.isIntersecting){
            intersection.target.style.animation = 'showCard__Animation 1s';
        }else{
            intersection.target.style.animation = 'hiddeCard__Animation 1s';
        }
    })
})
const card_Elements = document.querySelectorAll('.card');
card_Elements.forEach((elementDom)=>{
    Cards_Observer.observe(elementDom);
})


// Animating Text animated
const Text_Observer = new IntersectionObserver((Intersections)=>{
    Intersections.forEach((intersection)=>{
        if(intersection.isIntersecting){
            intersection.target.style.animation = 'showText__Animation 1s';
        }else{
            intersection.target.style.animation = 'hiddeText__Animation 1s';
        }
    })
})
const text_Elements = document.querySelectorAll('.text__Animated');
text_Elements.forEach((elementDom)=>{
    Text_Observer.observe(elementDom);
})