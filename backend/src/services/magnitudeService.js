// /backend/src/services/magnitudeService.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todas las magnitudes
async function getAllMagnitudes() {
  try {
    const magnitudes = await prisma.magnitude.findMany({
      include: {
        details: true,
      },
    });
    return magnitudes;
  } catch (error) {
    throw new Error(`Error in getAllMagnitudes: ${error.message}`);
  }
}

// Obtener una magnitud por ID
async function getMagnitudeById(magnitudeId) {
  try {
    const magnitude = await prisma.magnitude.findUnique({
      where: { id: magnitudeId },
      include: {
        details: true,
      },
    });
    return magnitude;
  } catch (error) {
    throw new Error(`Error in getMagnitudeById: ${error.message}`);
  }
}

// Crear una nueva magnitud
async function createMagnitude(magnitudeData) {
  try {
    const newMagnitude = await prisma.magnitude.create({
      data: magnitudeData,
      include: {
        details: true,
      },
    });
    return newMagnitude;
  } catch (error) {
    throw new Error(`Error in createMagnitude: ${error.message}`);
  }
}

// Actualizar una magnitud existente
async function updateMagnitude(magnitudeId, updatedMagnitudeData) {
  try {
    const updatedMagnitude = await prisma.magnitude.update({
      where: { id: magnitudeId },
      data: updatedMagnitudeData,
      include: {
        details: true,
      },
    });
    return updatedMagnitude;
  } catch (error) {
    throw new Error(`Error in updateMagnitude: ${error.message}`);
  }
}

// Eliminar una magnitud por ID
async function deleteMagnitude(magnitudeId) {
  try {
    const deletedMagnitude = await prisma.magnitude.delete({
      where: { id: magnitudeId },
    });
    return deletedMagnitude;
  } catch (error) {
    throw new Error(`Error in deleteMagnitude: ${error.message}`);
  }
}

module.exports = {
  getAllMagnitudes,
  getMagnitudeById,
  createMagnitude,
  updateMagnitude,
  deleteMagnitude,
};
