var header = document.querySelector(".header");

window.addEventListener('scroll', function(){
    if(window.scrollY > 1){
        header.classList.add('header-active');
        header.classList.remove('header-disabled');
    }
    if(window.scrollY == 0){
        header.classList.add('header-disabled');
        header.classList.remove('header-active');
    }
})

var button = document.querySelectorAll(".top, .bottom");

window.addEventListener('scroll', function(){
    if(window.scrollY > 1){
        button[0].classList.add('button-active');
        button[0].classList.remove('button-disabled');
        button[1].classList.add('button-active');
        button[1].classList.remove('button-disabled');
    }
    if(window.scrollY == 0){
        button[0].classList.add('button-disabled');
        button[0].classList.remove('button-active');
        button[1].classList.add('button-disabled');
        button[1].classList.remove('button-active');
    }
})

