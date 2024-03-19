function changeColor(){
    let r=Math.floor(Math.random()*255)
let g=Math.floor(Math.random()*255)
let b=Math.floor(Math.random()*255)
let body = document.querySelector('body');
body.style.backgroundColor = `rgb(${r},${g},${b})`;

  
}
