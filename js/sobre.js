var actualSlide = 0;
const SLIDES_AMOUNT =
  document.getElementById("slider-timeline").childElementCount - 1;

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
  let moveWidth = "-" + actualSlide * $(".slide").width() + "px";
  $("body").get(0).style.setProperty("--margin-slider", moveWidth);
}

$(window).resize(function () {
  moveSlide();
});

let currentProjectIndex = 0;
let currentCategory = "";

function renderProject() {
  const project = projects[currentProjectIndex];
  if (currentCategory && project.categoria !== currentCategory) {
    // skip this project if it doesn't match the current category filter
    currentProjectIndex +=
      currentProjectIndex < projects.length - 1 ? 1 : -currentProjectIndex;
    renderProject();
    return;
  }

  const projectImages = document.getElementById("project-images-min");

  // clear previous images
  projectImages.innerHTML = "";

  // add new images
  for (let i = 0; i< project.imagens.length; i++) {
    const div = document.createElement("div");
    const image = document.createElement("img");
    div.classList.add("project-image-min-container");
    div.setAttribute("data-before", project.nome + " // " + project.categoria);
    div.appendChild(image);
    image.classList.add("project-image-min");
    image.src = project.imagens[i];
    projectImages.appendChild(div);
    if(i == 3){
      break;
    }
  }
}

renderProject();
