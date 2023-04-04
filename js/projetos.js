const projects = [
  {
    nome: "CASA 1",
    descricao: "Descrição do CASA 1",
    categoria: "CASAS",
    imagens: [
      "../assets/projeto-img-1.png",
      "../assets/projeto-img-2.png",
      "../assets/projeto-img-3.png",
      "../assets/projeto-img-4.png",
      "../assets/projeto-img-5.png",
      "../assets/projeto-img-2.png",
      "../assets/projeto-img-3.png",
      "../assets/projeto-img-4.png",
    ],
  },
  {
    nome: "CASA 2",
    descricao: "Descrição do CASA 1",
    categoria: "CASAS",
    imagens: [
      "../assets/projeto-img-1.png",
      "../assets/projeto-img-2.png",
      "../assets/projeto-img-3.png",
      "../assets/projeto-img-4.png",
      "../assets/projeto-img-5.png",
      "../assets/projeto-img-2.png",
      "../assets/projeto-img-3.png",
      "../assets/projeto-img-4.png",
    ],
  },
  {
    nome: "CASA 3",
    descricao: "Descrição do CASA 1",
    categoria: "CASAS",
    imagens: [
      "../assets/projeto-img-1.png",
      "../assets/projeto-img-2.png",
      "../assets/projeto-img-3.png",
      "../assets/projeto-img-4.png",
      "../assets/projeto-img-5.png",
      "../assets/projeto-img-2.png",
      "../assets/projeto-img-3.png",
      "../assets/projeto-img-4.png",
    ],
  },
  {
    nome: "Projeto 4",
    descricao: "Descrição do Projeto 1",
    categoria: "INTERIORES",
    imagens: [
      "../assets/projeto-img-1.png",
      "../assets/projeto-img-2.png",
      "../assets/projeto-img-3.png",
      "../assets/projeto-img-4.png",
      "../assets/projeto-img-5.png",
      "../assets/projeto-img-2.png",
      "../assets/projeto-img-3.png",
      "../assets/projeto-img-4.png",
    ],
  },
  {
    nome: "Projeto 5",
    descricao: "Descrição do Projeto 1",
    categoria: "INTERIORES",
    imagens: [
      "../assets/projeto-img-1.png",
      "../assets/projeto-img-2.png",
      "../assets/projeto-img-3.png",
      "../assets/projeto-img-4.png",
      "../assets/projeto-img-5.png",
      "../assets/projeto-img-2.png",
      "../assets/projeto-img-3.png",
      "../assets/projeto-img-4.png",
    ],
  },
  {
    nome: "Projeto 6",
    descricao: "Descrição do Projeto 1",
    categoria: "INTERIORES",
    imagens: [
      "../assets/projeto-img-1.png",
      "../assets/projeto-img-2.png",
      "../assets/projeto-img-3.png",
      "../assets/projeto-img-4.png",
      "../assets/projeto-img-5.png",
      "../assets/projeto-img-2.png",
      "../assets/projeto-img-3.png",
      "../assets/projeto-img-4.png",
    ],
  },
  {
    nome: "Projeto 7",
    descricao: "Descrição do Projeto 2",
    categoria: "COMERCIAL",
    imagens: [
      "../assets/projeto-img-1.png",
      "../assets/projeto-img-2.png",
      "../assets/projeto-img-3.png",
      "../assets/projeto-img-4.png",
      "../assets/projeto-img-5.png",
      "../assets/projeto-img-2.png",
      "../assets/projeto-img-3.png",
      "../assets/projeto-img-4.png",
    ],
  },
];

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
