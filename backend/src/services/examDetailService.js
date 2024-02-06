// /backend/src/services/examDetailService.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todos los detalles de exámenes
async function getAllExamDetails() {
  try {
    const examDetails = await prisma.examDetail.findMany({
      include: {
        exam: true,
        examType: true,
      },
    });
    return examDetails;
  } catch (error) {
    throw new Error(`Error in getAllExamDetails: ${error.message}`);
  }
}

// Obtener un detalle de examen por ID
async function getExamDetailById(examDetailId) {
  try {
    const examDetail = await prisma.examDetail.findUnique({
      where: { id: examDetailId },
      include: {
        exam: true,
        examType: true,
      },
    });
    return examDetail;
  } catch (error) {
    throw new Error(`Error in getExamDetailById: ${error.message}`);
  }
}

// Crear un nuevo detalle de examen
async function createExamDetail(examDetailData) {
  try {
    const newExamDetail = await prisma.examDetail.create({
      data: examDetailData,
      include: {
        exam: true,
        examType: true,
      },
    });
    return newExamDetail;
  } catch (error) {
    throw new Error(`Error in createExamDetail: ${error.message}`);
  }
}

// Actualizar un detalle de examen existente
async function updateExamDetail(examDetailId, updatedExamDetailData) {
  try {
    const updatedExamDetail = await prisma.examDetail.update({
      where: { id: examDetailId },
      data: updatedExamDetailData,
      include: {
        exam: true,
        examType: true,
      },
    });
    return updatedExamDetail;
  } catch (error) {
    throw new Error(`Error in updateExamDetail: ${error.message}`);
  }
}

// Eliminar un detalle de examen por ID
async function deleteExamDetail(examDetailId) {
  try {
    const deletedExamDetail = await prisma.examDetail.delete({
      where: { id: examDetailId },
    });
    return deletedExamDetail;
  } catch (error) {
    throw new Error(`Error in deleteExamDetail: ${error.message}`);
  }
}

module.exports = {
  getAllExamDetails,
  getExamDetailById,
  createExamDetail,
  updateExamDetail,
  deleteExamDetail,
};
