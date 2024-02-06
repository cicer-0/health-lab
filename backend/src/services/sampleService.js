// /backend/src/services/sampleService.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todos los registros de muestras
async function getAllSamples() {
  try {
    const samples = await prisma.sample.findMany({
      include: {
        exam: true,
        sampleType: true,
        result: true,
      },
    });
    return samples;
  } catch (error) {
    throw new Error(`Error in getAllSamples: ${error.message}`);
  }
}

// Obtener una muestra por ID
async function getSampleById(sampleId) {
  try {
    const sample = await prisma.sample.findUnique({
      where: { id: sampleId },
      include: {
        exam: true,
        sampleType: true,
        result: true,
      },
    });
    return sample;
  } catch (error) {
    throw new Error(`Error in getSampleById: ${error.message}`);
  }
}

// Crear una nueva muestra
async function createSample(sampleData) {
  try {
    const newSample = await prisma.sample.create({
      data: sampleData,
      include: {
        exam: true,
        sampleType: true,
        result: true,
      },
    });
    return newSample;
  } catch (error) {
    throw new Error(`Error in createSample: ${error.message}`);
  }
}

// Actualizar una muestra existente
async function updateSample(sampleId, updatedSampleData) {
  try {
    const updatedSample = await prisma.sample.update({
      where: { id: sampleId },
      data: updatedSampleData,
      include: {
        exam: true,
        sampleType: true,
        result: true,
      },
    });
    return updatedSample;
  } catch (error) {
    throw new Error(`Error in updateSample: ${error.message}`);
  }
}

// Eliminar una muestra por ID
async function deleteSample(sampleId) {
  try {
    const deletedSample = await prisma.sample.delete({
      where: { id: sampleId },
    });
    return deletedSample;
  } catch (error) {
    throw new Error(`Error in deleteSample: ${error.message}`);
  }
}

module.exports = {
  getAllSamples,
  getSampleById,
  createSample,
  updateSample,
  deleteSample,
};
