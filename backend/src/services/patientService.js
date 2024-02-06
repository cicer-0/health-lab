// /backend/src/services/patientService.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todos los pacientes
async function getAllPatients() {
  try {
    const patients = await prisma.patient.findMany({
      include: {
        exams: true,
      },
    });
    return patients;
  } catch (error) {
    throw new Error(`Error in getAllPatients: ${error.message}`);
  }
}

// Obtener un paciente por ID
async function getPatientById(patientId) {
  try {
    const patient = await prisma.patient.findUnique({
      where: { id: patientId },
      include: {
        exams: true,
      },
    });
    return patient;
  } catch (error) {
    throw new Error(`Error in getPatientById: ${error.message}`);
  }
}

// Crear un nuevo paciente
async function createPatient(patientData) {
  try {
    const newPatient = await prisma.patient.create({
      data: patientData,
      include: {
        exams: true,
      },
    });
    return newPatient;
  } catch (error) {
    throw new Error(`Error in createPatient: ${error.message}`);
  }
}

// Actualizar un paciente existente
async function updatePatient(patientId, updatedPatientData) {
  try {
    const updatedPatient = await prisma.patient.update({
      where: { id: patientId },
      data: updatedPatientData,
      include: {
        exams: true,
      },
    });
    return updatedPatient;
  } catch (error) {
    throw new Error(`Error in updatePatient: ${error.message}`);
  }
}

// Eliminar un paciente por ID
async function deletePatient(patientId) {
  try {
    const deletedPatient = await prisma.patient.delete({
      where: { id: patientId },
    });
    return deletedPatient;
  } catch (error) {
    throw new Error(`Error in deletePatient: ${error.message}`);
  }
}

module.exports = {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
};
