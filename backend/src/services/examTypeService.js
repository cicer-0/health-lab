// /backend/src/services/examTypeService.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todos los tipos de exámenes
async function getAllExamTypes() {
  try {
    const examTypes = await prisma.examType.findMany({
      include: {
        details: true,
      },
    });
    return examTypes;
  } catch (error) {
    throw new Error(`Error in getAllExamTypes: ${error.message}`);
  }
}

// Obtener un tipo de examen por ID
async function getExamTypeById(examTypeId) {
  try {
    const examType = await prisma.examType.findUnique({
      where: { id: examTypeId },
      include: {
        details: true,
      },
    });
    return examType;
  } catch (error) {
    throw new Error(`Error in getExamTypeById: ${error.message}`);
  }
}

// Crear un nuevo tipo de examen
async function createExamType(examTypeData) {
  try {
    const newExamType = await prisma.examType.create({
      data: examTypeData,
      include: {
        details: true,
      },
    });
    return newExamType;
  } catch (error) {
    throw new Error(`Error in createExamType: ${error.message}`);
  }
}

// Actualizar un tipo de examen existente
async function updateExamType(examTypeId, updatedExamTypeData) {
  try {
    const updatedExamType = await prisma.examType.update({
      where: { id: examTypeId },
      data: updatedExamTypeData,
      include: {
        details: true,
      },
    });
    return updatedExamType;
  } catch (error) {
    throw new Error(`Error in updateExamType: ${error.message}`);
  }
}

// Eliminar un tipo de examen por ID
async function deleteExamType(examTypeId) {
  try {
    const deletedExamType = await prisma.examType.delete({
      where: { id: examTypeId },
    });
    return deletedExamType;
  } catch (error) {
    throw new Error(`Error in deleteExamType: ${error.message}`);
  }
}

module.exports = {
  getAllExamTypes,
  getExamTypeById,
  createExamType,
  updateExamType,
  deleteExamType,
};
