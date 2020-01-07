const galleryContainer = document.querySelector('.gallery');
const imgArr = [];

galleryContainer.addEventListener('DOMContentLoaded', ()=>{
    for(let i = 0;i<imgArr.length;i++){
        const newImage = document.createElement('img');
        newImage.className = ' ';
        newImage.src = imgArr[i];
        galleryContainer.appendChild(newImage);
    }
})