function slideShow(){
    var index = 0;

    // console.log(document.getElementById("img-1"))
    var img = document.querySelectorAll('#img-1, #img-2, #img-3, #img-4, #img-5, #img-6, #img-7');

    var intervalId = setInterval( function(){
        if(img[index].checked == true){
            img[index].checked = false;    
        }
        if (img[index].checked == false){
            index ++;
            img[index].checked = true;
        }
        if(index == 6){
            index = 0;
        }
    },2000);
}

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
        console.log(4565);
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
slideShow();

