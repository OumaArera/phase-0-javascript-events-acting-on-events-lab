// Your code here
const moveDodgerLeft = () => {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
  }


  document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();

    }
  });


  const moveDodgerRight = () => {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);

    if (left < 180){
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", event => {
    if (event.key === "ArrowRight"){
        moveDodgerRight();
    }
})

