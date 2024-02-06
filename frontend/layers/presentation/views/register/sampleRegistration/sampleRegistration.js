// layers/presentation/views/register/sampleRegistration/sampleRegistration.js

// Function to fetch and populate dropdown options for sample types from backend
async function populateSampleTypeDropdown() {
    const sampleTypeDropdown = document.getElementById("sampleType");

    try {
        // Fetch sample types from the backend API
        const response = await fetch("../../../infrastructure/api/sampleTypes.js");
        const sampleTypes = await response.json();

        // Populate dropdown options dynamically
        sampleTypes.forEach(type => {
            const option = document.createElement("option");
            option.value = type.id;
            option.text = type.name;
            sampleTypeDropdown.appendChild(option);
        });
    } catch (error) {
        console.error("Error fetching sample types:", error);
    }
}

// Function to set the exam ID in the form (assuming it is received from the previous page)
function setExamId() {
    const examIdInput = document.getElementById("examId");
    // Retrieve the exam ID from the URL, local storage, or any other source
    const examId = "123"; // Replace with actual mechanism to get the exam ID
    examIdInput.value = examId;
}

// Function to register sample
function registerSample() {
    // Implement sample registration logic here
    console.log("Sample registration logic to be implemented.");
}

// Populate dropdowns and set exam ID on page load
document.addEventListener("DOMContentLoaded", function () {
    populateSampleTypeDropdown();
    setExamId();
});
