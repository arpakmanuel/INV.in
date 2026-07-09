/* ==========================================================
   INV.UI Engine
   Component Renderer
   Version : 1.0.0
========================================================== */


/* ==========================================================
   Render Component
========================================================== */

async function renderComponent(component) {

    const componentHTML = await loadComponent(component.folder);

    return `
        <article class="component-card">

            <span class="component-id">
                ${component.id}
            </span>

            <h2>
                ${component.name}
            </h2>

            <p>
                ${component.description}
            </p>

            <div class="component-preview">

                ${componentHTML}

            </div>

        </article>
    `;

}