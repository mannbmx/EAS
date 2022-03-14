const canvas = document.querySelector('.canvas')
let numPixel = 16;
let size = 500/numPixel+'px';


function grid(numPixel){
    for(i=0; i<numPixel; i++){
        for(f=0; f<numPixel; f++){
            const newPixel = document.createElement('div');
            newPixel.classList.add('pixel');
            newPixel.setAttribute("style", 'width: '+size);
            newPixel.style.height = size;
            newPixel.style.height = 500/numPixel;
            canvas.appendChild(newPixel);
        };
        
    }
};

let draw = document.querySelectorAll('.pixel').forEach(draw => draw.addEventListener('mouseover',  ()=>{
draw.style.backgroundColor = 'black';
}));


const eraseBut = document.querySelector('#erase');
eraseBut.addEventListener('click', ()=>{
   erase();
});

function erase(){
    let e = document.querySelectorAll('.pixel').forEach(e => e.style.backgroundColor = '');
};

const resize = document.querySelector('#changeSize');
resize.addEventListener('click', ()=>{
    test();
});

function test(){
    let newSize =prompt("Enter a number from 1 to 64 to resize the canvas: ");
    numPixel = parseInt(newSize);
    grid(numPixel);
};