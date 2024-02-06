// /backend/src/services/detailResultService.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todos los detalles de resultados
async function getAllDetailResults() {
  try {
    const detailResults = await prisma.detailResult.findMany({
      include: {
        result: true,
        magnitude: true,
      },
    });
    return detailResults;
  } catch (error) {
    throw new Error(`Error in getAllDetailResults: ${error.message}`);
  }
}

// Obtener un detalle de resultado por ID
async function getDetailResultById(detailResultId) {
  try {
    const detailResult = await prisma.detailResult.findUnique({
      where: { id: detailResultId },
      include: {
        result: true,
        magnitude: true,
      },
    });
    return detailResult;
  } catch (error) {
    throw new Error(`Error in getDetailResultById: ${error.message}`);
  }
}

// Crear un nuevo detalle de resultado
async function createDetailResult(detailResultData) {
  try {
    const newDetailResult = await prisma.detailResult.create({
      data: detailResultData,
      include: {
        result: true,
        magnitude: true,
      },
    });
    return newDetailResult;
  } catch (error) {
    throw new Error(`Error in createDetailResult: ${error.message}`);
  }
}

// Actualizar un detalle de resultado existente
async function updateDetailResult(detailResultId, updatedDetailResultData) {
  try {
    const updatedDetailResult = await prisma.detailResult.update({
      where: { id: detailResultId },
      data: updatedDetailResultData,
      include: {
        result: true,
        magnitude: true,
      },
    });
    return updatedDetailResult;
  } catch (error) {
    throw new Error(`Error in updateDetailResult: ${error.message}`);
  }
}

// Eliminar un detalle de resultado por ID
async function deleteDetailResult(detailResultId) {
  try {
    const deletedDetailResult = await prisma.detailResult.delete({
      where: { id: detailResultId },
    });
    return deletedDetailResult;
  } catch (error) {
    throw new Error(`Error in deleteDetailResult: ${error.message}`);
  }
}

module.exports = {
  getAllDetailResults,
  getDetailResultById,
  createDetailResult,
  updateDetailResult,
  deleteDetailResult,
};
