
// Main Slider js Start here 
const slides = document.querySelectorAll(".slider .slides .slide");
let flage = 0;
const slide_change = (num) => {
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("slide_active");
    }
    flage = flage + num;
    if (flage == slides.length) {
        flage = 0;
    }
    if (flage < 0) {
        flage = slides.length - 1;
    }
    slides[flage].classList.add("slide_active");
}
// Main Slider js Start here 

// incremental slider start here 

window.addEventListener("scroll", () => {
    const number = document.querySelectorAll('.number');
    for(i=0; i<number.length;i++){
        const con_Position = number[i].getBoundingClientRect().top;
        const scr_position = window.innerHeight;
        if(con_Position < scr_position){
            const speed = 500;
            number.forEach(element => {
                incNumber(element);
            });

            function incNumber(elem) {
                let text = +elem.innerText;
                const value = +elem.getAttribute("data-target")
                const inc = value / speed;
                if (text < value) {
                    elem.innerText = Math.ceil(inc + text);
                    setTimeout(() => {
                        incNumber(elem);
                    }, 1);
                } else {
                    elem.innerText = Math.ceil(value);
                }
            }
        }
    }


})


// window.addEventListener("scroll", () => {
//     for (i = 0; i < number.length; i++) {
//         var count_number = number[i].getBoundingClientRect().top;

//         // console.log(document.body.offsetHeight);
        
//         if (count_number < document.body.offsetHeight) {
//         }
//     }
// });

// incremental slider start here