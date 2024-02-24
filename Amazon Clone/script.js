const images = document.querySelectorAll('.image-slider ul img');
const prev_img = document.querySelector('.prev-img');
const next_img = document.querySelector('.next-img');

let count = 0;

function changeImage(){
    for(let i=0;i<images.length;i++){
        images[i].style.display = 'none';
    }
    images[count].style.display = 'block';
}

changeImage();

prev_img.addEventListener('click', (e)=>{
    if(count>0){
        count--;
    }
    else{
        count=images.length-1;
    }
    changeImage();
})

next_img.addEventListener('click', (e)=>{
    if(count<images.length-1){
        count++;
    }
    else{
        count=0;
    }
    changeImage();
})


var scrollContainer = document.querySelectorAll(".products");

for (const item of scrollContainer) {
    item.addEventListener('wheel',(e)=>{
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    });
}