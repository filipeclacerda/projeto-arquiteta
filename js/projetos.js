const projects = [
  {
    "nome": "CASA 1",
    "descricao": "Descrição do CASA 1",
    "categoria": "CASAS",
    "imagens": [
      "img/projeto1-1.jpg",
      "img/projeto1-2.jpg",
      "img/projeto1-3.jpg"
    ]
  },
  {
    "nome": "CASA 2",
    "descricao": "Descrição do CASA 1",
    "categoria": "CASAS",
    "imagens": [
      "img/projeto1-1.jpg",
      "img/projeto1-2.jpg",
      "img/projeto1-3.jpg"
    ]
  },
  {
    "nome": "CASA 3",
    "descricao": "Descrição do CASA 1",
    "categoria": "CASAS",
    "imagens": [
      "img/projeto1-1.jpg",
      "img/projeto1-2.jpg",
      "img/projeto1-3.jpg"
    ]
  },
  {
    "nome": "Projeto 4",
    "descricao": "Descrição do Projeto 1",
    "categoria": "INTERIORES",
    "imagens": [
      "../assets/laptop.png",
      "../assets/laptop.png",
      "../assets/laptop.png"
    ]
  },
  {
    "nome": "Projeto 5",
    "descricao": "Descrição do Projeto 1",
    "categoria": "INTERIORES",
    "imagens": [
      "../assets/laptop.png",
      "../assets/laptop.png",
      "../assets/laptop.png"
    ]
  },
  {
    "nome": "Projeto 6",
    "descricao": "Descrição do Projeto 1",
    "categoria": "INTERIORES",
    "imagens": [
      "../assets/laptop.png",
      "../assets/laptop.png",
      "../assets/laptop.png"
    ]
  },
  {
    "nome": "Projeto 7",
    "descricao": "Descrição do Projeto 2",
    "categoria": "COMERCIAL",
    "imagens": [
      "../assets/laptop.png",
      "../assets/laptop.png",
      "../assets/laptop.png"
    ]
  }
];

let currentProjectIndex = 0;
let currentCategory = "";

function renderProject() {
  const project = projects[currentProjectIndex];
  if (currentCategory && project.categoria !== currentCategory) {
    // skip this project if it doesn't match the current category filter
    currentProjectIndex += currentProjectIndex < projects.length - 1 ? 1 : -currentProjectIndex;
    renderProject();
    return;
  }
  const projectName = document.getElementById("project-name");
  const projectDescription = document.getElementById("project-description");
  const projectCategory = document.getElementById("project-category");
  const projectImages = document.getElementById("project-images");

  projectName.textContent = project.nome;
  projectDescription.textContent = project.descricao;
  projectCategory.textContent = project.categoria;

  // clear previous images
  projectImages.innerHTML = "";

  // add new images
  project.imagens.forEach((imageSrc) => {
    const image = document.createElement("img");
    image.src = imageSrc;
    projectImages.appendChild(image);
  });
}

function prevProject() {
  currentProjectIndex = currentProjectIndex > 0 ? currentProjectIndex - 1 : projects.length - 1;
  renderProject();
}

function nextProject() {
  currentProjectIndex = currentProjectIndex < projects.length - 1 ? currentProjectIndex + 1 : 0;
  renderProject();
}

function setCategoryFilter(category) {
  currentCategory = category;
  currentProjectIndex = 0;
  renderProject();
  removeActive();
  setActive(category.toLowerCase())
}

function setActive(idName){
  $('#'+ idName).addClass('active')
}
function removeActive(){
  $('.category').removeClass('active')
}

renderProject();