const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocationChange();
};

const routes = {
  404: "/pages/404.html",
  "/": "/pages/home.html",
  "/sobre": "/pages/sobre.html",
  "/projetos": "/pages/projetos.html",
  "/contato": "/pages/contato.html",
};

const handleLocationChange = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
  const scriptName = path == "/" ? "/home.js" : `${path}.js`;
  $("#page-script").load(`/js${scriptName}`);
  $(".menu-item").removeClass("active");
  addActive();
  window.scrollTo(0, 0);
  if(path == '/projetos'){
    try{
      renderProject()
    }
    catch (e){
    }
  }
};

window.addEventListener("popstate", handleLocationChange);
window.route = route;

function addActive() {
  $(`.menu-item[href="${window.location.pathname}"]`).addClass("active");
}
handleLocationChange();