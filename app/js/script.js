const btnHamburger = document.querySelector('#btnHambuger');
const header = document.querySelector('.header');
const fadeElements = document.querySelectorAll('.has-fade');
const body = document.querySelector('body')


btnHamburger.addEventListener('click', function(){
    if (header.classList.contains('open')){ // Close Hambuger Menu
        body.classList.remove('noscroll')
        header.classList.remove('open');
        fadeElements.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out')
        })
    }
    else { // Open Hambuger Menu
        body.classList.add('noscroll')
        header.classList.add('open');
        fadeElements.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out')
        })
    }
})


/* btnHamburger.addEventListener('click', function(){
    header.classList.toggle('open')
    fadeElements.forEach(function(element){
        element.classList.toggle('fade-in')
        element.classList.toggle('fade-out')
    })
}) */