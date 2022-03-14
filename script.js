const canvas = document.querySelector('.canvas')
let numPixel = 16;
let size = 500/numPixel+'px';



for(i=0; i<numPixel; i++){
    for(f=0; f<numPixel; f++){
        const newPixel = document.createElement('div');
        newPixel.classList.add('pixel', 'party');
        newPixel.setAttribute("style", 'width: '+size);
        newPixel.style.height = size;
        newPixel.style.height = 500/numPixel;
        canvas.appendChild(newPixel);
    };
    
}





