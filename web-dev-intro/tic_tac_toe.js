function squareOnClick(){
    console.log('square clicked');
}

function executeSquareSelection(){
    
    const squares = document.querySelectorAll('.square');
    squares.forEach(s=>{
        s.addEventListener('click', squareOnClick);
    });
}
document.addEventListener("DOMContentLoaded", executeSquareSelection);