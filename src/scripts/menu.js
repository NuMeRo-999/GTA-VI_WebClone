const menuButton = document.getElementById("menu-button");
const sidebar = document.getElementById("sidebar");
const sidebarImages = document.getElementById("sidebar-images");

let menuOpen = false;

menuButton?.addEventListener("click", () => {
  menuOpen = !menuOpen;

  menuButton.classList.toggle("menu-open", menuOpen);
  menuButton.classList.toggle("menu-closed", !menuOpen);

  sidebar?.classList.toggle("menu-sidebar-open", menuOpen);
  sidebar?.classList.toggle("menu-sidebar-closed", !menuOpen);

  if (!menuOpen) {
    sidebarImages?.classList.add("opacity-0");
    sidebarImages?.classList.remove("opacity-100", "[transition-timing-function:cubic-bezier(0.55,0.085,0.68,0.53)]");
  } else {
    sidebarImages?.classList.add("opacity-100", "[transition-timing-function:cubic-bezier(0.55,0.085,0.68,0.53)]");
    sidebarImages?.classList.remove("opacity-0");
  }
});
