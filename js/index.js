// Your code goes here
// const bus = document.querySelector('.intro')
// bus.addEventListener('mouseover', function(event){
//     bus.style.transform = 'scale(1.3)';
//     bus.style.transition = 'transform 0.5s'
// });

// const bus = document.querySelector('.intro')
// bus.addEventListener('mouseleave', function(event){
//     bus.style.transform = 'scale(1.0)';
//     bus.style.transition = 'transform 0.5s'
// });

const allCatImages = document.querySelectorAll('.funBus');
allCatImages.forEach((image) => {
  image.addEventListener('mouseenter', (event) => {
    image.style.transform = 'scale(.7)';
    image.style.transition = 'transform 0.5s';
  });
  image.addEventListener('mouseleave', (event) => {
    image.style.transform = 'scale(1.0)';
    image.style.transition = 'transform 0.5s';
  })
});

const headline = document.querySelector('.logo-heading')
headline.addEventListener('click', function(event){
    headline.style.color = "red"
})

const intro = document.querySelector('.intro-text')
intro.addEventListener('drag', function(event){
    intro.style.fontSize = "20px"
})

const dblclick = document.querySelector('.text-content')
dblclick.addEventListener('dblclick', function(event){
    dblclick.style.color = "white"
})

let font= false
const wheel = document.querySelector('.content-destination')
wheel.addEventListener('wheel', function(event){
    if (font) {
        wheel.style.color = "black";
        font=false;
    }
    else {
        wheel.style.color = "red"
        font = true;
    }
})

const mousemove = document.querySelector('.nav-link')
mousemove.addEventListener('mousemove', function(event){
    mousemove.style.fontFamily = "Courier New, sans-serif"
})

const keydown = document.querySelector('.destination')
keydown.addEventListener('mouseover', function(event){
    keydown.style.color = "purple"
})

// const keydown = window.querySelector('body')
// keydown.addEventListener('scroll', function(event){
//     keydown.style.backgroundColor = "teal"
// })

const awaits = document.querySelector('.awaits')
awaits.addEventListener('mouseover', function(event){
    awaits.style.color = "teal"
})

const nav =document.querySelector('.nav')
nav.addEventListener('click', function(event){
    nav.event.preventDefault();
})