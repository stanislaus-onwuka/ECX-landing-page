const galleryContainer = document.querySelector('.pictures');
const imgArr = ['https://res.cloudinary.com/ecx/image/upload/q_auto,f_auto/v1578312244/ECX%20gallery/All%20Pictures/Totel_Photography-7425_jp2bjm.jpg',
                'https://res.cloudinary.com/ecx/image/upload/q_auto,f_auto/v1578312242/ECX%20gallery/All%20Pictures/Totel_Photography-6856_xfxjmf.jpg',
                'https://res.cloudinary.com/ecx/image/upload/q_auto,f_auto/v1578312242/ECX%20gallery/All%20Pictures/Totel_Photography-7431_izfscu.jpg'
                ];


window.addEventListener('DOMContentLoaded', ()=>{

    for(let i = 0;i<imgArr.length;i++){
        const newImage = document.createElement('img');
        const imgDiv = document.createElement('div');
        imgDiv.className = 'picture';
        newImage.src = imgArr[i];
        imgDiv.appendChild(newImage);
        galleryContainer.appendChild(imgDiv);
    }
})