// layers/presentation/views/register/resultRegistration/resultRegistration.js

let detalleResultadoCount = 1; // Variable para contar la cantidad de DetalleResultadoMedida

// Function to add a new DetalleResultadoMedida section dynamically
function addDetalleResultado() {
    const detalleResultadoContainer = document.getElementById("detalleResultadoContainer");

    // Create a dynamic section for DetalleResultadoMedida
    const detalleResultadoSection = document.createElement("div");
    detalleResultadoSection.classList.add("detalle-resultado-section");

    const magnitudeDropdown = document.createElement("select");
    magnitudeDropdown.name = `magnitude_${detalleResultadoCount}`;
    // Populate dropdown options dynamically from backend
    populateMagnitudeOptions(magnitudeDropdown);

    const numericValueInput = document.createElement("input");
    numericValueInput.type = "text";
    numericValueInput.name = `numericValue_${detalleResultadoCount}`;
    numericValueInput.placeholder = "Valor Numérico";
    numericValueInput.required = true;

    const qualitativeResultInput = document.createElement("input");
    qualitativeResultInput.type = "text";
    qualitativeResultInput.name = `qualitativeResult_${detalleResultadoCount}`;
    qualitativeResultInput.placeholder = "Resultado Cualitativo";
    qualitativeResultInput.required = true;

    const additionalDescriptionInput = document.createElement("textarea");
    additionalDescriptionInput.name = `additionalDescription_${detalleResultadoCount}`;
    additionalDescriptionInput.placeholder = "Descripción Cualitativa Adicional";

    detalleResultadoSection.appendChild(magnitudeDropdown);
    detalleResultadoSection.appendChild(numericValueInput);
    detalleResultadoSection.appendChild(qualitativeResultInput);
    detalleResultadoSection.appendChild(additionalDescriptionInput);

    detalleResultadoContainer.appendChild(detalleResultadoSection);
    detalleResultadoCount++;
}

// Function to populate Magnitude dropdown options from backend
async function populateMagnitudeOptions(dropdown) {
    // Fetch data from the backend API for Magnitudes
    const response = await fetch("../../../infrastructure/api/magnitudes.js");
    const magnitudes = await response.json();

    // Populate dropdown options dynamically
    magnitudes.forEach(magnitude => {
        const option = document.createElement("option");
        option.value = magnitude.id;
        option.text = `${magnitude.name} (${magnitude.unit})`;
        dropdown.appendChild(option);
    });
}

// Function to register results
function registerResults() {
    // Implement result registration logic here
    console.log("Result registration logic to be implemented.");
}

// Populate Magnitude dropdowns on page load
document.addEventListener("DOMContentLoaded", function () {
    populateMagnitudeOptions(document.getElementById("magnitudeDropdownContainer"));
});
