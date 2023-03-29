const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "/pages/404.html",
  "/": "/pages/home.html",
  "/sobre": "/pages/sobre.html",
  "/projetos": "/pages/projetos.html",
  "/contato": "/pages/contato.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
  const scriptName = path == '/' ? '/home.js' : `${path}.js`
  $("#page-script").load(`/js${scriptName}`);
  $('#navbar').load('../pages/navbar.html')
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();