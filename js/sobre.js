var actualSlide = 0;
const SLIDES_AMOUNT =
  document.getElementById("slider-timeline").childElementCount - 1;
const SLIDE_WIDTH = 700;

function nextSlide() {
  if (actualSlide < SLIDES_AMOUNT) {
    actualSlide += 1;
  } else {
    actualSlide = 0;
  }
  moveSlide();
}
function previousSlide() {
  if (actualSlide > 0) {
    actualSlide -= 1;
  } else {
    actualSlide = SLIDES_AMOUNT;
  }
  moveSlide();
}

function moveSlide() {
  let moveWidth = "-" + actualSlide * SLIDE_WIDTH + "px";
  $("body").get(0).style.setProperty("--margin-slider", moveWidth);
}
