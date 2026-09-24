
async function loadCharts() {
    const charts = document.querySelectorAll("[data-chart]");

    for (const element of charts) {
        const chartName = element.dataset.chart;

        try {
            const response = await fetch(
                `charts/${chartName}.json?v=${Date.now()}`
            );

            if (!response.ok) {
                throw new Error(
                    `Could not load ${chartName}.json`
                );
            }

            const figure = await response.json();

            Plotly.newPlot(
                element,
                figure.data,
                figure.layout,
                {
                    responsive: true,
                    displaylogo: false
                }
            );

        } catch (error) {
            console.error(
                `Error loading chart: ${chartName}`,
                error
            );
        }
    }
}


async function loadResponses() {
    const responseContainers =
        document.querySelectorAll("[data-responses]");

    for (const element of responseContainers) {
        const responseName = element.dataset.responses;

        try {
            const response = await fetch(
                `charts/${responseName}.json?v=${Date.now()}`
            );
            console.log("HTTP response:", response);

            if (!response.ok) {
                throw new Error(
                    `Could not load ${responseName}.json`
                );
            }

            const data = await response.json();
            console.log("Response JSON:", data);

            element.innerHTML = "";

            data.responses.forEach((responseText) => {
                const responseElement =
                    document.createElement("div");

                responseElement.className = "raw-response";

                const paragraph =
                    document.createElement("p");

                paragraph.textContent = responseText;

                responseElement.appendChild(paragraph);
                element.appendChild(responseElement);
            });

        } catch (error) {
            console.error(
                `Error loading responses: ${responseName}`,
                error
            );
        }
    }
}


document.addEventListener("DOMContentLoaded", () => {
    loadCharts();
    loadResponses();
});
