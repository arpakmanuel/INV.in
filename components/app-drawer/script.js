/* ==========================================================
   INV.UI
   UI-005 : App Drawer
   Version : 1.1.0
========================================================== */


/* ==========================================================
   Drawer Controller
========================================================== */

document.addEventListener("click", (event) => {

    const menuButton = event.target.closest(".header-menu-btn");

    const drawer = document.getElementById("app-drawer");

    const overlay = document.getElementById("drawer-overlay");


    /* ==========================================================
       Open / Close Drawer
    ========================================================== */

    if (menuButton && drawer && overlay) {

        const isOpen = drawer.classList.contains("open");

        drawer.classList.toggle("open", !isOpen);

        overlay.classList.toggle("open", !isOpen);

        return;

    }


    /* ==========================================================
       Close on Overlay Click
    ========================================================== */

    if (
        event.target.id === "drawer-overlay" &&
        drawer &&
        overlay
    ) {

        drawer.classList.remove("open");

        overlay.classList.remove("open");

    }

});


/* ==========================================================
   Close on Escape
========================================================== */

document.addEventListener("keydown", (event) => {

    if (event.key !== "Escape") {

        return;

    }

    const drawer = document.getElementById("app-drawer");

    const overlay = document.getElementById("drawer-overlay");

    if (!drawer || !overlay) {

        return;

    }

    drawer.classList.remove("open");

    overlay.classList.remove("open");

});