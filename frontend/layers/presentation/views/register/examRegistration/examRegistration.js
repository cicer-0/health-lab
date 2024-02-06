// layers/presentation/views/register/examRegistration/examRegistration.js

import { getDoctors } from "../../../../infrastructure/api/doctorAPi.js";
import { getPatients } from "../../../../infrastructure/api/patientApi.js";
import { getExamTypes } from "../../../../infrastructure/api/examTypeApi.js";

const examTypesContainer = document.getElementById("examTypesContainer");
const addExamTypeBtn = document.getElementById("addExamTypeBtn");
const registerExamBtn = document.getElementById("registerExamBtn");

let examTypeCounter = 1;

// Function to add a new exam type field dynamically
export async function addExamType() {
  const examTypeContainer = document.createElement("div");
  examTypeContainer.classList.add("exam-type-container");

  const examTypeLabel = document.createElement("label");
  examTypeLabel.textContent = `Tipo de Examen ${examTypeCounter}:`;

  const examTypeSelect = document.createElement("select");
  examTypeSelect.id = `examType${examTypeCounter}`;
  examTypeSelect.name = `examType${examTypeCounter}`;

  try {
    const examTypes = await getExamTypes();
    populateDropdown(examTypes, examTypeSelect);
  } catch (error) {
    console.error("Error al obtener datos de examTypes desde el backend:", error);
  }

  examTypeContainer.appendChild(examTypeLabel);
  examTypeContainer.appendChild(examTypeSelect);
  examTypesContainer.appendChild(examTypeContainer);

  examTypeCounter++;
}

// Function to fetch and populate dropdown options
function populateDropdown(data, dropdown) {
  data.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.text = item.name;
    dropdown.appendChild(option);
  });
}

// Function to populate doctors or patients dropdown
async function populateDoctorOrPatientDropdown(endpoint, dropdownId) {
  const dropdown = document.getElementById(dropdownId);

  try {
    const data = await (endpoint === "doctors" ? getDoctors() : getPatients());
    populateDropdown(data, dropdown);
  } catch (error) {
    console.error(`Error al obtener datos de ${endpoint} desde el backend:`, error);
  }
}

// Function to register exam
export function registerExam() {
  console.log("Exam registration logic to be implemented.");
}

// Populate dropdowns on page load
document.addEventListener("DOMContentLoaded", function () {
  populateDoctorOrPatientDropdown("doctors", "requestingDoctor");
  populateDoctorOrPatientDropdown("patients", "patient");

  addExamTypeBtn.addEventListener("click", addExamType);
  registerExamBtn.addEventListener("click", registerExam);
});
