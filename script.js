const drawer = document.querySelector(".nav-drawer");

if (drawer) {
  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      drawer.removeAttribute("open");
    });
  });
}
