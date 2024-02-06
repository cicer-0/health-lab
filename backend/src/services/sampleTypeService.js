// /backend/src/services/sampleTypeService.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todos los tipos de muestras
async function getAllSampleTypes() {
  try {
    const sampleTypes = await prisma.sampleType.findMany({
      include: {
        samples: true,
      },
    });
    return sampleTypes;
  } catch (error) {
    throw new Error(`Error in getAllSampleTypes: ${error.message}`);
  }
}

// Obtener un tipo de muestra por ID
async function getSampleTypeById(sampleTypeId) {
  try {
    const sampleType = await prisma.sampleType.findUnique({
      where: { id: sampleTypeId },
      include: {
        samples: true,
      },
    });
    return sampleType;
  } catch (error) {
    throw new Error(`Error in getSampleTypeById: ${error.message}`);
  }
}

// Crear un nuevo tipo de muestra
async function createSampleType(sampleTypeData) {
  try {
    const newSampleType = await prisma.sampleType.create({
      data: sampleTypeData,
      include: {
        samples: true,
      },
    });
    return newSampleType;
  } catch (error) {
    throw new Error(`Error in createSampleType: ${error.message}`);
  }
}

// Actualizar un tipo de muestra existente
async function updateSampleType(sampleTypeId, updatedSampleTypeData) {
  try {
    const updatedSampleType = await prisma.sampleType.update({
      where: { id: sampleTypeId },
      data: updatedSampleTypeData,
      include: {
        samples: true,
      },
    });
    return updatedSampleType;
  } catch (error) {
    throw new Error(`Error in updateSampleType: ${error.message}`);
  }
}

// Eliminar un tipo de muestra por ID
async function deleteSampleType(sampleTypeId) {
  try {
    const deletedSampleType = await prisma.sampleType.delete({
      where: { id: sampleTypeId },
    });
    return deletedSampleType;
  } catch (error) {
    throw new Error(`Error in deleteSampleType: ${error.message}`);
  }
}

module.exports = {
  getAllSampleTypes,
  getSampleTypeById,
  createSampleType,
  updateSampleType,
  deleteSampleType,
};
