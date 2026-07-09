/* ==========================================================
   INV.UI Showcase
   Engine Initialization
   Version : 1.0.0
========================================================== */


/* ==========================================================
   Initialize Showcase
========================================================== */

async function initializeShowcase() {

    const componentLibrary = document.querySelector(
        ".component-library"
    );

    if (!componentLibrary) {

        console.error(
            "INV.UI Engine: Component library container not found."
        );

        return;

    }

    componentLibrary.innerHTML = "";

    for (const component of componentRegistry) {

        const componentCard = await renderComponent(component);

        componentLibrary.insertAdjacentHTML(
            "beforeend",
            componentCard
        );

    }

}


/* ==========================================================
   Start Engine
========================================================== */

document.addEventListener(
    "DOMContentLoaded",
    initializeShowcase
);