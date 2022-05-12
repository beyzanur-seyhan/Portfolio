/****************** References Slider Start ******************/
let slider=document.querySelector(".slider");
let leftbtn=document.querySelector(".left");
let rightbtn=document.querySelector(".right")

rightbtn.addEventListener('click',rightBtn)
leftbtn.addEventListener('click',leftBtn)
/****************** References Slider End ******************/

/****************** Right Button Event Start ******************/
function rightBtn(){
    
    slider.scrollLeft+=250;
}
/****************** Right Button Event End ******************/

/****************** Left Button Event Start ******************/
function leftBtn(){

    slider.scrollLeft-=250;

}
/****************** Left Button Event End ******************/

/******************  Mobile Hamburger Menu Click Event Start ******************/
let contentmenu=document.querySelector(".content-menu");
let leftside=document.querySelector(".left-side>a");

leftside.addEventListener('click',leftsideBtn)

function leftsideBtn(){
    
    if(contentmenu.classList.contains("d-none")){
        contentmenu.classList.replace('d-none','d-block')
    }

    else{
        contentmenu.classList.replace('d-block','d-none')
    }

}
/******************  Mobile Hamburger Menu Click Event End ******************/