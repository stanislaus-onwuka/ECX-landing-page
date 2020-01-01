const imgSlide = document.querySelector('.slide');
const images = ['"./images/Achievements slides/Totel_Photography-6587.jpg"','"./images/Achievements slides/Totel_Photography-6634.jpg"','"./images/Achievements slides/Totel_Photography-6772.jpg"','"./images/Achievements slides/Totel_Photography-6915.jpg"'];


let x = 0;

function slider() {
    if (x < images.length){
        x = x + 1;
    }else{
        x = 1;
    }
    imgSlide.innerHTML = "<img src="+images[x-1]+" class = slide-img>";
}

setInterval(slider, 2000);