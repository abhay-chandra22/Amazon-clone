const img = document.querySelectorAll('.header-slider ul img');
const prev_but = document.querySelector('.control_prev');
const next_but = document.querySelector('.control_next');

let n = 0;

function changeSlider(){
    for(let i = 0 ; i< img.length ; i++){
        img[i].style.display = 'none';
    }
    img[n].style.display = 'block';
}

changeSlider();

prev_but.addEventListener('click' , (e)=>{
    if(n > 0){
        n--;
    }else{
        n = img.length - 1 ;
    }
    changeSlider();
})

next_but.addEventListener('click' , (e)=>{
    if(n < img.length-1){
        n++;
    }else{
        n = 0 ;
    }
    changeSlider();
})

const scrollContainer = document.querySelectorAll(".products");
for (const i of scrollContainer) {
    i.addEventListener("wheel",(evt)=>{
        evt.preventDefault();
        i.scrollLeft += evt.deltaY;
    })
    
}