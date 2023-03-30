let actualSlide = 0;
const SLIDES_AMOUNT = 2
const SLIDE_WIDTH = 700

function nextSlide() {
    if (actualSlide < SLIDES_AMOUNT){
        actualSlide += 1
    }
    else{
        actualSlide = 0
    }
    console.log('teste')
    moveSlide()
}
function previousSlide() {
    if (actualSlide > 0) {
        actualSlide -= 1
    }
    else{
        actualSlide = SLIDES_AMOUNT
    }
    moveSlide()
}

function moveSlide(){
    let moveWidth = '-' + actualSlide * SLIDE_WIDTH + 'px'
    $('body').get(0).style.setProperty("--margin-slider", moveWidth)
    console.log($('body').get(0).style)
}

$('#previous-button').on('click', () => {
    previousSlide()
})
$('#next-button').on('click', () => {
    nextSlide()
})
