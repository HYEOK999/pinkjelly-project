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

var a = document.querySelector(".header");

window.addEventListener('scroll', function(){
    if(window.scrollY > 1){
        console.log(123)
        a.classList.add('header-active');
        a.classList.remove('header-disabled');
    }
    if(window.scrollY == 0){
        console.log(456)
        a.classList.add('header-disabled');
        a.classList.remove('header-active');
    }
})
slideShow();

