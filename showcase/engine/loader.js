/* ==========================================================
   INV.UI Engine
   Component Loader
   Version : 1.0.0
========================================================== */

/* ==========================================================
   Load Component HTML
========================================================== */

async function loadComponent(folder) {

    try {

        const response = await fetch(
            `../../components/${folder}/index.html`
        );

        if (!response.ok) {

            throw new Error(
                `Unable to load component: ${folder}`
            );

        }

        return await response.text();

    } catch (error) {

        console.error(error);

        return `
            <p>
                Failed to load component:
                ${folder}
            </p>
        `;

    }

}