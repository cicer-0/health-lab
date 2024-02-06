// /backend/src/services/doctorService.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todos los doctores
async function getAllDoctors() {
  try {
    const doctors = await prisma.doctor.findMany({
      include: {
        exams: true,
      },
    });
    return doctors;
  } catch (error) {
    throw new Error(`Error in getAllDoctors: ${error.message}`);
  }
}

// Obtener un doctor por ID
async function getDoctorById(doctorId) {
  try {
    const doctor = await prisma.doctor.findUnique({
      where: { id: doctorId },
      include: {
        exams: true,
      },
    });
    return doctor;
  } catch (error) {
    throw new Error(`Error in getDoctorById: ${error.message}`);
  }
}

// Crear un nuevo doctor
async function createDoctor(doctorData) {
  try {
    const newDoctor = await prisma.doctor.create({
      data: doctorData,
      include: {
        exams: true,
      },
    });
    return newDoctor;
  } catch (error) {
    throw new Error(`Error in createDoctor: ${error.message}`);
  }
}

// Actualizar un doctor existente
async function updateDoctor(doctorId, updatedDoctorData) {
  try {
    const updatedDoctor = await prisma.doctor.update({
      where: { id: doctorId },
      data: updatedDoctorData,
      include: {
        exams: true,
      },
    });
    return updatedDoctor;
  } catch (error) {
    throw new Error(`Error in updateDoctor: ${error.message}`);
  }
}

// Eliminar un doctor por ID
async function deleteDoctor(doctorId) {
  try {
    const deletedDoctor = await prisma.doctor.delete({
      where: { id: doctorId },
    });
    return deletedDoctor;
  } catch (error) {
    throw new Error(`Error in deleteDoctor: ${error.message}`);
  }
}

module.exports = {
  getAllDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor,
};
