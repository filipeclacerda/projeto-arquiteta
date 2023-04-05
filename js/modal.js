function modalHandler(index) {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const project = projects[index];
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("title-modal");
  const modalDescription = document.getElementById("text-modal");
  const modalDetails = document.getElementById("details-modal");
  const modalImages1 = document.getElementById("image-1");
  const modalImages2 = document.getElementById("image-2");
  const modalImages3 = document.getElementById("image-3");
  const modalImages4 = document.getElementById("image-4");

  modalTitle.innerHTML = project.nome + " // " + project.categoria;
  modalDescription.innerHTML = project.descricao;
  modalDetails.innerHTML = project.detalhes + " // " + project.cliente;
  modalImages1.src = project.imagensModal[0];
  modalImages2.src = project.imagensModal[1];
  modalImages3.src = project.imagensModal[2];
  modalImages4.src = project.imagensModal[3];
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
