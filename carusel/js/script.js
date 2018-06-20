let slider = document.querySelector(".slider");
let items = document.querySelectorAll(".slide_item");
let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");
let mainWidth = slider.parentElement.clientWidth

function initial() {
    slider.style.width = (mainWidth * items.length) + "px";
    for (let item of items) {
        item.style.width = mainWidth + "px";
    }
    // nextButton.addEventListener("click", nextSlide);
    // prevButton.addEventListener("click", prevSlide);
}


initial();
let currentimg = 0;
let position = 0;
function nextSlide() {
    position += mainWidth;
    let count = 0;
    let interval = setInterval(function () {
    slider.style.left = -position + "px";
     position++;
     count++; 
     currentimg++
     if(currentimg > items.length -1){
        slider.style.left = mainWidth*(items.length -1)+ "px";
     }
 for(let item of items){
    if (count+=mainWidth) {
        clearInterval(interval);
          }   
 } 
    }, 3000 / mainWidth);
    setTimeout(nextSlide, 3000);
}

nextSlide();







