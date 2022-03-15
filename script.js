const canvas = document.querySelector('.canvas');
const colorBut = document.querySelector('#colorPicker');




function grid(num){
    let size = 500/num+'px';
    for(i=0; i<num; i++){
        for(f=0; f<num; f++){
            const newPixel = document.createElement('div');
            newPixel.classList.add('pixel');
            newPixel.setAttribute("style", 'width: '+size);
            newPixel.style.height = size;
            canvas.appendChild(newPixel);
        };
        
    };
};

let draw = document.querySelectorAll('.pixel').forEach(draw => draw.addEventListener('mouseover', 'touchmove',  ()=>{
draw.style.backgroundColor = color;
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
    canvasSize();
});

function canvasSize(){
    let newSize =prompt("Enter a number from 1 to 64 to resize the canvas: ");
    canvas.replaceChildren();
    numPixel = parseInt(newSize);
    grid(numPixel);
    let draw = document.querySelectorAll('.pixel').forEach(draw => draw.addEventListener('mouseover',  ()=>{
        draw.style.backgroundColor = 'balck';
        }));
};

function loadingSize(){
    newSize = 16;
    grid(newSize);
    let draw = document.querySelectorAll('.pixel').forEach(draw => draw.addEventListener('mouseover',  ()=>{
        draw.style.backgroundColor = 'black';
        }));
};

colorBut.addEventListener('click', ()=>{
    colorChange();
})


function colorChange(){
    const color = document.querySelector('#colorPicker').value;
    draw.style.backgroundColor = color;    
    console.log(color);
}

console.log(loadingSize());