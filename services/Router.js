const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const url = event.target.getAttribute("href");
        Router.go(url);
      });
    });
    // Event handler for URL changes
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });

    // Check the initial URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ route }, null, route);
    }
    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Menu";
        break;
      case "/order":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Your Order";
        break;
      default:
        if (route.startsWith("/product/")) {
          pageElement = document.createElement("h1");
          pageElement.innerHTML = "Details";
          const paramId = route.substring(route.lastIndexOf("-") + 1);
          pageElement.dataset.id = paramId;
        }
    }
    let mainElement = document.querySelector("main");
    // Quick and dirty way of removing old elements
    mainElement.innerHTML = "";
    // Another way
    //mainElement.children[0].remove();
    // Append element
    mainElement.appendChild(pageElement);
    window.scrollX = 0;
    window.scrollY = 0;
  },
};

export default Router;
