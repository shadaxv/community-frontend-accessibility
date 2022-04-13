import { rovingIndex } from "roving-ux";

const submenus = document.querySelectorAll(".submenu-opener--arrow");

submenus.forEach((element) =>
  rovingIndex({
    element,
    target: "a",
  })
);

submenus.forEach((submenu) => {
  submenu.addEventListener("focusin", (e) => {
    e.currentTarget.setAttribute("aria-expanded", true);
  });

  submenu.addEventListener("focusout", (e) => {
    e.currentTarget.setAttribute("aria-expanded", false);
  });
});
