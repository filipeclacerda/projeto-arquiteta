var actualSlide = 0;
let SLIDES_AMOUNT = 0;
waitForElm("#slider-timeline").then((elem) => {
  SLIDES_AMOUNT =
    document.getElementById("slider-timeline").childElementCount - 1;
});

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

// section ABOUT and HOME
function renderHandler() {
  const projects = document.getElementsByClassName("project-images-min");
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    renderProjectMin(Number(project.dataset.number), project);
  }
}

function renderProjectMin(index, elem = null) {
  const projectMin = projects[index];
  const projectImagesMin = elem
    ? elem
    : document.getElementById("project-images-min");

  // clear previous images
  projectImagesMin.innerHTML = "";

  // add new images
  for (let i = 0; i < projectMin.imagens.length; i++) {
    const div = document.createElement("div");
    const image = document.createElement("img");
    div.classList.add("project-image-min-container");
    div.setAttribute(
      "data-before",
      projectMin.nome + " // " + projectMin.categoria
    );
    if (i == 0) {
      div.setAttribute("onclick", "modalHandler(" + index + ")");
    }
    div.appendChild(image);
    image.classList.add("project-image-min");
    image.src = projectMin.imagens[i];
    projectImagesMin.appendChild(div);
    if (i == 3) {
      break;
    }
  }
}
//section PROJECTS
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

  const projectImages = document.getElementById("project-images");

  // clear previous images
  projectImages.innerHTML = "";

  // add new images
  project.imagens.forEach((imageSrc, index) => {
    const div = document.createElement("div");
    const image = document.createElement("img");
    div.classList.add("project-image-container");
    div.setAttribute("data-before", project.nome + " // " + project.categoria);
    if (index == 0) {
      div.setAttribute("onclick", "modalHandler(" + currentProjectIndex + ")");
    }
    div.appendChild(image);
    image.classList.add("project-image");
    image.src = imageSrc;
    projectImages.appendChild(div);
  });
}

function prevProject() {
  currentProjectIndex =
    currentProjectIndex > 0 ? currentProjectIndex - 1 : projects.length - 1;
  renderProject();
  window.scrollTo({ top: 300, behavior: "smooth" });
}

function nextProject() {
  currentProjectIndex =
    currentProjectIndex < projects.length - 1 ? currentProjectIndex + 1 : 0;
  renderProject();
  window.scrollTo({ top: 300, behavior: "smooth" });
}

function setCategoryFilter(category) {
  currentCategory = category;
  currentProjectIndex = 0;
  renderProject();
  removeActive();
  setActive(category ? category.toLowerCase() : "todos");
}

function setActive(idName) {
  $("#" + idName).addClass("active");
}
function removeActive() {
  $(".category").removeClass("active");
}

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

// function isElementInViewport(elem) {
//   var element = $(elem);

//   // Get the scroll position of the page.
//   var scrollElem =
//     navigator.userAgent.toLowerCase().indexOf("webkit") != -1 ? "body" : "html";
//   var viewportTop = $(scrollElem).scrollTop();
//   var viewportBottom = viewportTop + $(window).height();

//   // Get the position of the element on the page.
//   var elemTop = Math.round(element.offset().top);
//   var elemBottom = elemTop + element.height();

//   return elemTop < viewportBottom && elemBottom > viewportTop;
// }

function isElementInViewport(el) {
  const rect = el[0].getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Check if it's time to start the animation.
function checkAnimation(elementId, className) {
  var element = $("#" + elementId);
  // If the animation has already been started
  if (element.hasClass(className)) return;

  if (isElementInViewport(element)) {
    // Start the animation
    element.addClass(className);
  }
}

// Capture scroll events
$(window).scroll(function () {
  if (window.location.pathname == "/sobre") {
    checkAnimation("line-text-2", "start");
    checkAnimation("line-text-3", "start-left");
  }
});
