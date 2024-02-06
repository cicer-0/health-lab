// /backend/src/services/resultService.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todos los resultados
async function getAllResults() {
  try {
    const results = await prisma.result.findMany({
      include: {
        details: true,
        sample: {
          include: {
            exam: true,
          },
        },
      },
    });
    return results;
  } catch (error) {
    throw new Error(`Error in getAllResults: ${error.message}`);
  }
}

// Obtener un resultado por ID
async function getResultById(resultId) {
  try {
    const result = await prisma.result.findUnique({
      where: { id: resultId },
      include: {
        details: true,
        sample: {
          include: {
            exam: true,
          },
        },
      },
    });
    return result;
  } catch (error) {
    throw new Error(`Error in getResultById: ${error.message}`);
  }
}

// Crear un nuevo resultado
async function createResult(resultData) {
  try {
    const newResult = await prisma.result.create({
      data: resultData,
      include: {
        details: true,
        sample: {
          include: {
            exam: true,
          },
        },
      },
    });
    return newResult;
  } catch (error) {
    throw new Error(`Error in createResult: ${error.message}`);
  }
}

// Actualizar un resultado existente
async function updateResult(resultId, updatedResultData) {
  try {
    const updatedResult = await prisma.result.update({
      where: { id: resultId },
      data: updatedResultData,
      include: {
        details: true,
        sample: {
          include: {
            exam: true,
          },
        },
      },
    });
    return updatedResult;
  } catch (error) {
    throw new Error(`Error in updateResult: ${error.message}`);
  }
}

// Eliminar un resultado por ID
async function deleteResult(resultId) {
  try {
    const deletedResult = await prisma.result.delete({
      where: { id: resultId },
    });
    return deletedResult;
  } catch (error) {
    throw new Error(`Error in deleteResult: ${error.message}`);
  }
}

module.exports = {
  getAllResults,
  getResultById,
  createResult,
  updateResult,
  deleteResult,
};
