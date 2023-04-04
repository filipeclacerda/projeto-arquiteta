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
  project.imagens.forEach((imageSrc) => {
    const div = document.createElement("div");
    const image = document.createElement("img");
    div.classList.add("project-image-container");
    div.setAttribute("data-before", project.nome + " // " + project.categoria);
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

renderProject();
