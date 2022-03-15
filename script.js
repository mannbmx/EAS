const canvas = document.querySelector('.canvas');





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
    canvasSize();
});

function canvasSize(){
    let newSize =prompt("Enter a number from 1 to 64 to resize the canvas: ");
    canvas.replaceChildren();
    numPixel = parseInt(newSize);
    grid(numPixel);
    let draw = document.querySelectorAll('.pixel').forEach(draw => draw.addEventListener('mouseover',  ()=>{
        draw.style.backgroundColor = 'black';
        }));
};

function loadingSize(){
    newSize = 16;
    grid(newSize);
    let draw = document.querySelectorAll('.pixel').forEach(draw => draw.addEventListener('mouseover',  ()=>{
        draw.style.backgroundColor = 'black';
        }));
};

const test2 = document.querySelector('#colorPicker');
test2.addEventListener('input', ()=> {
    let var4 = test2.value;
    let draw = document.querySelectorAll('.pixel').forEach(draw => draw.addEventListener('mouseover',  ()=>{
        draw.style.backgroundColor = var4;
        }));

});


console.log(loadingSize());